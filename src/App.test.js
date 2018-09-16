import { add } from "./App";

//unit test
//it only tests one thing
test("<Add />", () => {
  // const value = add(1, 2);
  // expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);

  expect(add(10, 50)).toBe(60);
  //this provides more values to make the function be tested

  //expect(add(100, 500)).toBe(601);
  //this test would make the entire test fail
});

// test("");
