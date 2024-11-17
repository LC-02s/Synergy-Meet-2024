export default function wrap({ min = 0, max = 0, value = 0 }) {
  const rangeSize = max - min

  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min
}
