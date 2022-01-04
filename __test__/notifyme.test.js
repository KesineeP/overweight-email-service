const notifyme = require("../routes/notifyme");

test("should name be Bob", () => {
  const name = "bob";
  expect(name).toBe("bob");
});
