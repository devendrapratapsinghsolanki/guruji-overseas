import { NextRequest, NextResponse } from "next/server";
import { getAdminSessionFromRequest } from "@/lib/auth";

export async function GET(request: NextRequest) {
  const session = await getAdminSessionFromRequest(request);

  if (!session) {
    return NextResponse.json(
      { authenticated: false, message: "Unauthorized." },
      { status: 401 }
    );
  }

  return NextResponse.json({
    authenticated: true,
    user: session,
  });
}
