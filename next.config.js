// Import the MDX plugin
const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  distDir: "dist",
};

// Use the MDX plugin
module.exports = withMDX(nextConfig);
