import { ScrollSmoother } from "gsap/ScrollSmoother"

import loader, { promisesToAwait, recursiveAllSettled } from "."
import { isBrowser, sleep } from "utils/functions"
import { pageReady } from "utils/pageReady"

const libraryConfig = {
  /**
   * if true, the fresponsive util will scale on fullWidth breakpoints
   */
  scaleFully: true,
  /**
   * get the amount of time needed to load the page
   * @param startTime the number of MS the page spent loading on the network so far
   */
  getTimeNeeded: (startTime) => startTime * 2 + 1000,
}

const GET_TIME_NEEDED = libraryConfig.getTimeNeeded

const EXTRA_DELAY = 5000


const progressCallbacks = []
let animations = []
let isComplete = false
const startTime = performance.now()
const timeNeeded = GET_TIME_NEEDED(startTime)
let loaderIsDone = false
export const getLoaderIsDone = () => loaderIsDone

/**
 * call all callbacks and set done to true
 */
async function onComplete() {
  await recursiveAllSettled(promisesToAwait)

  loader.dispatchEvent("anyStart", new CustomEvent("anyStart"))
  loader.dispatchEvent("initialStart", new CustomEvent("initialStart"))

  progressCallbacks.forEach(cb => cb(100))
  loader.dispatchEvent(
    "progressUpdated",
    new CustomEvent("progressUpdated", { detail: 100 })
  )
  isComplete = true
  await sleep(250)

  const longestAnimation = animations.reduce((longest, animation) => {
    animation.callback()
    return Math.max(longest, animation.duration)
  }, 0)

  await sleep(longestAnimation * 1000 + 10)
  loaderIsDone = true

  ScrollSmoother.get()?.paused(false)

  loader.dispatchEvent("anyEnd", new CustomEvent("anyEnd"))
  loader.dispatchEvent("initialEnd", new CustomEvent("initialEnd"))
}

const updatePercent = () => {
  pageReady()
    .then(async () => {
      // short circuit if there are no callbacks or animations
      if (progressCallbacks.length === 0 && animations.length === 0) {
        if (!isComplete) await onComplete()
      }
    })
    .catch(async () => {
      if (!isComplete) await onComplete()
    })

  if (isComplete) return
  const currentTime = performance.now()
  const progress = ((currentTime - startTime) / timeNeeded) * 100
  if (progress >= 99) {
    pageReady()
      .then(async () => {
        if (!isComplete) await onComplete()
      })
      .catch(async () => {
        if (!isComplete) await onComplete()
      })
  } else {
    progressCallbacks.forEach(cb => cb(progress))
    loader.dispatchEvent(
      "progressUpdated",
      new CustomEvent("progressUpdated", { detail: progress })
    )
    if (isBrowser()) requestAnimationFrame(updatePercent)
  }
}
if (isBrowser()) updatePercent()

if (isBrowser())
  pageReady()
    .then(async () => {
      await sleep(EXTRA_DELAY)
      if (!isComplete) await onComplete()
    })
    .catch(async () => {
      await sleep(EXTRA_DELAY)
      if (!isComplete) await onComplete()
    })

export const registerLoaderCallback = (animation) => {
  if (isComplete) animation.callback()
  else animations.push(animation)
}

export const registerProgress = (callback) => {
  if (isComplete) callback(100)
  else progressCallbacks.push(callback)
}

export const unregisterLoaderCallback = (completionFunction) => {
  animations = animations.filter(
    animation => animation.callback !== completionFunction
  )
}

export const unregisterProgress = (callback) => {
  const index = progressCallbacks.indexOf(callback)
  if (index > -1) progressCallbacks.splice(index, 1)
}
