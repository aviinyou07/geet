import { SignJWT, jwtVerify, type JWTPayload } from "jose";

if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function signToken(payload: Record<string, unknown>, expiresIn = "7d") {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as JWTPayload;
  } catch {
    return null;
  }
}
