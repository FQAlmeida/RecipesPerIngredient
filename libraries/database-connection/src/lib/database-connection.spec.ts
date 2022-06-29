import { databaseConnection } from "./database-connection";

describe("databaseConnection", () => {
  it("should work", () => {
    expect(databaseConnection()).toEqual("database-connection");
  });
});
