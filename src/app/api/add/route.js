export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const a = Number(searchParams.get("a"));
  const b = Number(searchParams.get("b"));

  return new Response(
    JSON.stringify({ result: a + b }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}