import request from "supertest";

const BASE_URL = "http://localhost:3000";

test("GET /api/health works", async () => {
  const res = await request(BASE_URL).get("/api/health");

  expect(res.statusCode).toBe(200);
  expect(res.body.status).toBe("ok");
});