import { Inter } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import AosInit from '@/components/AosInit';
import Header from '@/components/globals/Header';
import Footer from '@/components/globals/Footer';
import Script from 'next/script';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const metadata = {
  title: 'BOD Holdings',
  description: 'BOD Holdings - A leading investment company managing multiple successful subsidiaries across diverse sectors',
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`@/i18n/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className={`${inter.className} ${locale === 'ar' ? 'rtl' : 'ltr'}`}>
        <Script 
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/js/all.min.js"
          strategy="lazyOnload"
        />
        <Script 
          src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"
          strategy="lazyOnload"
        />
        <AosInit />
        <Header />
        {children}
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
