import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { ClientToaster } from "@/components/ui/ClientToaster";
import Header from "@/components/globals/Header";
import Footer from "@/components/globals/Footer";
import AnimationObserver from "@/components/AnimationObserver";
import "../globals.css";

export const metadata = {
  title: "BOD Holdings",
  description: "BOD Holdings - A leading investment company managing multiple successful subsidiaries across diverse sectors",
};

export default async function LocaleLayout({
  children,
  params,
}) {
  const { locale } = params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages({ locale });

  return (
    <html dir={ locale === "ar" ? "rtl" : "ltr" } lang={ locale }>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <NextIntlClientProvider locale={ locale } messages={ messages }>
          {/* <ReduxProvider> */ }
          <ClientToaster />
          <Header />
          <main>
            { children }
          </main>
          <Footer />
          <AnimationObserver />
          {/* <ToastContainer /> */ }
          {/* <AutoLogin /> */ }
          {/* </ReduxProvider> */ }
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
