 import { motion } from "framer-motion";
 import { Building2, Wifi, Utensils, BookOpen, Laptop, Dumbbell } from "lucide-react";
 
 const facilities = [
   {
     icon: Building2,
     title: "Asrama & Masjid",
     description: "Asrama nyaman dengan masjid sebagai pusat kegiatan ibadah",
   },
   {
     icon: Laptop,
     title: "Lab Komputer",
     description: "Laboratorium komputer dengan perangkat modern dan internet cepat",
   },
   {
     icon: BookOpen,
     title: "Perpustakaan Digital",
     description: "Bookless library dengan akses ribuan e-book dan jurnal",
   },
   {
     icon: Wifi,
     title: "Server & Data Center",
     description: "Infrastruktur IT terdepan untuk mendukung pembelajaran AI",
   },
   {
     icon: Utensils,
     title: "Makan 3x Sehari",
     description: "Katering halal berkualitas dengan menu bergizi seimbang",
   },
   {
     icon: Dumbbell,
     title: "Fasilitas Olahraga",
     description: "Lapangan dan gym untuk menjaga kesehatan jasmani santri",
   },
 ];
 
 const FacilitiesSection = () => {
   return (
     <section id="fasilitas" className="py-20 md:py-28 hero-gradient relative overflow-hidden">
       {/* Islamic Pattern Overlay */}
       <div className="absolute inset-0 islamic-pattern-light opacity-20" />
       
       <div className="container mx-auto px-4 relative">
         {/* Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-2xl mx-auto mb-16"
         >
           <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
             Fasilitas
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
             Fasilitas <span className="text-secondary">Terlengkap</span>
           </h2>
           <p className="text-primary-foreground/80 text-lg">
             Kami menyediakan fasilitas lengkap untuk menunjang kenyamanan 
             dan keberhasilan proses belajar mengajar.
           </p>
         </motion.div>
 
         {/* Facilities Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
           {facilities.map((facility, index) => (
             <motion.div
               key={facility.title}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: index * 0.08 }}
               className="group p-6 rounded-2xl bg-background/10 backdrop-blur-sm border border-primary-foreground/10 hover:bg-background/20 transition-all duration-300"
             >
               <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/30 transition-colors">
                 <facility.icon size={28} className="text-secondary" />
               </div>
               <h3 className="font-display font-semibold text-primary-foreground text-lg mb-2">
                 {facility.title}
               </h3>
               <p className="text-primary-foreground/70 text-sm">
                 {facility.description}
               </p>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default FacilitiesSection;