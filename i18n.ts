import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["ky", "ru"];

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale; // Дожидаемся значения из requestLocale

  if (!locale || !locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
