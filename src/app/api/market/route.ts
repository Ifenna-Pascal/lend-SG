import { NextApiRequest } from "next";

export async function GET() {
  const response = await fetch(
    "http://3.80.55.144:21102/governance/biturbolend",
  );
  if (!response.ok) {
    return new Response("Error fetching data", { status: 500 });
  }

  const data = await response.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
