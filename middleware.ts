import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ky', 'ru'],
  defaultLocale: 'ky'
});
 
export const config = {
  matcher: ['/', '/(ky|ru)/:path*']
};