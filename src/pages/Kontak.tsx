import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Pendidikan No. 123, Surakarta, Jawa Tengah 57139",
  },
  {
    icon: Phone,
    title: "Telepon",
    content: "+62 271 123 4567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@elfanacademy.id",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 08.00 - 16.00 WIB",
  },
];

const Kontak = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulasi pengiriman form
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });

    toast({
      title: "Pesan Terkirim!",
      description: "Terima kasih telah menghubungi kami. Kami akan segera merespons pesan Anda.",
    });

    // Reset status setelah beberapa detik
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              Hubungi Kami
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Kontak
            </h1>
            <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
              Kami siap membantu menjawab pertanyaan Anda tentang pendaftaran, program, dan informasi lainnya
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-28 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 islamic-pattern" />
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 islamic-pattern" />

        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Kirim <span className="gold-shimmer">Pesan</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu 1x24 jam.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="contoh@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      No. Telepon
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 812 3456 7890"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subjek *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Perihal pesan"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Pesan *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tuliskan pesan atau pertanyaan Anda..."
                    rows={5}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Mengirim...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle size={18} className="mr-2" />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Right - Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Contact Info Cards */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Informasi <span className="gold-shimmer">Kontak</span>
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-5 rounded-2xl bg-card border border-border card-hover"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                        <info.icon size={20} className="text-primary" />
                      </div>
                      <h3 className="font-display font-semibold text-foreground mb-1">{info.title}</h3>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  Lokasi <span className="gold-shimmer">Kampus</span>
                </h3>
                <div className="rounded-2xl overflow-hidden border border-border shadow-soft">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.56356954866!2d110.75759653691407!3d-7.575489199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16734d1c62ef%3A0x7c0b4c5d81e3c623!2sSurakarta%2C%20Kota%20Surakarta%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Elfan AI Academy"
                    className="w-full"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  📍 Klik peta untuk membuka di Google Maps
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

export default Kontak;
