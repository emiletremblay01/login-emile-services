import { type NextRequest } from "next/server";

export function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nextUrl = request.nextUrl;
  console.log(nextUrl);
  const query = searchParams.get("nip");
  if (!query) {
    return new Response("Missing query parameter NIP", { status: 400 });
  }
  return new Response(`Query parameter NIP is: ${query}`);
}
