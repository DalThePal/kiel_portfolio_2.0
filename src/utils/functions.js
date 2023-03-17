export const isBrowser = () => typeof window !== "undefined"

export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}