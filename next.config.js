const isProd = process.env.NODE_ENV === "production";

module.exports = isProd
  ? {
      basePath: "/ddr-omikuji",
      assetPrefix: "/ddr-omikuji",
    }
  : {};
