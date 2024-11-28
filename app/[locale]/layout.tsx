import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



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
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div>{children}</div>
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
