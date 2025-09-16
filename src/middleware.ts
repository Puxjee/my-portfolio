import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://cdn.ampproject.org",
  "style-src 'self' 'unsafe-inline' https:",
  "img-src 'self' data: https:",
  "connect-src 'self' https://api.github.com https://*.vercel-insights.com https://formspree.io",
  "font-src 'self' data: https:",
  "object-src 'none'",
  "base-uri 'self'",
  "frame-ancestors 'none'",
  "form-action 'self' https://formspree.io",
].join("; ");

const ALLOWED_METHODS = new Set(["GET", "HEAD", "POST"]);

export function middleware(req: NextRequest) {
  // 🚫 Block unsafe HTTP methods
  if (!ALLOWED_METHODS.has(req.method)) {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const res = NextResponse.next();

  const isLocalhost =
    req.nextUrl.hostname === "localhost" ||
    req.nextUrl.hostname === "127.0.0.1";

  // ✅ Enforce HTTPS only in production (not localhost)
  if (
    process.env.NODE_ENV === "production" &&
    req.nextUrl.protocol === "http:"
  ) {
    const secureUrl = req.nextUrl.clone();
    secureUrl.protocol = "https:";
    return NextResponse.redirect(secureUrl);
  }

  // ✅ Common headers (safe everywhere)
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer-when-downgrade");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=()");

  // ✅ Production-only strict headers
  if (process.env.NODE_ENV === "production" && !isLocalhost) {
    res.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
    res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    res.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    res.headers.set("Cross-Origin-Resource-Policy", "same-origin");
    res.headers.set("Content-Security-Policy", CSP);
  }

  return res;
}

export const config = {
  matcher: "/:path*",
};
