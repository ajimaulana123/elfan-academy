import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Target, CheckCircle, Star, Rocket, Users, Zap } from "lucide-react";

const tujuanItems = [
  {
    icon: Star,
    title: "Individu Beradab",
    description: "Membentuk individu yang beradab tinggi dan memiliki kesadaran spiritual beretika Islami dalam pemanfaatan teknologi digital.",
  },
  {
    icon: Zap,
    title: "Kompetensi Digital",
    description: "Mengembangkan kompetensi peserta didik di bidang teknologi digital berbasis AI sesuai kebutuhan industri di bidang Televisi, Desain Multimedia, Broadcasting, dan Data Analyst.",
  },
  {
    icon: Rocket,
    title: "Jiwa Kewirausahaan",
    description: "Menumbuhkan jiwa kewirausahaan dan kemandirian melalui pembelajaran berbasis praktik.",
  },
  {
    icon: Users,
    title: "Lulusan Inovatif",
    description: "Menyiapkan lulusan yang inovatif dan mampu berkontribusi bagi masyarakat.",
  },
  {
    icon: Target,
    title: "Adaptif & Siap",
    description: "Mendorong peserta didik untuk mampu beradaptasi dengan perkembangan teknologi dan perubahan dunia kerja.",
  },
];

const targetItems = [
  "Terwujudnya lulusan yang memiliki keseimbangan antara adab, kesadaran spiritual, kompetensi teknologi, dan jiwa entrepreneurship.",
  "Peserta didik mampu menguasai keterampilan teknologi digital dan AI secara aplikatif.",
  "Dihasilkannya karya, produk digital, atau usaha rintisan oleh peserta didik.",
  "Terciptanya ekosistem pembelajaran yang adaptif, efisien, dan berbasis teknologi.",
  "Terbangunnya lulusan yang siap kerja, siap berwirausaha, dan siap berkontribusi di masyarakat.",
];

const Tujuan = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary to-blue-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 islamic-pattern" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary font-medium text-sm mb-6">
              Arah & Sasaran
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Tujuan & Target
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Komitmen kami dalam mencetak generasi unggul
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tujuan Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 islamic-pattern" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              Tujuan Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Tujuan <span className="gold-shimmer">Pembelajaran</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tujuanItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border card-hover"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Section */}
      <section className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 islamic-pattern" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-4">
              Target Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Target <span className="gold-shimmer">Capaian</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {targetItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={20} className="text-secondary" />
                  </div>
                  <p className="text-foreground leading-relaxed pt-1.5">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Tujuan;
