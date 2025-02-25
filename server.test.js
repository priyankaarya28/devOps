const request = require("supertest");
const app = require("./server");

test("GET /sum?a=2&b=3", async () => {
  const res = await request(app).get("/sum?a=2&b=3");
  expect(res.body.result).toBe(5);
});

test("GET /multiply?a=2&b=3", async () => {
  const res = await request(app).get("/multiply?a=2&b=3");
  expect(res.body.result).toBe(6);
});
