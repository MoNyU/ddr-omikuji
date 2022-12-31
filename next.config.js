// @ts-check
const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");

const withVanillaExtract = createVanillaExtractPlugin();
const isProd = process.env.NODE_ENV === "production";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  ...(isProd
    ? {
        basePath: "/ddr-omikuji",
        assetPrefix: "/ddr-omikuji",
      }
    : {}),
};

module.exports = withVanillaExtract(config);
