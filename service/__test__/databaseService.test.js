const databaseService = require("../databaseService");
const request = require("supertest");

test("addUserEmailToEmailList function exists", () => {
  expect(typeof databaseService.addUserEmailToEmailList).toEqual("function");
});

test("deleteUserEmailFromEmailList function exists", () => {
  expect(typeof databaseService.deleteUserEmailFromEmailList).toEqual(
    "function"
  );
});
