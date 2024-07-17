import { type NextRequest, NextResponse } from "next/server";
import { isNipOk } from "@/data/user";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const origin = request.nextUrl.origin;

  const nip = searchParams.get("nip");

  if (!nip) {
    return new NextResponse("Missing query parameter NIP", { status: 400 });
  }

  const nipOk = isNipOk(nip, origin);

  if (!nipOk) {
    return new NextResponse("Invalid NIP", { status: 403 });
  }

  return new NextResponse("Nip ok!", { status: 200 });
}
