import { type NextRequest, NextResponse } from "next/server";
import { isNipOk } from "@/data/user";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nip, url } = body;

    if (!nip) {
      return new NextResponse("Missing nip property in body", { status: 400 });
    }

    if (!url) {
      return new NextResponse("Missing url property in body", { status: 400 });
    }

    const nipOk = await isNipOk(nip, url);

    if (!nipOk) {
      return new NextResponse("Invalid NIP", { status: 403 });
    }

    return new NextResponse("Nip ok!", { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("An error occurred!", { status: 500 });
  }
}
