 import { motion } from "framer-motion";
 import { Button } from "@/components/ui/button";
 import { GraduationCap, Cpu, BookOpen, Clock, ArrowRight } from "lucide-react";
 
 const programs = [
   {
     icon: BookOpen,
     title: "Tahfidz Al-Quran",
     description: "Program hafalan Al-Quran 30 juz dengan metode modern dan bimbingan intensif dari para hafidz.",
     duration: "3 Tahun",
    color: "from-blue-dark to-primary",
   },
   {
     icon: Cpu,
     title: "AI & Technology",
     description: "Pembelajaran teknologi kecerdasan buatan, coding, dan digital literacy untuk era modern.",
     duration: "2 Tahun",
    color: "from-primary to-blue-light",
   },
   {
     icon: GraduationCap,
     title: "Program Reguler",
     description: "Kurikulum nasional plus dengan pendalaman ilmu agama dan bahasa Arab.",
     duration: "3 Tahun",
     color: "from-gold-dark to-secondary",
   },
 ];
 
 const ProgramSection = () => {
   return (
     <section id="program" className="py-20 md:py-28 bg-cream relative overflow-hidden">
       {/* Decorative Elements */}
       <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-secondary/10 blur-3xl" />
       <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl" />
       
       <div className="container mx-auto px-4">
         {/* Header */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center max-w-2xl mx-auto mb-16"
         >
           <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
             Program Studi
           </span>
           <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
             Kurikulum <span className="gold-shimmer">Unggulan</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             Program pembelajaran yang dirancang untuk menghasilkan lulusan berkualitas 
             dengan keseimbangan ilmu agama dan teknologi.
           </p>
         </motion.div>
 
         {/* Program Cards */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {programs.map((program, index) => (
             <motion.div
               key={program.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="group relative bg-card rounded-3xl overflow-hidden shadow-soft card-hover"
             >
               {/* Top Gradient Bar */}
               <div className={`h-2 bg-gradient-to-r ${program.color}`} />
               
               <div className="p-8">
                 {/* Icon */}
                 <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-6 shadow-elevated`}>
                   <program.icon size={28} className="text-primary-foreground" />
                 </div>
                 
                 {/* Content */}
                 <h3 className="font-display text-xl font-bold text-foreground mb-3">
                   {program.title}
                 </h3>
                 <p className="text-muted-foreground mb-6 leading-relaxed">
                   {program.description}
                 </p>
                 
                 {/* Duration */}
                 <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                   <Clock size={16} />
                   <span>Durasi: {program.duration}</span>
                 </div>
                 
                 {/* CTA */}
                 <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary/80">
                   Lihat Detail
                   <ArrowRight size={16} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                 </Button>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default ProgramSection;