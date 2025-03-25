import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import {LanguageProvider} from "./contexts/LanguageContext";
import FAQ from "./components/FAQ";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
import Location from "./components/LocationSection"
import Why from "./components/Why";
// import News from "./components/News";
export default function Home() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-neutral-50 font-hero">
                <Header/>
                <HeroSection/>
                <AboutSection/>
                <ServicesSection/>
                <Why/>
                <Testimonials />
                <FAQ/>
                <Location/>
                <ContactSection/>
                <Footer/>
                <ChatBot/>
            </div>
        </LanguageProvider>
    );
}
