"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#big-items", label: "大件必备" },
  { href: "#registry", label: "Baby Registry" },
  { href: "#useful", label: "好用物品" },
  { href: "#bedding", label: "床品" },
  { href: "#haotao", label: "海淘推荐" },
  { href: "#postpartum", label: "月子调养" },
  { href: "#newborn", label: "新生儿" },
  { href: "#bottles", label: "奶瓶选购" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(scrollY > 60);
      setProgress(total > 0 ? (scrollY / total) * 100 : 0);

      let current = "";
      for (const { href } of navItems) {
        const el = document.getElementById(href.slice(1));
        if (el && el.getBoundingClientRect().top <= 120) {
          current = href.slice(1);
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Reading progress bar */}
      <div className="h-[2px] bg-transparent">
        <div className="progress-bar h-full" style={{ width: `${progress}%` }} />
      </div>

      {/* Nav */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-stone-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-3.5 flex items-center gap-2">
          <a
            href="#"
            className={`font-semibold text-sm tracking-tight shrink-0 mr-4 transition-colors duration-300 ${
              scrolled ? "text-stone-900" : "text-white"
            }`}
          >
            新生儿指南
          </a>
          <div className="flex items-center gap-0.5 overflow-x-auto hide-scrollbar">
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={href}
                  href={href}
                  className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-stone-900 text-white"
                      : scrolled
                      ? "text-stone-500 hover:text-stone-900"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
