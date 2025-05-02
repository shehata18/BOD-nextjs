import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

type Locale = "en" | "ar";

export default getRequestConfig(async ({ requestLocale }) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await import(`./messages/${locale.toLocaleLowerCase()}.json`)
    ).default,
  };
});
