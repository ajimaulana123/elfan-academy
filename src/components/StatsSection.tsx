 import { motion } from "framer-motion";
 import { useEffect, useState, useRef } from "react";
 
 const stats = [
   { value: 500, suffix: "+", label: "Santri Aktif" },
   { value: 50, suffix: "+", label: "Tenaga Pengajar" },
   { value: 15, suffix: "", label: "Angkatan Alumni" },
   { value: 98, suffix: "%", label: "Tingkat Kelulusan" },
 ];
 
 const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
   const [count, setCount] = useState(0);
   const ref = useRef<HTMLSpanElement>(null);
   const [hasAnimated, setHasAnimated] = useState(false);
 
   useEffect(() => {
     const observer = new IntersectionObserver(
       (entries) => {
         if (entries[0].isIntersecting && !hasAnimated) {
           setHasAnimated(true);
           let start = 0;
           const duration = 2000;
           const increment = value / (duration / 16);
           
           const timer = setInterval(() => {
             start += increment;
             if (start >= value) {
               setCount(value);
               clearInterval(timer);
             } else {
               setCount(Math.floor(start));
             }
           }, 16);
           
           return () => clearInterval(timer);
         }
       },
       { threshold: 0.5 }
     );
 
     if (ref.current) {
       observer.observe(ref.current);
     }
 
     return () => observer.disconnect();
   }, [value, hasAnimated]);
 
   return (
     <span ref={ref}>
       {count}
       {suffix}
     </span>
   );
 };
 
 const StatsSection = () => {
   return (
     <section className="py-16 bg-background relative">
       <div className="container mx-auto px-4">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="grid grid-cols-2 lg:grid-cols-4 gap-8"
         >
           {stats.map((stat, index) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="text-center"
             >
               <div className="font-display text-4xl md:text-5xl lg:text-6xl font-bold gold-shimmer mb-2">
                 <Counter value={stat.value} suffix={stat.suffix} />
               </div>
               <p className="text-muted-foreground font-medium">{stat.label}</p>
             </motion.div>
           ))}
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default StatsSection;