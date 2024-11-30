/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";

export const LoginButton = () => {
  const t = useTranslations("Navbar");
  const { error, isLoading } = useUser();
  if (isLoading) {
    return <div>Загрузка...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  return (
    <div>
      <div className="flex  items-center">
        <a href="/api/auth/login" >{t('authentication')}</a>
      </div>
    </div>
  );
};
