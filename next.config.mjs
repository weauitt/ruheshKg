import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.ignoreWarnings = [/prerender/];  // Игнорируем предупреждения о prerender
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
