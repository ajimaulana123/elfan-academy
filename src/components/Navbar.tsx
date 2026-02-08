import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Beranda", href: "/", isRoute: true },
  { name: "Profile", href: "/profile", isRoute: true },
  { name: "Sejarah", href: "/sejarah", isRoute: true },
  { name: "Visi Misi", href: "/#tentang", isRoute: false },
  { name: "Tujuan", href: "/tujuan", isRoute: true },
  { name: "Program", href: "/#program", isRoute: false },
  { name: "Kontak", href: "/#kontak", isRoute: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Only track sections on home page
      if (location.pathname === "/") {
        const sections = ["beranda", "tentang", "program", "kontak"];
        for (const section of sections.reverse()) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Set active based on current route
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection(location.pathname);
    } else {
      setActiveSection("beranda");
    }
  }, [location.pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (link.isRoute) {
      navigate(link.href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Handle hash links (sections on home page)
      const [path, hash] = link.href.split("#");
      
      if (location.pathname !== "/") {
        // Navigate to home first, then scroll to section
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: "smooth" });
          }
        }, 100);
      } else {
        // Already on home, just scroll
        const element = document.getElementById(hash);
        if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({ top: offsetTop, behavior: "smooth" });
        }
      }
    }
  };

  const isActive = (link: typeof navLinks[0]) => {
    if (link.isRoute) {
      if (link.href === "/") {
        return location.pathname === "/" && (activeSection === "beranda" || activeSection === "");
      }
      return location.pathname === link.href;
    } else {
      // Hash link - check if we're on home page and at that section
      const hash = link.href.split("#")[1];
      return location.pathname === "/" && activeSection === hash;
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          onClick={(e) => handleNavClick(e, { name: "Beranda", href: "/", isRoute: true })}
          className="flex items-center gap-3"
        >
          <div className={`w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-xl transition-colors ${
            isScrolled ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
          }`}>
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
            Daftar Sekarang
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                  className={`font-medium py-2 transition-colors ${
                    isActive(link)
                      ? "text-primary"
                      : "text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="default" size="lg" className="w-full">
                Daftar Sekarang
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
