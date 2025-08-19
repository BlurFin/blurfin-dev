import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 개발 환경에서 커스텀 도메인 지원
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // API 프록시 설정
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: []
    }
  }
};

export default nextConfig;
