"use client";

import { useEffect, useState } from "react";

const content = [
  {
    subtitle: "приносить найкращу косметику до ваших дверей",
    status: "Дуже скоро...",
    distributor:
      "офіційний дистриб’ютор косметики <strong>Maruderm</strong> в <span class=\"ukraine-flag-text\">Україні</span>",
  },
  {
    subtitle: "bringing the best cosmetics to your door",
    status: "Coming very soon...",
    distributor:
      "HZL Global is the official distributor of <strong>Maruderm</strong> cosmetics in <span class=\"ukraine-flag-text\">Ukraine</span>",
  },
  {
    subtitle: "приносить лучшую косметику к вашей двери",
    status: "Очень скоро...",
    distributor:
      "официальный дистрибьютор косметики <strong>Maruderm</strong> в <span class=\"ukraine-flag-text\">Украине</span>",
  },
];

export default function HomePage() {
  const [index, setIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const intervalId = window.setInterval(() => {
      setIsVisible(false);

      timeoutId = window.setTimeout(() => {
        setIndex((currentIndex) => (currentIndex + 1) % content.length);
        setIsVisible(true);
      }, 320);
    }, 4000);

    return () => {
      window.clearInterval(intervalId);

      if (timeoutId) {
        window.clearTimeout(timeoutId);
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
          <div className={'distributor-wrapper'}>
            <p className={`brand-distributor text-switch ${isVisible ? "is-visible" : ""}`}>
              <span dangerouslySetInnerHTML={{ __html: activeContent.distributor }} />
            </p>
              <img
                  className="maruderm-logo"
                  src="/maruderm-logo.png"
                  alt="Marudermlogo"
                  width="236"
                  height="80"
              />
          </div>
      </section>
        <p className={"contact-info"}>
            <a href="mailto:info@hzlglobal.com" target={"_blank"}>info@hzlglobal.com.ua</a>
            <a href="mailto:info@hzlglobal.com" target={"_blank"}>info@maruderm.com.ua</a>
        </p>
        <section>

        </section>
    </main>
  );
}
