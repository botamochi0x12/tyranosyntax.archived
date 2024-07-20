//
import {xtest, test, describe, expect} from "@jest/globals"

import {Linter} from "./Linter"

describe("linter", () => {
  describe("#diagnostics", () => {
    test("empty text", () => {
      const linter = Linter.fromSrc("");
      expect(linter.diagnostics[0].toJson()).toMatchObject({})
    })
    test("text with no violation", () => {
      const linter = Linter.fromSrc("いのちのかがやき");
      expect(linter.diagnostics[0].toJson()).toMatchObject({})
    })
    xtest("text with a violation", () => {
      const linter = Linter.fromSrc("「こんにちは、世界。」");
      expect(linter.diagnostics[0].toJson()).toMatchObject({line: 1, column: 10})
    })
  })
})
