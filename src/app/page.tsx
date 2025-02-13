import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import {LanguageProvider} from "./contexts/LanguageContext";
import {LanguageSwitcher} from "./components/LanguageSwitcher";
import FAQ from "./components/FAQ";
import ChatBot from "./components/ChatBot";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonials from "./components/Testimonials";
// import News from "./components/News";
export default function Home() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-neutral-50">
                <Header/>
                {/*<Navbar />*/}
                <LanguageSwitcher/>
                <HeroSection/>
                <AboutSection/>
                <ServicesSection/>
                <FAQ/>
                <Testimonials />
                {/*<News/>*/}
                <ContactSection/>
                <Footer/>
                <ChatBot/>
            </div>
        </LanguageProvider>
    );
}
