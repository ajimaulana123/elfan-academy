import { MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="kontak" className="bg-blue-dark text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center font-display font-bold text-xl text-secondary-foreground">
                EA
              </div>
              <div>
                <span className="font-display font-bold text-xl">Elfan AI Academy</span>
                <span className="block text-xs opacity-70">Pendidikan Islam Modern</span>
              </div>
            </div>

            <p className="text-primary-foreground/70 leading-relaxed mb-6 max-w-md">
              Lembaga pendidikan Islam yang mengintegrasikan nilai-nilai keislaman dengan teknologi kecerdasan buatan
              untuk membentuk generasi muslim yang berakhlak mulia dan berdaya saing global.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Menu Cepat</h4>
            <ul className="space-y-3">
              {["Beranda", "Tentang Kami", "Program Studi", "Fasilitas", "Pendaftaran", "Kontak"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">Jl. Pendidikan No. 123, Kota, Indonesia 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">info@elfanacademy.id</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/50 text-sm text-center md:text-left">© 2025 Elfan AI Academy. Hak Cipta Dilindungi.</p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Kebijakan Privasi
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
