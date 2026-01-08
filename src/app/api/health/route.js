export async function GET() {
  const env = process.env.ENV || "local";

  return new Response(
    JSON.stringify({ status: "ok", env }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}