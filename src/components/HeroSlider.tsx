 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { ChevronLeft, ChevronRight } from "lucide-react";
 import hero1 from "@/assets/hero-1.jpg";
 import hero2 from "@/assets/hero-2.jpg";
 
 const slides = [
   {
     id: 1,
     image: hero1,
     title: "Pendidikan Islam Modern",
     subtitle: "Menggabungkan Nilai-Nilai Islami dengan Teknologi AI",
     description: "Membentuk generasi yang berakhlak mulia, cerdas, dan siap menghadapi tantangan masa depan.",
   },
   {
     id: 2,
     image: hero2,
     title: "Kampus Berstandar Internasional",
     subtitle: "Fasilitas Lengkap untuk Pembelajaran Optimal",
     description: "Lingkungan belajar yang nyaman dengan teknologi terkini untuk mendukung proses pendidikan.",
   },
 ];
 
 const HeroSlider = () => {
   const [currentSlide, setCurrentSlide] = useState(0);
 
   useEffect(() => {
     const timer = setInterval(() => {
       setCurrentSlide((prev) => (prev + 1) % slides.length);
     }, 6000);
     return () => clearInterval(timer);
   }, []);
 
   const nextSlide = () => {
     setCurrentSlide((prev) => (prev + 1) % slides.length);
   };
 
   const prevSlide = () => {
     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
   };
 
   return (
     <section id="beranda" className="relative h-screen min-h-[600px] overflow-hidden">
       {/* Slides */}
       <AnimatePresence mode="wait">
         {slides.map(
           (slide, index) =>
             index === currentSlide && (
               <motion.div
                 key={slide.id}
                 initial={{ opacity: 0, scale: 1.1 }}
                 animate={{ opacity: 1, scale: 1 }}
                 exit={{ opacity: 0 }}
                 transition={{ duration: 0.8 }}
                 className="absolute inset-0"
               >
                 {/* Background Image */}
                 <div
                   className="absolute inset-0 bg-cover bg-center"
                   style={{ backgroundImage: `url(${slide.image})` }}
                 />
                 
                 {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-dark/90 via-primary/80 to-primary/60" />
                 
                 {/* Islamic Pattern Overlay */}
                 <div className="absolute inset-0 islamic-pattern-light opacity-30" />
               </motion.div>
             )
         )}
       </AnimatePresence>
 
       {/* Content */}
       <div className="relative h-full container mx-auto px-4 flex items-center">
         <AnimatePresence mode="wait">
           <motion.div
             key={currentSlide}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -30 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="max-w-2xl text-primary-foreground"
           >
             <motion.span
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.3 }}
               className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/40 text-secondary font-medium text-sm mb-6"
             >
               ✨ Tahun Ajaran 2025/2026
             </motion.span>
             
             <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
               {slides[currentSlide].title}
             </h1>
             
             <p className="text-xl md:text-2xl text-secondary font-display mb-4">
               {slides[currentSlide].subtitle}
             </p>
             
             <p className="text-lg opacity-90 mb-8 max-w-xl">
               {slides[currentSlide].description}
             </p>
             
             <div className="flex flex-wrap gap-4">
               <Button variant="hero" size="xl">
                 Daftar Sekarang
               </Button>
               <Button variant="heroOutline" size="xl">
                 Pelajari Lebih Lanjut
               </Button>
             </div>
           </motion.div>
         </AnimatePresence>
       </div>
 
       {/* Navigation Arrows */}
       <button
         onClick={prevSlide}
         className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
       >
         <ChevronLeft size={24} />
       </button>
       <button
         onClick={nextSlide}
         className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/40 transition-colors"
       >
         <ChevronRight size={24} />
       </button>
 
       {/* Slide Indicators */}
       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
         {slides.map((_, index) => (
           <button
             key={index}
             onClick={() => setCurrentSlide(index)}
             className={`h-2 rounded-full transition-all duration-300 ${
               index === currentSlide
                 ? "w-8 bg-secondary"
                 : "w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70"
             }`}
           />
         ))}
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1 }}
         className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2 text-primary-foreground/70"
       >
         <span className="text-xs font-medium tracking-wider rotate-90 origin-center translate-x-6">SCROLL</span>
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ repeat: Infinity, duration: 1.5 }}
           className="w-0.5 h-12 bg-primary-foreground/30 rounded-full overflow-hidden"
         >
           <motion.div
             animate={{ y: [-48, 48] }}
             transition={{ repeat: Infinity, duration: 1.5 }}
             className="w-full h-6 bg-secondary"
           />
         </motion.div>
       </motion.div>
     </section>
   );
 };
 
 export default HeroSlider;