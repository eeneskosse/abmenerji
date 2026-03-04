"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  }, [pathname]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      {/* Top row: Logo + CTA */}
      <div
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-900/95 backdrop-blur-md shadow-navbar"
            : "bg-navy-900/80 backdrop-blur-sm"
        )}
      >
        {/* White bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white" />
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-[4.25rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group shrink-0">
              <div className="w-10 h-10 rounded-md border-2 border-gold-400 flex items-center justify-center bg-navy-800/50 group-hover:bg-gold-400/10 transition-colors">
                <span className="text-gold-400 font-heading font-bold text-sm">
                  ABM
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-white text-lg leading-tight">
                  ABM Enerji
                </span>
                <span className="text-[0.6rem] text-slate-400 uppercase tracking-[0.2em]">
                  Enerji & Altyapı
                </span>
              </div>
            </Link>

            {/* Right side: CTA + hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/iletisim"
                className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gold-400 text-navy-900 font-heading font-semibold text-sm rounded-lg hover:bg-gold-500 transition-colors"
              >
                Teklif Alın
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Menü"
              >
                <span className={clsx("w-6 h-[2px] bg-white transition-all duration-300", mobileOpen && "rotate-45 translate-y-[5px]")} />
                <span className={clsx("w-6 h-[2px] bg-white transition-all duration-300", mobileOpen && "opacity-0")} />
                <span className={clsx("w-6 h-[2px] bg-white transition-all duration-300", mobileOpen && "-rotate-45 -translate-y-[5px]")} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom row: Nav links - transparent bg */}
      <nav
        className={clsx(
          "fixed left-0 right-0 z-50 hidden lg:block transition-all duration-300",
          scrolled
            ? "top-[4.25rem] bg-navy-800/60 backdrop-blur-sm border-t border-white/5"
            : "top-[4.25rem] bg-transparent"
        )}
      >
        <Container>
          <div className="flex items-center justify-center h-11">
            <div className="flex items-center gap-8 xl:gap-14">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(link.label)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <Link
                      href={link.href}
                      className={clsx(
                        "flex items-center gap-1.5 px-5 xl:px-6 py-2 rounded-md font-body text-[0.875rem] tracking-wide uppercase transition-all duration-200",
                        pathname.startsWith("/hakkimizda")
                          ? "text-gold-400"
                          : "text-slate-300 hover:text-white"
                      )}
                    >
                      {link.label}
                      <svg
                        className={clsx(
                          "w-3 h-3 transition-transform duration-200",
                          activeDropdown === link.label && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </Link>

                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-1 w-60 bg-navy-800 border border-navy-600/40 rounded-xl shadow-2xl overflow-hidden"
                          onMouseEnter={() => handleDropdownEnter(link.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="py-1">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={clsx(
                                  "flex items-center gap-3 px-5 py-3 font-body text-sm transition-colors",
                                  pathname === child.href
                                    ? "text-gold-400 bg-navy-700/50"
                                    : "text-slate-300 hover:text-white hover:bg-navy-700/40"
                                )}
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-gold-400/60" />
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-5 xl:px-6 py-2 rounded-md font-body text-[0.875rem] tracking-wide uppercase transition-all duration-200",
                      pathname === link.href
                        ? "text-gold-400"
                        : "text-slate-300 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </Container>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy-900 flex flex-col items-center justify-center gap-6"
          >
            {NAV_LINKS.map((link, i) =>
              link.children ? (
                <div key={link.label} className="flex flex-col items-center">
                  <motion.button
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05 }}
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className="font-heading text-2xl text-white hover:text-gold-400 transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    {link.label}
                    <svg
                      className={clsx("w-4 h-4 transition-transform", mobileDropdownOpen && "rotate-180")}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </motion.button>
                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col items-center gap-3 mt-3 overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link key={child.href} href={child.href}
                            className="font-body text-lg text-slate-300 hover:text-gold-400 transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div key={link.href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 + i * 0.05 }}>
                  <Link href={link.href} className="font-heading text-2xl text-white hover:text-gold-400 transition-colors" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                </motion.div>
              )
            )}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }}>
              <Link href="/iletisim" className="mt-4 inline-flex items-center px-8 py-3 bg-gold-400 text-navy-900 font-heading font-semibold rounded-lg" onClick={() => setMobileOpen(false)}>
                Teklif Alın
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
