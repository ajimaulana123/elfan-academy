 import Navbar from "@/components/Navbar";
 import HeroSlider from "@/components/HeroSlider";
 import AboutSection from "@/components/AboutSection";
 import ProgramSection from "@/components/ProgramSection";
 import FacilitiesSection from "@/components/FacilitiesSection";
 import StatsSection from "@/components/StatsSection";
 import Footer from "@/components/Footer";
 
 const Index = () => {
   return (
     <main className="min-h-screen">
       <Navbar />
       <HeroSlider />
       <StatsSection />
       <AboutSection />
       <ProgramSection />
       <FacilitiesSection />
       <Footer />
     </main>
   );
 };
 
 export default Index;
