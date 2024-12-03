/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import AdminPanel from "./Admin/AdminPanel";

const Profile = () => {
  const t = useTranslations("Path");
  const { user, error, isLoading } = useUser();
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loadingRoles, setLoadingRoles] = useState<boolean>(true);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/me");
        if (!response.ok) {
          throw new Error("Failed to fetch user roles");
        }
        const data = await response.json();

        // Проверяем наличие "admin" в ролях
        const roles = data["http://localhost:3000/roles"] || [];
        setIsAdmin(roles.includes("admin"));
      } catch (err) {
        console.error("Error fetching roles:", err);
      } finally {
        setLoadingRoles(false);
      }
    };

    fetchRoles();
  }, []);

  // Отправка данных о пользователе на сервер Django
  const sendUserDataToDjango = async (userData: {
    email: string | null | undefined;
    name: string | null | undefined;
    auth0_id: string | null | undefined;
    picture: string | null | undefined;
  }) => {
    try {
      const response = await fetch("http://localhost:8000/api/save_user/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save user data to Django");
      }

      const result = await response.json();
      console.log("User data saved successfully:", result);
    } catch (error) {
      console.error("Error saving user data:", error);
    }
    console.log(`asd${JSON.stringify(userData)}`);
  };

  // Отправляем данные пользователя на Django после их получения
  useEffect(() => {
    if (user) {
      const userData = {
        email: user.email,
        name: user.name,
        auth0_id: user.sub, // Используем уникальный идентификатор из Auth0
        picture: user.picture, // Если нужно сохранять изображение профиля
      };
      sendUserDataToDjango(userData); // Передаем данные в функцию
    }
  }, [user]);

  if (isLoading || loadingRoles) {
    return <div>Загрузка...</div>; // Показываем индикатор загрузки
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Показываем ошибку
  }

  if (!user) {
    return null; // Если пользователя нет, не отображаем ничего
  }

  return (
    <article className="container py-6">
      <div className="text-[13px] text-gray-500 p-2 bg-white max-w-64 rounded-[1px] Path">
        <a href="/" className="text-black hover:text-red-600 duration-300">
          {t("Homepage")}
        </a>
        <span className="mx-1">/</span>
        <span className="text-sm text-gray-800 font-bold">
          {t("CurrenPage")}
        </span>
      </div>

      <div className="flex flex-col bg-[white] mt-4 rounded-md shadow p-6 max-w-full">
        <section className="flex items-center">
          <img
            src={user.picture as string | undefined}
            alt="Profile Picture"
            className="rounded-full w-36 h-36 border-2 border-gray-300"
          />
          <div className="ml-4">
            <h1 className="text-black font-bold text-xl py-3">{user.name}</h1>
            <p className="text-gray-600 py-1">Никнейм: {user.name}</p>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-500 text-sm py-1">
              Последнее обновление:{" "}
              {user.updated_at
                ? new Date(user.updated_at).toLocaleDateString()
                : "Нет данных"}
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

      {/* Условно рендерим Dashboard только для админов */}
      {isAdmin && <AdminPanel />}
    </article>
  );
};

export default Profile;
