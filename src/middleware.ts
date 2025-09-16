import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Stricter CSP:
// - scripts: only from self and opt-in third-party (e.g. AMP) — drop 'unsafe-inline' and 'unsafe-eval'
// - styles: keep 'unsafe-inline' for now because Next may inline critical CSS; replace with nonces/hashes if you audit and remove inline styles
// - other directives tightened
const CSP = [
  "default-src 'self'",
  "script-src 'self' https://cdn.ampproject.org;",
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
  // Block unsafe HTTP methods globally
  if (!ALLOWED_METHODS.has(req.method)) {
    return new NextResponse("Method Not Allowed", { status: 405 });
  }

  const res = NextResponse.next();

  // Redirect to HTTPS
  // Only enforce HTTPS redirects in production. In development (localhost)
  // redirecting to https or sending HSTS can cause browsers to cache HSTS
  // for localhost and surface `ERR_SSL_PROTOCOL_ERROR`.
  const isLocalhost =
    req.nextUrl.hostname === "localhost" ||
    req.nextUrl.hostname === "127.0.0.1";

  if (process.env.NODE_ENV === "production") {
    if (req.nextUrl.protocol === "http:") {
      const secureUrl = req.nextUrl.clone();
      secureUrl.protocol = "https:";
      return NextResponse.redirect(secureUrl);
    }
  }

  // Common security headers
  // Only set HSTS in production and not for localhost to avoid development issues
  if (process.env.NODE_ENV === "production" && !isLocalhost) {
    res.headers.set(
      "Strict-Transport-Security",
      "max-age=63072000; includeSubDomains; preload"
    );
  }
  res.headers.set("X-Frame-Options", "DENY");
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "no-referrer-when-downgrade");
  res.headers.set("Permissions-Policy", "geolocation=(), microphone=()");

  // Cross-origin policies and CSP are stricter and can block local/dev assets.
  // Apply them only in production to avoid breaking development builds.
  if (process.env.NODE_ENV === "production") {
    res.headers.set("Cross-Origin-Opener-Policy", "same-origin");
    // Note: COEP 'require-corp' may block cross-origin resources that don't send CORP.
    // If you load third-party images/scripts that don't provide CORP, consider 'credentialless' or removing this header.
    res.headers.set("Cross-Origin-Embedder-Policy", "require-corp");
    res.headers.set("Cross-Origin-Resource-Policy", "same-origin");

    // CSP
    res.headers.set("Content-Security-Policy", CSP);
  }

  return res;
}

export const config = {
  matcher: "/:path*",
};
