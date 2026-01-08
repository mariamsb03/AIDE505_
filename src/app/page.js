async function getHealth() {
  const res = await fetch("http://localhost:3000/api/health", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const data = await getHealth();

  return (
    <main style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>DevOps / MLOps Lab (Next.js)</h1>
      <p><b>API Status:</b> {data.status}</p>
      <p><b>Running ENV:</b> {data.env}</p>
    </main>
  );
}
