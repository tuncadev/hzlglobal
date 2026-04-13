import Script from "next/script";

import "./globals.css";

const localizedMeta = {
  uk: {
    lang: "uk",
    locale: "uk_UA",
    title: "HZL Global | Офіційний дистриб’ютор Maruderm в Україні",
    description:
      "HZL Global є офіційним дистриб’ютором косметики Maruderm в Україні. Запуск незабаром.",
    keywords:
      "HZL Global, Maruderm Україна, дистриб’ютор Maruderm, дистриб’ютор косметики в Україні, косметика Україна, оптова косметика Україна",
    ogDescription:
      "Офіційний дистриб’ютор косметики Maruderm в Україні. HZL Global запускається незабаром.",
  },
  en: {
    lang: "en",
    locale: "en_US",
    title: "HZL Global | Official Maruderm Distributor in Ukraine",
    description:
      "HZL Global is the official distributor of Maruderm cosmetics in Ukraine. Launching soon.",
    keywords:
      "HZL Global, Maruderm Ukraine, Maruderm distributor, cosmetics distributor Ukraine, beauty products Ukraine, wholesale cosmetics Ukraine",
    ogDescription:
      "Official distributor of Maruderm cosmetics in Ukraine. HZL Global is launching soon.",
  },
  ru: {
    lang: "ru",
    locale: "ru_RU",
    title: "HZL Global | Официальный дистрибьютор Maruderm в Украине",
    description:
      "HZL Global является официальным дистрибьютором косметики Maruderm в Украине. Скоро запуск.",
    keywords:
      "HZL Global, Maruderm Украина, дистрибьютор Maruderm, дистрибьютор косметики в Украине, косметика Украина, оптовая косметика Украина",
    ogDescription:
      "Официальный дистрибьютор косметики Maruderm в Украине. HZL Global скоро запускается.",
  },
  tr: {
    lang: "tr",
    locale: "tr_TR",
    title: "HZL Global | Ukrayna'da Resmi Maruderm Distribütörü",
    description:
      "HZL Global, Maruderm kozmetiklerinin Ukrayna'daki resmi distribütörüdür. Çok yakında yayında.",
    keywords:
      "HZL Global, Maruderm Ukrayna, Maruderm distribütörü, Ukrayna kozmetik distribütörü, Ukrayna güzellik ürünleri, toptan kozmetik Ukrayna",
    ogDescription:
      "Ukrayna'da Maruderm kozmetiklerinin resmi distribütörü. HZL Global çok yakında yayında.",
  },
};

export const metadata = {
  metadataBase: new URL("https://hzlglobal.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon" }],
    shortcut: "/favicon.ico",
  },
  category: "business",
};

export default function RootLayout({ children }) {
  const languageBootScript = `
    (function () {
      var localizedMeta = ${JSON.stringify(localizedMeta)};
      var browserLanguage = (navigator.language || "en").toLowerCase();
      var languageCode = Object.keys(localizedMeta).find(function (code) {
        return browserLanguage.indexOf(code) === 0;
      }) || "en";
      var activeMeta = localizedMeta[languageCode];
      var html = document.documentElement;

      html.lang = activeMeta.lang;
      html.dataset.initialLang = activeMeta.lang;

      document.title = activeMeta.title;

      var applyContent = function (selector, value) {
        var element = document.head.querySelector(selector);

        if (element) {
          element.setAttribute("content", value);
        }
      };

      applyContent('#meta-description', activeMeta.description);
      applyContent('#meta-keywords', activeMeta.keywords);
      applyContent('#meta-language', activeMeta.lang);
      applyContent('#og-title', activeMeta.title);
      applyContent('#og-description', activeMeta.ogDescription);
      applyContent('#og-locale', activeMeta.locale);
      applyContent('#twitter-title', activeMeta.title);
      applyContent('#twitter-description', activeMeta.description);
    })();
  `;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{localizedMeta.en.title}</title>
        <meta id="meta-description" name="description" content={localizedMeta.en.description} />
        <meta id="meta-keywords" name="keywords" content={localizedMeta.en.keywords} />
        <meta id="meta-language" name="language" content={localizedMeta.en.lang} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hzlglobal.com/" />
        <meta property="og:site_name" content="HZL Global" />
        <meta id="og-title" property="og:title" content={localizedMeta.en.title} />
        <meta
          id="og-description"
          property="og:description"
          content={localizedMeta.en.ogDescription}
        />
        <meta
          property="og:image"
          content="https://hzlglobal.com/hzl-global-logo.png"
        />
        <meta property="og:image:width" content="342" />
        <meta property="og:image:height" content="271" />
        <meta property="og:image:alt" content="HZL Global logo" />
        <meta id="og-locale" property="og:locale" content={localizedMeta.en.locale} />
        <meta property="og:locale:alternate" content="uk_UA" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta property="og:locale:alternate" content="tr_TR" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta id="twitter-title" name="twitter:title" content={localizedMeta.en.title} />
        <meta
          id="twitter-description"
          name="twitter:description"
          content={localizedMeta.en.description}
        />
        <meta
          name="twitter:image"
          content="https://hzlglobal.com/hzl-global-logo.png"
        />
      </head>
      <body suppressHydrationWarning>
        <Script id="language-meta-bootstrap" strategy="beforeInteractive">
          {languageBootScript}
        </Script>
        {children}
      </body>
    </html>
  );
}
