import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { History, Lightbulb, Users, Target, Heart } from "lucide-react";

const timelineItems = [
  {
    icon: Lightbulb,
    title: "Visi Awal",
    description: "Respons inovatif terhadap dinamika perubahan yang didorong oleh kemajuan Kecerdasan Buatan (AI)",
  },
  {
    icon: Target,
    title: "Fokus Pembelajaran",
    description: "Pengembangan bidang Desain Multimedia, Broadcasting, dan Data Analyst sebagai pilar utama",
  },
  {
    icon: Users,
    title: "Kolaborasi Strategis",
    description: "Kerjasama dengan praktisi industri, akademisi, pendidik, dan komunitas kreatif teknologi",
  },
  {
    icon: Heart,
    title: "Nilai Inti",
    description: "Integritas, etika digital, dan tanggung jawab sosial sebagai fondasi pembelajaran",
  },
];

const Sejarah = () => {
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
              Perjalanan Kami
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Sejarah
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Perjalanan Elfan AI Academy dalam mencetak generasi digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Content Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 islamic-pattern" />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 islamic-pattern" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <History size={28} className="text-primary" />
                </div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Sejarah <span className="gold-shimmer">Pendirian</span>
                </h2>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Seiring dengan pesatnya perkembangan teknologi terbarukan, percepatan perubahan zaman, serta meningkatnya tuntutan dunia kerja global, <strong className="text-foreground">Elfan AI Academy</strong> hadir sebagai respons inovatif terhadap dinamika perubahan yang didorong oleh kemajuan Kecerdasan Buatan (Artificial Intelligence/AI). Kami meyakini bahwa pendidikan merupakan fondasi utama dalam membentuk masa depan peradaban.
                </p>

                <p>
                  Oleh karena itu, di era ketika AI menjadi kekuatan transformatif lintas sektor, pendekatan pembelajaran konvensional tidak lagi memadai untuk menjawab tantangan zaman. Elfan AI Academy mengusung visi untuk melahirkan generasi yang tidak hanya adaptif terhadap perkembangan teknologi, tetapi juga mampu berperan sebagai agen perubahan yang berlandaskan nilai-nilai Qur'ani serta memiliki kemandirian ekonomi.
                </p>

                <p>
                  Sejak awal pendiriannya, Elfan AI Academy memfokuskan pada pengembangan bidang <strong className="text-foreground">Desain Multimedia, Broadcasting, dan Data Analyst</strong> sebagai pilar utama pembelajaran. Kurikulum dirancang secara adaptif, kontekstual, dan aplikatif dengan mengacu pada kebutuhan industri digital serta tantangan era transformasi teknologi. Dengan pendekatan tersebut, peserta didik dibekali keterampilan yang relevan, berdaya saing tinggi, dan berorientasi pada keberlanjutan.
                </p>

                <p>
                  Dalam perjalanannya, Elfan AI Academy terus berkembang melalui kolaborasi strategis dengan praktisi industri, akademisi, pendidik, serta komunitas kreatif dan teknologi. Melalui pendekatan <em>learning by doing</em> dan pemanfaatan teknologi berbasis AI, Elfan AI Academy berupaya membangun ekosistem pendidikan yang inovatif, inklusif, dan berorientasi pada kemaslahatan umat serta kemajuan peradaban.
                </p>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-4 my-12"
            >
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl bg-card border border-border card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 text-muted-foreground leading-relaxed"
            >
              <p>
                Untuk mendukung visi tersebut, Elfan AI Academy merancang sistem pembelajaran yang progresif, aplikatif, dan berorientasi pada praktik nyata industri. Setiap program dirancang untuk membekali peserta didik dengan keterampilan masa depan <em>(future skills)</em>, meliputi pemanfaatan kecerdasan buatan, analisis dan pengolahan data, produksi konten multimedia, serta pengembangan kemampuan berpikir kritis dan pemecahan masalah berbasis teknologi.
              </p>

              <p>
                Lebih dari sekadar penguasaan teknologi, Elfan AI Academy menanamkan nilai integritas, etika digital, dan tanggung jawab sosial sebagai fondasi utama dalam setiap proses pembelajaran. Kami meyakini bahwa kemajuan teknologi harus berjalan seiring dengan kematangan akhlak dan kesadaran spiritual, sehingga AI dapat dimanfaatkan sebagai sarana pemberdayaan dan kemaslahatan, bukan sekadar alat konsumsi teknologi.
              </p>

              <div className="bg-card border border-border rounded-2xl p-8 mt-8">
                <p className="text-foreground font-medium text-lg leading-relaxed">
                  Dengan pendekatan holistik, <span className="gold-shimmer">Elfan AI Academy</span> berkomitmen menjadi pusat pengembangan talenta digital yang berdaya saing global, berakar kuat pada nilai-nilai lokal dan Qur'ani, serta mampu menciptakan peluang kemandirian ekonomi melalui inovasi, kewirausahaan digital, dan kontribusi nyata bagi pembangunan masyarakat.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Sejarah;
