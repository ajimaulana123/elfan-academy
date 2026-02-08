import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

type NavLinkItem = {
  name: string;
  href: string;
  isRoute: boolean;
  homeSection?: string; // If set, scroll to this section when on home page
};

const navLinks: NavLinkItem[] = [
  { name: "Beranda", href: "/", isRoute: true },
  { name: "Visi Misi", href: "/#tentang", isRoute: false },
  { name: "Program", href: "/#program", isRoute: false },
  { name: "Profile", href: "/profile", isRoute: true },
  { name: "Sejarah", href: "/sejarah", isRoute: true },
  { name: "Tujuan", href: "/tujuan", isRoute: true },
  { name: "Kontak", href: "/kontak", isRoute: true },
];

function scrollToSectionId(sectionId: string, offset = 80) {
  const element = document.getElementById(sectionId);
  if (!element) return false;
  const offsetTop = element.offsetTop - offset;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
  return true;
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname !== "/") return;

      const sections = ["beranda", "tentang", "program", "kontak"];
      // cari dari bawah ke atas agar section yang paling "terakhir" terlihat jadi aktif
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (!element) continue;
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(section);
          return;
        }
      }

      setActiveSection("beranda");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // active state untuk route page
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname);
    } else {
      setActiveSection("beranda");
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: NavLinkItem) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Special case: link has homeSection and we're on home page -> scroll to section
    if (link.homeSection && location.pathname === "/") {
      scrollToSectionId(link.homeSection);
      return;
    }

    if (link.isRoute) {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const hash = link.href.split("#")[1];
    if (!hash) return;

    if (location.pathname !== "/") {
      navigate("/");

      // tunggu sampai home render, lalu scroll
      const start = performance.now();
      const tryScroll = () => {
        if (scrollToSectionId(hash)) return;
        if (performance.now() - start > 2000) return;
        requestAnimationFrame(tryScroll);
      };
      requestAnimationFrame(tryScroll);
      return;
    }

    scrollToSectionId(hash);
  };

  const isActive = (link: NavLinkItem) => {
    // Special case: link with homeSection is active when scrolled to that section on home
    if (link.homeSection && location.pathname === "/") {
      return activeSection === link.homeSection;
    }

    if (link.isRoute) {
      if (link.href === "/") {
        return location.pathname === "/" && (activeSection === "beranda" || activeSection === "");
      }
      return location.pathname === link.href;
    }

    const hash = link.href.split("#")[1];
    return location.pathname === "/" && activeSection === hash;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, { name: "Beranda", href: "/", isRoute: true })}
          className="flex items-center gap-3"
        >
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl transition-colors ${
              isScrolled ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            EA
          </div>
          <div className={`transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <span className="font-display font-bold text-lg">Elfan</span>
            <span className="block text-xs opacity-80">AI Academy</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link)}
              className={`relative text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled
                  ? isActive(link)
                    ? "text-primary"
                    : "text-foreground"
                  : isActive(link)
                    ? "text-secondary"
                    : "text-primary-foreground"
              }`}
            >
              {link.name}
              {isActive(link) && (
                <motion.span
                  layoutId="activeNav"
                  className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${
                    isScrolled ? "bg-primary" : "bg-secondary"
                  }`}
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}

          <Button variant={isScrolled ? "default" : "hero"} size="lg">
            <a href="https://elfan-academy-form-ppdb.vercel.app" target="_blank">
              Daftar Sekarang
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`font-medium py-2 transition-colors ${isActive(link) ? "text-primary" : "text-foreground"}`}
                >
                  {link.name}
                </a>
              ))}

              <Button variant="default" size="lg" className="w-full">
                <a href="https://elfan-academy-form-ppdb.vercel.app" target="_blank">
                  Daftar Sekarang
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
