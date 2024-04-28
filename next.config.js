const {
  withHydrationOverlay,
} = require("@builder.io/react-hydration-overlay/next");
const million = require("million/compiler");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["cdn.builder.io", "media.licdn.com"],
  },
};

const millionConfig = {
  auto: {
    threshold: 0.05, // default: 0.1,
    skip: ["useBadHook", /badVariable/g], // default []
    // if you're using RSC: auto: { rsc: true },
  },
};

if (process.env.NODE_ENV === "development") {
  module.exports = withHydrationOverlay({
    /**
     * Optional: `appRootSelector` is the selector for the root element of your app. By default, it is `#__next` which works
     * for Next.js apps with pages directory. If you are using the app directory, you should change this to `main`.
     */
    appRootSelector: "main",
  })(withBundleAnalyzer(nextConfig));
} else {
  module.exports = million.next(withBundleAnalyzer(nextConfig), millionConfig);
}