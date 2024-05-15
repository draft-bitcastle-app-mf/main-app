import { NextFederationPlugin } from "@module-federation/nextjs-mf";

const ACCOUNTS_APP_URL =
  process.env.NEXT_PUBLIC_ACCOUNTS_APP_URL || "http://localhost:3001";

const STORE_APP_URL =
  process.env.NEXT_PUBLIC_STORE_APP_URL || "http://localhost:3008";

const remotes = (isServer) => {
  const location = isServer ? "ssr" : "chunks";
  return {
    account: `remoteAccount@${ACCOUNTS_APP_URL}/_next/static/${location}/remoteEntry.js`,
    store: `store@${STORE_APP_URL}/_next/static/${location}/remoteEntry.js`,
  };
};

const federationConfig = {
  name: "host",
  filename: "static/chunks/remoteEntry.js",
  exposes: {},
  shared: {
    "@mui/material/": {
      eager: true,
      requiredVersion: false,
      singleton: true,
    },

    "@js-cookie/": {
      eager: true,
      requiredVersion: false,
      singleton: true,
    },
  },
};

const nextConfig = {
  reactStrictMode: true,

  webpack(config, { isServer }) {
    config.target = isServer ? "node" : "web";

    config.plugins.push(
      new NextFederationPlugin({
        ...federationConfig,
        remotes: remotes(isServer),
      })
    );

    return config;
  },
};

export default nextConfig;
