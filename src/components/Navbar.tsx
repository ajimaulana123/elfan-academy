 import { useState, useEffect } from "react";
 import { Button } from "@/components/ui/button";
 import { Menu, X } from "lucide-react";
 import { motion, AnimatePresence } from "framer-motion";
 
 const navLinks = [
   { name: "Beranda", href: "#beranda" },
   { name: "Tentang", href: "#tentang" },
   { name: "Program", href: "#program" },
   { name: "Fasilitas", href: "#fasilitas" },
   { name: "Kontak", href: "#kontak" },
 ];
 
 const Navbar = () => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
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
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
      setActiveSection(targetId);
    }
    setIsMobileMenuOpen(false);
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
         <a href="#" className="flex items-center gap-3">
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
         <div className="hidden md:flex items-center gap-8">
           {navLinks.map((link) => (
             <a
               key={link.name}
               href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-sm font-medium transition-colors hover:text-secondary ${
                isScrolled 
                  ? activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-foreground"
                  : activeSection === link.href.substring(1)
                    ? "text-secondary"
                    : "text-primary-foreground"
               }`}
             >
               {link.name}
              {activeSection === link.href.substring(1) && (
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
           className={`md:hidden p-2 rounded-lg transition-colors ${
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
             className="md:hidden bg-background border-t border-border"
           >
             <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
               {navLinks.map((link) => (
                 <a
                   key={link.name}
                   href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`font-medium py-2 transition-colors ${
                    activeSection === link.href.substring(1)
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