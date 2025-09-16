import type { NextConfig } from "next";

// NOTE: Turbopack does not support custom webpack configuration. To avoid
// runtime/development issues, the webpack customization below is applied
// only when the environment variable `NEXT_USE_WEBPACK` is set to 'true'.
//
// Usage:
// - Default dev: `npm run dev` (Turbopack-friendly)
// - If you need the webpack rule, run: `NEXT_USE_WEBPACK=true npm run dev` or use `npm run dev:webpack`.

const useCustomWebpack = process.env.NEXT_USE_WEBPACK === "true";

const nextConfig: NextConfig = {
  ...(useCustomWebpack
    ? {
        webpack: (config) => {
          // Handle GLB/GLTF files
          config.module.rules.push({
            test: /\.(glb|gltf)$/,
            type: "asset/resource",
          });

          return config;
        },
      }
    : {}),
  async headers() {
    // Only add strict security headers in production. Returning them
    // during local development (especially HSTS) can cause browsers to
    // cache HSTS for localhost and lead to `ERR_SSL_PROTOCOL_ERROR`.
    if (process.env.NODE_ENV === "production") {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Strict-Transport-Security",
              value: "max-age=63072000; includeSubDomains; preload",
            },
            { key: "X-Frame-Options", value: "DENY" },
            { key: "X-Content-Type-Options", value: "nosniff" },
            { key: "Referrer-Policy", value: "no-referrer-when-downgrade" },
            {
              key: "Permissions-Policy",
              value: "geolocation=(), microphone=()",
            },
            { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
            { key: "Cross-Origin-Embedder-Policy", value: "require-corp" },
            { key: "Cross-Origin-Resource-Policy", value: "same-origin" },
          ],
        },
      ];
    }

    return [];
  },
};

export default nextConfig;
