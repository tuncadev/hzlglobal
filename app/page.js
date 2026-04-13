"use client";

import { useEffect, useRef, useState } from "react";

const content = [
  {
    code: "uk",
    locale: "uk_UA",
    title: "HZL Global | Офіційний дистриб’ютор Maruderm в Україні",
    metaDescription:
      "HZL Global є офіційним дистриб’ютором косметики Maruderm в Україні. Запуск незабаром.",
    subtitle: "приносить найкращу косметику до ваших дверей",
    status: "Дуже скоро...",
    distributor:
      "офіційний дистриб’ютор косметики <strong>Maruderm</strong> в <span class=\"ukraine-flag-text\">Україні</span>",
  },
  {
    code: "en",
    locale: "en_US",
    title: "HZL Global | Official Maruderm Distributor in Ukraine",
    metaDescription:
      "HZL Global is the official distributor of Maruderm cosmetics in Ukraine. Launching soon.",
    subtitle: "bringing the best cosmetics to your door",
    status: "Coming very soon...",
    distributor:
      "HZL Global is the official distributor of <strong>Maruderm</strong> cosmetics in <span class=\"ukraine-flag-text\">Ukraine</span>",
  },
  {
    code: "ru",
    locale: "ru_RU",
    title: "HZL Global | Официальный дистрибьютор Maruderm в Украине",
    metaDescription:
      "HZL Global является официальным дистрибьютором косметики Maruderm в Украине. Скоро запуск.",
    subtitle: "приносить лучшую косметику к вашей двери",
    status: "Очень скоро...",
    distributor:
      "официальный дистрибьютор косметики <strong>Maruderm</strong> в <span class=\"ukraine-flag-text\">Украине</span>",
  },
  {
    code: "tr",
    locale: "tr_TR",
    title: "HZL Global | Ukrayna'da Resmi Maruderm Distribütörü",
    metaDescription:
      "HZL Global, Maruderm kozmetiklerinin Ukrayna'daki resmi distribütörüdür. Çok yakında yayında.",
    subtitle: "en iyi kozmetik ürünlerini kapınıza getiriyor",
    status: "Çok yakında...",
    distributor:
      "HZL Global, <span class=\"ukraine-flag-text\">Ukrayna</span>'da <strong>Maruderm</strong> kozmetiklerinin resmi distribütörüdür",
  },
];

function getPreferredLanguageIndex() {
  if (typeof document === "undefined") {
    return 1;
  }

  const initialLanguage = document.documentElement.dataset.initialLang || "en";
  const match = content.findIndex(({ code }) => code === initialLanguage);

  return match === -1 ? 1 : match;
}

export default function HomePage() {
  const [index, setIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setIndex(getPreferredLanguageIndex());
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setIsVisible(false);

      timeoutRef.current = window.setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % content.length);
        setIsVisible(true);
      }, 320);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);

      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const activeContent = content[index];

  return (
    <main className="page-shell">
      <section className="hero-card" aria-label="HZL Global coming soon">
        <img
          className="brand-logo"
          src="/hzl-global-logo.png"
          alt="HZL Global logo"
          width="342"
          height="271"
        />
        <h1 className="brand-title">HZL GLOBAL</h1>
        <p className={`brand-subtitle text-switch ${isVisible ? "is-visible" : ""}`}>
          {activeContent.subtitle}
        </p>
        <p className={`brand-status text-switch ${isVisible ? "is-visible" : ""}`}>
          {activeContent.status}
        </p>
        <div className="brand-divider"></div>
        <div className="distributor-wrapper">
          <p className={`brand-distributor text-switch ${isVisible ? "is-visible" : ""}`}>
            <span dangerouslySetInnerHTML={{ __html: activeContent.distributor }} />
          </p>
          <img
            className="maruderm-logo"
            src="/maruderm-logo.png"
            alt="Maruderm logo"
            width="236"
            height="80"
          />
        </div>
      </section>
      <p className="contact-info">
        <a href="mailto:info@hzlglobal.com" target="_blank" rel="noreferrer">
          info@hzlglobal.com
        </a>
        <a href="mailto:info@maruderm.com.ua" target="_blank" rel="noreferrer">
          info@maruderm.com.ua
        </a>
      </p>
    </main>
  );
}
