import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

const Profile = () => {
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
              Tentang Kami
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Profile
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Mengenal lebih dekat Elfan AI Academy
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pemikiran Dasar Section */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 islamic-pattern" />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 islamic-pattern" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <BookOpen size={28} className="text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Pemikiran <span className="gold-shimmer">Dasar</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Elfan AI Academy</strong> adalah kampus AI pertama di Solo yang berfokus pada pengembangan Televisi AI Multimedia, Broadcasting, dan Data Analyst, berkomitmen dalam menghadirkan pembelajaran yang relevan dengan kebutuhan industri digital masa kini. Dengan mengacu kepada surat Al-Hadid ayat 25 bahwa teknologi memiliki manfaat yang sangat besar terhadap perkembangan dan efisiensi kehidupan bahkan setara dengan manfaat Qur'an terhadap ekosistem dalam kehidupan manusia, sebagaimana dalam firman-Nya.
              </p>

              {/* Arabic Verse */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-2xl p-8 my-8"
              >
                <p className="text-2xl md:text-3xl text-foreground text-right leading-loose font-arabic mb-6" dir="rtl">
                  لَقَدْ اَرْسَلْنَا رُسُلَنَا بِالْبَيِّنٰتِ وَاَنْزَلْنَا مَعَهُمُ الْكِتٰبَ وَالْمِيْزَانَ لِيَقُوْمَ النَّاسُ بِالْقِسْطِۚ وَاَنْزَلْنَا الْحَدِيْدَ فِيْهِ بَأْسٌ شَدِيْدٌ وَّمَنَافِعُ لِلنَّاسِ وَلِيَعْلَمَ اللّٰهُ مَنْ يَّنْصُرُهٗ وَرُسُلَهٗ بِالْغَيْبِۗ اِنَّ اللّٰهَ قَوِيٌّ عَزِيْزٌࣖ ۝٢٥
                </p>
                <div className="border-t border-border pt-6">
                  <p className="text-muted-foreground italic">
                    "Sungguh, Kami benar-benar telah mengutus rasul-rasul Kami dengan bukti-bukti yang nyata dan Kami menurunkan bersama mereka kitab dan neraca (keadilan) agar manusia dapat berlaku adil. Kami menurunkan besi yang mempunyai kekuatan hebat dan berbagai manfaat bagi manusia agar Allah mengetahui siapa yang menolong (agama)-Nya dan rasul-rasul-Nya walaupun (Allah) tidak dilihatnya. Sesungguhnya Allah Mahakuat lagi Mahaperkasa."
                  </p>
                  <p className="text-secondary font-semibold mt-3">(Al-Hadid : 25)</p>
                </div>
              </motion.div>

              <p>
                Ayat tersebut memberikan landasan filosofis bahwa teknologi—yang dalam ayat tersebut direpresentasikan dengan besi—merupakan sarana peradaban yang dianugerahkan Allah SWT untuk dimanfaatkan secara optimal demi kemaslahatan manusia. Sebagaimana Al-Qur'an berfungsi sebagai petunjuk nilai dan moral kehidupan, teknologi berperan sebagai alat pendukung yang memperkuat efektivitas, efisiensi, dan keadilan dalam berbagai aspek kehidupan manusia.
              </p>

              <p>
                Dalam konteks modern, teknologi digital dan kecerdasan buatan (Artificial Intelligence) merupakan manifestasi lanjutan dari pemanfaatan "besi" di era kontemporer. AI, multimedia, broadcasting, dan data analytics tidak sekadar menjadi alat produksi informasi, namun juga instrumen strategis dalam membangun ekosistem pengetahuan, memperluas dakwah, mencerdaskan umat, serta menciptakan solusi berbasis data yang adil dan bertanggung jawab.
              </p>

              <p>
                Oleh karena itu, <strong className="text-foreground">Elfan AI Academy</strong> memandang teknologi bukan hanya sebagai kecakapan teknis, tetapi sebagai amanah peradaban yang harus dikembangkan dengan landasan nilai, etika, dan spiritualitas. Melalui integrasi antara penguasaan teknologi mutakhir dan nilai-nilai Qur'ani, Elfan AI Academy berkomitmen mencetak generasi yang tidak hanya unggul secara kompetensi digital, tetapi juga berakal, beradab menjadi muslim yang memiliki pemahaman yang komprehensif dan siap menjadi penggerak perubahan positif di tengah masyarakat global.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Profile;
