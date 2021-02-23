import { GetArray, isArray } from "./array";

describe("Array utils", () => {
  test("Check array type", () => {
    expect(isArray("test")).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
    expect(isArray({})).toBeFalsy();
    expect(isArray([])).toBeTruthy();
    expect(isArray([12, 33])).toBeTruthy();
  });
  test("Return emtpy array with any non array type input", () => {
    expect(GetArray(undefined)).toEqual([]);
    expect(GetArray(null)).toEqual([]);
    expect(GetArray("string")).toEqual([]);
  });

  test("Return array in any case", () => {
    expect(GetArray([])).toEqual([]);
    expect(GetArray([44, 21])).toEqual([44, 21]);
    expect(GetArray("string")).toEqual([]);
  });
});
