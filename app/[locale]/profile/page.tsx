/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";


const Profile = () => {
  const t = useTranslations("Path");
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Загрузка...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Показываем ошибку
  }

  if (!user) {
    return null; // Если пользователя нет, не отображаем кнопку выхода
  }

  return (
    <article className="container py-6">
      <div className="text-[13px] text-gray-500 p-2 bg-white max-w-60 rounded-[1px] Path">
        <a href="/" className="text-black hover:text-red-600 duration-300">
          {t("Homepage")}
        </a>
        <span className="mx-1">/</span>
        <span className="text-sm text-gray-800 font-bold">
        {t("CurrenPage")}
        </span>
      </div>
      
      <div className="flex flex-col bg-[white] mt-4 rounded-md shadow p-6 max-w-full ">
        <section className="flex items-center">
          <img
            src={user.picture as string | undefined}
            alt="Profile Picture"
            className="rounded-full w-36 h-36 border-2 border-gray-300"
          />
          <div className="ml-4">
            <h1 className="text-black font-bold text-xl py-3">{user.name}</h1>
            <p className="text-gray-600 py-1">Никнейм: {user.nickname}</p>
            <p className="text-gray-600 ">Email: {user.email}</p>
            <p className="text-gray-500 text-sm py-1">
              Последнее обновление:   {user.updated_at ? new Date(user.updated_at).toLocaleDateString() : "Нет данных"}
            </p>
          </div>
        </section>
        
        <div className="mt-4 flex justify-end">
          <a
            href="/api/auth/logout"
            className="text-red-500 hover:text-red-700 font-semibold"
          >
            Выйти
          </a>
        </div>
      </div>
    </article>
  );
};

export default Profile;
