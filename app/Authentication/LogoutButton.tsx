/* eslint-disable @next/next/no-html-link-for-pages */
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaRegUser } from "react-icons/fa";
import { useLocale } from "next-intl";

export const LogoutButton = () => {
  const locale = useLocale();
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Загрузка...</div>; 
  }

  if (error) {
    return <div>Error: {error.message}</div>; 
  }

  if (!user) {
    return null; // Если пользователя нет, не отображаем кнопку выхода
  }

  return (
    <div className="flex items-center justify-center">
      <FaRegUser/>
      <div className="ml-2 flex flex-col items-center rounded-lg shadow-md">
        <a href={`/${locale}/profile`} className="text-[14px] text-white">{user.name}</a>
      </div>
    </div>
  );
};
