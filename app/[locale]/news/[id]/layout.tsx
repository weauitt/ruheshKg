// app/[locale]/news/layout.tsx
import React from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default async function NewsLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  if (!messages) {
    throw new Error(`Messages not found for locale: ${params.locale}`);
  }

  return (
    <UserProvider>
        <NextIntlClientProvider messages={messages}>
          {/* Просто передаем children без использования main */}
          {children}
        </NextIntlClientProvider>
    </UserProvider>
  );
}
