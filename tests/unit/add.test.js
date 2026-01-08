import { GET } from "@/app/api/add/route";

test("add API returns correct sum", async () => {
  const req = {
    url: "http://localhost:3000/api/add?a=2&b=3",
  };

  const res = await GET(req);
  const body = await res.json();

  expect(body.result).toBe(5);
});
