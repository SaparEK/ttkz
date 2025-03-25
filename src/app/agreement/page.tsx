import Header from '../components/Header';
import Footer from '../components/Footer';
import {LanguageProvider} from "../contexts/LanguageContext";
import UserAgreement from "../components/UserAgreement";

export default function PolicyPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-neutral-50 font-hero">
                <Header />
                <UserAgreement />
                <Footer />
            </div>
        </LanguageProvider>

    );
}