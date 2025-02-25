import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["styles"],
    prependData: `@import "src/styles/_mixin.scss"; @import "src/styles/_colors.scss"; @import "src/styles/_fonts.scss"; @import "src/styles/_size.scss";`, // prependData 옵션 추가
  },
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
