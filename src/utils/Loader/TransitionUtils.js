
import { startTransition, useEffect } from "react"

import { navigate as gatsbyNavigate } from "@reach/router"
import gsap from "gsap"
import ScrollSmoother from "gsap/ScrollSmoother"

import { pathnameMatches, sleep } from "utils/functions"
import { onUnmount, pageReady } from "utils/pageReady"

import loader, {
  promisesToAwait,
  recursiveAllSettled,
} from "."
import { getLoaderIsDone } from "./LoaderUtils"


const allTransitions = {}

export const registerTransition = (
  name,
  details
) => {
  const {
    in: inAnimation,
    out: outAnimation,
    inDuration,
    outDuration,
  } = details
  const previous = allTransitions[name] ?? { inAnimation: [], outAnimation: [] }
  allTransitions[name] = {
    inAnimation: [
      ...previous.inAnimation,
      { callback: inAnimation, duration: inDuration },
    ],
    outAnimation: [
      ...previous.outAnimation,
      { callback: outAnimation, duration: outDuration },
    ],
  }
}

export const unregisterTransition = (
  name,
  callbacksToRemove
) => {
  if (callbacksToRemove) {
    const previous = allTransitions[name] ?? {
      inAnimation: [],
      outAnimation: [],
    }
    allTransitions[name] = {
      inAnimation: previous.inAnimation.filter(
        ({ callback }) => !callbacksToRemove.includes(callback)
      ),
      outAnimation: previous.outAnimation.filter(
        ({ callback }) => !callbacksToRemove.includes(callback)
      ),
    }
  } else {
    allTransitions[name] = { inAnimation: [], outAnimation: [] }
  }
}

let pendingTransition = null
let currentAnimation = null

export const loadPage = async (
  to,
  transition
) => {

  if (currentAnimation !== null) {
    if (!pathnameMatches(to, currentAnimation))
      pendingTransition = { name: to, transition }
    return
  }

  if (pathnameMatches(to, window.location.pathname)) {
    ScrollSmoother.get()?.paused(false)
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
    loader.dispatchEvent("scrollToTop", new CustomEvent("scrollToTop"))
    return
  }

  currentAnimation = to

  if (!transition || !allTransitions[transition]) {
    currentAnimation = null
    await navigate(to)

    // we need to wait for the *next* page to load, so wait for unmount, then pageReady
    onUnmount(() => {
      pageReady()
        .then(() => {
          ScrollSmoother.get()?.paused(false)
          ScrollSmoother.get()?.scrollTo(0)
          window.scrollTo(0, 1)
          // fire event with detail "none"
          loader.dispatchEvent(
            "transitionEnd",
            new CustomEvent<"none">("transitionEnd", { detail: "none" })
          )
          loader.dispatchEvent(
            "anyEnd",
            new CustomEvent<"none">("anyEnd", { detail: "none" })
          )
        })
        .catch(console.error)
    })

    return
  }

  while (!getLoaderIsDone()) await sleep(100)

  const animationContext = gsap.context(() => {})
  const enterAnimations = allTransitions[transition]?.inAnimation ?? []

  const entranceDuration = enterAnimations.reduce((duration, animation) => {
    const { callback, duration: animationDuration } = animation
    animationContext.add(callback)
    return Math.max(duration, animationDuration)
  }, 0)

  loader.dispatchEvent("anyStart", new CustomEvent("anyStart"))
  loader.dispatchEvent(
    "transitionStart",
    new CustomEvent("transitionStart", { detail: transition })
  )
  ScrollSmoother.get()?.paused(true)

  // wait for entrance animation to finish
  await sleep(entranceDuration * 1000)

  // actually navigate to the page
  await navigate(to, () => {
    animationContext.revert()
  })
  await pageReady()
  ScrollSmoother.get()?.scrollTo(0)
  window.scrollTo(0, 1)

  promisesToAwait.push(sleep(100))
  await recursiveAllSettled(promisesToAwait)

  const exitAnimations = allTransitions[transition]?.outAnimation ?? []

  // run each animation, add it to the context, and get the duration of the longest one
  const exitDuration = exitAnimations.reduce((duration, animation) => {
    const { callback, duration: animationDuration } = animation
    animationContext.add(callback)
    return Math.max(duration, animationDuration)
  }, 0)

  // wait for exit animation to finish
  await sleep(exitDuration * 1000 + 10)

  // dispatch finished events
  loader.dispatchEvent("anyEnd", new CustomEvent("anyEnd"))
  loader.dispatchEvent(
    "transitionEnd",
    new CustomEvent("transitionEnd", { detail: transition })
  )
  ScrollSmoother.get()?.paused(false)

  // cleanup and reset
  animationContext.revert()
  currentAnimation = null
  if (pendingTransition) {
    // start the next transition if applicable
    loadPage(pendingTransition.name, pendingTransition.transition).catch(
      (e) => {
        throw new Error(e)
      }
    )
    pendingTransition = null
  }
}

/**
 * navigate to an external or internal link without a transition
 * @param to the link to navigate to
 * @param cleanupFunction a function to reset the page to its original state (if back button is pressed after external link)
 */
export const navigate = async (to, cleanupFunction) => {
  const isExternal = to.substring(0, 8).includes("//")

  if (isExternal) {
    window.location.href = to

    // if the user presses the back button after navigation, we'll need to cleanup any animations
    setTimeout(() => {
      cleanupFunction?.()
    }, 1000)
  } else {
    return new Promise((resolve, reject) => {
      startTransition(() => {
        gatsbyNavigate(to).then(resolve).catch(reject)
      })
    })
  }
}

export function useBackButton() {
  useEffect(() => {
    const handleBackButton = () => {
      loader.dispatchEvent("initialStart", new CustomEvent("initialStart"))
      loader.dispatchEvent(
        "anyStart",
        new CustomEvent<"none">("anyStart", { detail: "none" })
      )

      // we need to wait for the *next* page to load, so wait for unmount, then pageReady
      onUnmount(() => {
        pageReady()
          .then(() => {
            setTimeout(() => {
              // fire event with detail "none"
              loader.dispatchEvent(
                "transitionEnd",
                new CustomEvent<"none">("transitionEnd", { detail: "none" })
              )
              loader.dispatchEvent(
                "anyEnd",
                new CustomEvent<"none">("anyEnd", { detail: "none" })
              )
              ScrollSmoother.get()?.paused(false)
            }, 500)
          })
          .catch(console.error)
      })
    }
    window.addEventListener("popstate", handleBackButton)
    return () => window.removeEventListener("popstate", handleBackButton)
  })
}
