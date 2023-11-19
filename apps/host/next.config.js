/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const deps = require("./package.json").dependencies;

const heroUrl = process.env.HERO_URL || `http://localhost:3001`;
const featuresUrl = process.env.FEATURES_URL || `http://localhost:3002`;

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    hero: `hero@${heroUrl}/_next/static/${location}/remoteEntry.js`,
    features: `features@${featuresUrl}/_next/static/${location}/remoteEntry.js`,
  };
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  transpilePackages: ["ui"],
  compiler: {
    styledComponents: true,
  },
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {},
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

module.exports = nextConfig;