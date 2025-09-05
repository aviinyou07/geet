import { SignJWT, jwtVerify, type JWTPayload } from "jose";

if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// Define your custom payload type
export interface TokenPayload extends JWTPayload {
  id: string;
  role: "ADMIN" | "USER";
  name?: string;
  email?: string;
}

export async function signToken(payload: Omit<TokenPayload, "iat" | "exp">, expiresIn = "7d") {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as TokenPayload;
  } catch {
    return null;
  }
}
