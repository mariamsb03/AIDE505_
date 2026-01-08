test("ENV variable exists or defaults to local", () => {
  const env = process.env.ENV || "local";
  expect(["local", "online"]).toContain(env);
});
