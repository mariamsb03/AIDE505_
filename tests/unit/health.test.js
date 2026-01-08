import { GET } from "@/app/api/health/route";

test("health API returns ok", async () => {
  const res = await GET();
  const body = await res.json();

  expect(body.status).toBe("ok");
});
