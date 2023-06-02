import { sleep } from "utils/functions"

// a strongly typed event emitter

class Loader {
  eventTarget

  constructor() {
    this.eventTarget = new EventTarget()
  }

  addEventListener(
    eventName,
    listener
  ) {
    this.eventTarget.addEventListener(eventName, listener)
  }

  removeEventListener(
    eventName,
    listener
  ) {
    this.eventTarget.removeEventListener(eventName, listener)
  }

  dispatchEvent(eventType, event) {
    this.eventTarget.dispatchEvent(event)
  }
}

const loader = new Loader()

export default loader

export const promisesToAwait = []

/**
 * wait for a promise to settle before transitioning to the next page
 * useful for waiting on a file, such as a video, to load
 * @param promise promise to await
 */
export function transitionAwaitPromise(promise) {
  promisesToAwait.push(Promise.race([promise, sleep(10000)]))
}

export const recursiveAllSettled = async (
  promises,
  promisesToExclude = []
) => {
  const promisesCopy = [...promises].filter(
    promise => !promisesToExclude.includes(promise)
  )
  if (promisesCopy.length === 0) return

  await Promise.allSettled(promisesCopy)
  await recursiveAllSettled(promises, [...promisesToExclude, ...promisesCopy])
  promisesToAwait.length = 0
}
