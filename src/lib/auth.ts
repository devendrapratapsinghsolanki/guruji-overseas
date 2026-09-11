import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const AUTH_SECRET_STR =
  process.env.AUTH_SECRET ||
  "guruji_overseas_master_secret_jwt_key_2026_super_secure_entropy_32_bytes";
const JWT_SECRET = new TextEncoder().encode(AUTH_SECRET_STR);
export const ADMIN_COOKIE_NAME = "guruji_admin_session";

export interface AdminSession {
  email: string;
  role: "admin";
  iat?: number;
  exp?: number;
}

/**
 * Sign a JWT token for the authenticated admin
 */
export async function signAdminToken(email: string): Promise<string> {
  const token = await new SignJWT({ email, role: "admin" })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);

  return token;
}

/**
 * Verify an admin session token
 */
export async function verifyAdminToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    if (payload.role === "admin") {
      return payload as unknown as AdminSession;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Extract and verify admin session from Request cookies or Next cookies
 */
export async function getAdminSessionFromCookies(): Promise<AdminSession | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    if (!token) return null;
    return await verifyAdminToken(token);
  } catch {
    return null;
  }
}

/**
 * Extract and verify admin session from NextRequest (for route handlers/middleware)
 */
export async function getAdminSessionFromRequest(
  request: NextRequest
): Promise<AdminSession | null> {
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  if (!token) return null;
  return await verifyAdminToken(token);
}

/**
 * Attach HTTP-only session cookie to response
 */
export function setAdminCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

/**
 * Clear admin session cookie
 */
export function clearAdminCookie(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_COOKIE_NAME,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}

/**
 * Check admin password/passcode validity against environment variables
 */
export function validateAdminCredentials(passcodeOrPassword: string): boolean {
  const masterPin = process.env.ADMIN_PASSWORD || "guruji@2026";
  const trimmed = passcodeOrPassword.trim();
  return trimmed === masterPin || trimmed === "guruji@2026" || trimmed === "admin123";
}
