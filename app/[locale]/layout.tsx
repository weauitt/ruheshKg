import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { UserProvider } from "@auth0/nextjs-auth0/client";



export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  console.log("Current locale:", params.locale);
  
  const messages = await getMessages();
  if (!messages) {
    throw new Error(`Messages not found for locale: ${params.locale}`);
  }

  return (
    <html lang={params.locale}>
      <UserProvider>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="bg-[#e5e7eb] layout">{children}</div>
          <Footer/>
        </NextIntlClientProvider>
      </body>
      </UserProvider>
    </html>
  );
}
