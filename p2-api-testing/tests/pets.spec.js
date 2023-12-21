const request = require("supertest");
const jestJoi = require("jest-joi");
const Schemas = require("./schemas");
const baseURL = "http://localhost:8080/api/v3";

describe("Find Pets by status", () => {
  expect.extend(jestJoi.matchers);
  it("Test /pet/findByStatus endpoint", async () => {
    const response = await request(baseURL)
      .get("/pet/findByStatus")
      .query({ status: "available" });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveLength(7);
    expect(response.body).toMatchSchema(Schemas["/pet/findByStatus"]);
  });
  
});
