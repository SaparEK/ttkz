import PolicyPrivacy from '../components/PolicyPrivacy'; // Укажите правильный путь к вашему компоненту
import Header from '../components/Header';
import Footer from '../components/Footer';
import {LanguageProvider} from "../contexts/LanguageContext";

export default function PolicyPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-neutral-50 font-hero">
            <Header />
            <PolicyPrivacy />
            <Footer />
        </div>
        </LanguageProvider>

    );
}