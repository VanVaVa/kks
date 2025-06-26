import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Отключаем оптимизацию изображений
  },
};

export default nextConfig;
