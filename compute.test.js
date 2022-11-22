const compute = require('./compute.js');
  
test('Test', () => {
  expect(compute(1)).toBe("1");
  expect(compute("1")).toBe("1");
  expect(compute("2")).toBe("2");
  expect(compute("3")).toBe("FooFoo");
  expect(compute("4")).toBe("4");
  expect(compute("5")).toBe("BarBar");
  expect(compute("6")).toBe("Foo");
  expect(compute("7")).toBe("QixQix");
  expect(compute("8")).toBe("8");
  expect(compute("9")).toBe("Foo");
  expect(compute("10")).toBe("Bar*");
  expect(compute("13")).toBe("Foo");
  expect(compute("15")).toBe("FooBarBar");
  expect(compute("21")).toBe("FooQix");
  expect(compute("33")).toBe("FooFooFoo");
  expect(compute("51")).toBe("FooBar");
  expect(compute("53")).toBe("BarFoo");
  expect(compute("101")).toBe("1*1");
  expect(compute("303")).toBe("FooFoo*Foo");
  expect(compute("105")).toBe("FooBarQix*Bar");
  expect(compute("10101")).toBe("FooQix**");
});