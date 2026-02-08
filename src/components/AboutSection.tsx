 import { motion } from "framer-motion";
 import { BookOpen, Users, Award, Target } from "lucide-react";
 
 const features = [
   {
     icon: BookOpen,
     title: "Kurikulum Terpadu",
     description: "Menggabungkan ilmu agama dan pengetahuan umum dengan pendekatan AI modern",
   },
   {
     icon: Users,
     title: "Pengajar Berkualitas",
     description: "Tenaga pendidik profesional dengan pengalaman di bidang pendidikan Islam",
   },
   {
     icon: Award,
     title: "Prestasi Gemilang",
     description: "Lulusan berprestasi di tingkat nasional dan internasional",
   },
   {
     icon: Target,
     title: "Visi Masa Depan",
     description: "Mempersiapkan generasi yang siap menghadapi tantangan era digital",
   },
 ];
 
 const AboutSection = () => {
   return (
     <section id="tentang" className="py-20 md:py-28 bg-background relative overflow-hidden">
       {/* Decorative Pattern */}
       <div className="absolute top-0 right-0 w-96 h-96 opacity-5 islamic-pattern" />
       <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 islamic-pattern" />
       
       <div className="container mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
               Tentang Kami
             </span>
             
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Visi & Misi{" "}
                <span className="gold-shimmer">Elfan AI Academy</span>
              </h2>
              
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Visi</h3>
                  <p className="leading-relaxed">
                    Menjadi pendidikan vokasi terdepan dalam mencetak individu yang beradab, 
                    kompeten di bidang teknologi dan mampu menciptakan inovasi digital, 
                    berjiwa entrepreneurship, berkontribusi bagi masyarakat lokal dan global.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Misi</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      Mengintegrasikan nilai-nilai adab Islam secara mendalam di setiap aspek pembelajaran
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      Menyelenggarakan kurikulum berbasis AI yang relevan dengan kebutuhan industri digital di bidang Desain Multimedia, Broadcasting, dan Data Analyst
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      Menumbuhkan pola pikir dan jiwa entrepreneurship melalui pembelajaran praktik dan pemanfaatan AI dalam pengembangan ide dan analisis bisnis
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      Mengembangkan ekosistem pembelajaran yang adaptif, efisien, berbasis teknologi AI
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      Mencetak lulusan yang mandiri, inovatif, dan mampu menciptakan lapangan kerja bagi diri dan orang lain
                    </li>
                  </ul>
                </div>
              </div>
           </motion.div>
 
           {/* Right - Feature Cards */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="grid sm:grid-cols-2 gap-4"
           >
             {features.map((feature, index) => (
               <motion.div
                 key={feature.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.4, delay: index * 0.1 }}
                 className="group p-6 rounded-2xl bg-card border border-border card-hover"
               >
                 <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                   <feature.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                 </div>
                 <h3 className="font-display font-semibold text-foreground mb-2">{feature.title}</h3>
                 <p className="text-sm text-muted-foreground">{feature.description}</p>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default AboutSection;