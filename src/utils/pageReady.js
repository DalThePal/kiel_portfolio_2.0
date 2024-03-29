import { useEffect, useState } from "react"

import { sleep } from "utils/functions"

let waitingForPage = true

export async function pageReady(callback) {
  // need to await in loop since pageReady is outside the react cycle
  // eslint-disable-next-line no-await-in-loop
  while (waitingForPage) await sleep(100)

  return callback?.()
}

export const usePageReady = () => {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    pageReady(() => setReady(true)).catch(console.error)

    return () => {
      setReady(false)
    }
  })

  return ready
}

const functionsToRunOnUnmount = []

export function useTrackPageReady() {
  useEffect(() => {
    waitingForPage = false

    return () => {
      waitingForPage = true
      functionsToRunOnUnmount.forEach(fn => fn())
      functionsToRunOnUnmount.length = 0
    }
  })
}

export function onUnmount(callback) {
  functionsToRunOnUnmount.push(callback)
}
