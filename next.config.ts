import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const config: NextConfig = {
  // Configure pageExtensions to support MDX
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  output: "export",
  distDir: "dist",
};

// Use the MDX plugin
export default withMDX()(config); 