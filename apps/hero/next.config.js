/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

const hostUrl = process.env.HOST_URL || `http://localhost:3010`;
const featuresNextUrl = process.env.FEATURES_URL || `http://localhost:3002`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    host: `host@${hostUrl}/_next/static/${location}/remoteEntry.js`,
    features: `features@${featuresNextUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'hero',
        filename: 'static/chunks/remoteEntry.js',
        exposes:{
          "./hero": "./components/hero/hero.tsx",
        },
        remotes: remotes(options.isServer),
        extraOptions: {
          exposePages: true,
        },
        shared: {
          "i18next-shared-lib/": {
            singleton: true,
          },
          i18next: {
            singleton: true,
            requiredVersion: deps.i18next
          },
          "react-i18next": {
            singleton: true,
            requiredVersion: deps["react-i18next"]
          },
        },
      })
    );
    return config;
  }
}

module.exports = nextConfig
