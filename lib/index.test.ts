import { describe, it, expect, vi } from "vitest"
import { log, sum } from "fishtvue/index"

describe("Testing lib", () => {
  describe("log", () => {
    it("log update title", () => {
      const logSpy = vi.spyOn(console, "log")
      log()
      expect(logSpy).toHaveBeenCalledWith("Work project hello")
      logSpy.mockRestore()
    })
    it("log add value", () => {
      const logSpy = vi.spyOn(console, "log")
      log("test text")
      expect(logSpy).toHaveBeenCalledWith("test text")
      logSpy.mockRestore()
    })
    it("log add value", () => {
      const logSpy = vi.spyOn(console, "log")
      log("New test text")
      expect(logSpy).toHaveBeenCalledWith("New test text")
      logSpy.mockRestore()
    })
  })
  describe("sum", () => {
    it("should return the sum of all numbers in the array", () => {
      expect(sum([1, 2, 3, 4])).toBe(10)
      expect(sum([10, 20, 30])).toBe(60)
      expect(sum([-1, -2, -3, -4])).toBe(-10)
      expect(sum([])).toBe(0)
    })

    it("should throw an error if the input is not an array", () => {
      expect(() => sum(123)).toThrow(TypeError)
      expect(() => sum({ a: 1, b: 2 })).toThrow(TypeError)
      expect(() => sum("string")).toThrow(TypeError)
    })

    it("should throw an error if any element in the array is not a number", () => {
      expect(() => sum([1, 2, "3", 4])).toThrow(TypeError)
      expect(() => sum([1, null, 3])).toThrow(TypeError)
      expect(() => sum([1, {}, 3])).toThrow(TypeError)
    })
  })
})
