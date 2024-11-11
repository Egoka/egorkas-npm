export const log = (value?: string) => console.log(value ?? "Work project hello")
export const sum = (values) => {
  console.log("test")
  if (!Array.isArray(values)) {
    throw new TypeError("Input should be an array of numbers")
  }
  return values.reduce((acc, cur) => {
    if (typeof cur !== "number") {
      throw new TypeError("All elements in the array should be numbers")
    }
    return acc + cur
  }, 0)
}
