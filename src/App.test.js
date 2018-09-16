import { total } from "./App";

//creates a "MOCK" or fake function
const add = jest.fn(() => 3);

//unit test
//it only tests one thing
test("<Add />", () => {
  // const value = add(1, 2);
  // expect(value).toBe(3);
  expect(add(1, 2)).toBe(3);
  expect(add(1, 3)).toBe(3);

  //can check to see if functions are called
  //upon event handlers, and see if the proper
  //values are passed in upon being called
  expect(add).toHaveBeenCalledTimes(2);
  expect(add).toHaveBeenCalledWith(1, 3);
  //this provides more values to make the function be tested

  //expect(add(100, 500)).toBe(601);
  //this test would make the entire test fail
});

//integration testing
//tests many functions or features working together
// test("<Total />", () => {
//   expect(total(5, 20)).toBe("$25");
// });
