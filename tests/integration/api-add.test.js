import request from "supertest";

const BASE_URL = "http://localhost:3000";

test("GET /api/add returns sum", async () => {
  const res = await request(BASE_URL).get("/api/add?a=10&b=5");

  expect(res.statusCode).toBe(200);
  expect(res.body.result).toBe(15);
});