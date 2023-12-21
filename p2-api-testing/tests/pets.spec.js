const request = require("supertest");
const jestJoi = require("jest-joi");
const Schemas = require("./schemas");
var Chance = require("chance")

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

  it("Test /pet add a new pet to the store", async () => {
    var chance = new Chance();

    const payload = {
      id: chance.integer({min: 20, max: 1000}),
      name: chance.first(),
      category: {
        id: 1,
        name: "Cats"
      },
      photoUrls: [
        "https://cdn.pixabay.com/photo/2017/05/29/15/34/kitten-2354016_960_720.jpg"
      ],
      tags: [
        {
          id: 1,
          name: "kitty"
        }
      ],
      status: "pending"
    }

    const response = await request(baseURL)
      .post("/pet")
      .send(payload)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");

    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchSchema(Schemas["/pet/newPet"]);
});

it("Test update an existing pet", async () => {
    const petId = 3
    const petStatus = 'sold'
    const response = await request(baseURL).put("/pet").send({
        id: petId,
        status: petStatus
    }).set("Content-Type", "application/json")
    .set("Accept", "application/json");
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchSchema(Schemas["/pet/updatePet"]);
    expect(response.body.id).toBe(petId)
    expect(response.body.status).toEqual(petStatus)
  })
});
