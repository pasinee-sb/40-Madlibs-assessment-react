const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("addCommas function", () => {
  it("should add commas to numbers without decimal parts", () => {
    expect(addCommas(123)).toBe("123");
    expect(addCommas(123456)).toBe("123,456");
    expect(addCommas(1234567890)).toBe("1,234,567,890");
  });

  it("should add commas to numbers with decimal parts", () => {
    expect(addCommas(123.45)).toBe("123.45");
    expect(addCommas(123456.789)).toBe("123,456.789");
    expect(addCommas(1234567890.123)).toBe("1,234,567,890.123");
  });

  it("should handle negative numbers", () => {
    expect(addCommas(-123)).toBe("-123");
    expect(addCommas(-123456)).toBe("-123,456");
    expect(addCommas(-1234567890)).toBe("-1,234,567,890");
  });

  it("should handle numbers with only a decimal part", () => {
    expect(addCommas(0.123)).toBe("0.123");
    expect(addCommas(0.456789)).toBe("0.456789");
    expect(addCommas(0.000123)).toBe("0.000123");
  });
});
