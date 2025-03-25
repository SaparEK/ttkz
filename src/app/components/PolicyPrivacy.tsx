'use client';
import React, {useEffect, useState} from 'react';
import {useLanguage} from "../contexts/LanguageContext";

const PrivacyPolicy = () => {
    const {t} = useLanguage();
    // const [activeSection, setActiveSection] = useState("");
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // const isMobile = window.innerWidth <= 768; // Проверяем ширину экрана
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = document.querySelectorAll("h2");
    //         let currentSection = "";
    //
    //         sections.forEach((section) => {
    //             const sectionTop = section.offsetTop;
    //             if (window.scrollY >= sectionTop - 80) {
    //                 currentSection = section.id;
    //             }
    //         });
    //
    //         setActiveSection(currentSection);
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    return (

        <div style={{display: 'flex', maxWidth: '1000px', margin: '100px auto'}}>
            {/*<div style={{*/}
            {/*    width: '250px',*/}
            {/*    height: '100vh',*/}
            {/*    position: 'fixed',*/}
            {/*    left: '0',*/}
            {/*    top: '0',*/}
            {/*    padding: '20px',*/}
            {/*    backgroundColor: '#f9f9f9',*/}
            {/*    borderRight: '1px solid #ddd',*/}
            {/*    overflowY: 'auto',*/}
            {/*    transition: 'transform 0.3s ease-in-out',*/}
            {/*    transform: isMobile && !isMobileMenuOpen ? 'translateX(-100%)' : 'translateX(0)',*/}
            {/*    zIndex: 1000*/}
            {/*}}>*/}
            {/*    {isMobile && (*/}
            {/*        <button*/}
            {/*            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}*/}
            {/*            style={{*/}
            {/*                position: 'absolute',*/}
            {/*                top: '10px',*/}
            {/*                right: '-40px',*/}
            {/*                backgroundColor: '#f9f9f9',*/}
            {/*                border: '1px solid #ddd',*/}
            {/*                padding: '5px 10px',*/}
            {/*                cursor: 'pointer',*/}
            {/*                fontSize: '14px',*/}
            {/*                fontWeight: 'bold'*/}
            {/*            }}>*/}
            {/*            ☰*/}
            {/*        </button>*/}
            {/*    )}*/}
            {/*    <h3 style={{fontSize: '18px', fontWeight: 'bold'}}>Навигация</h3>*/}
            {/*    <ul style={{listStyle: 'none', padding: 0}}>*/}
            {/*        {[*/}
            {/*            "general_situation", "basic_concepts", "basic_rights_operator",*/}
            {/*            "basic_rights_subject", "principles_of_processing", "processing_purposes",*/}
            {/*            "processing_conditions", "collection_procedure", "list_of_actions",*/}
            {/*            "cross_border_transfer", "confidentiality", "final_provisions"*/}
            {/*        ].map((id, index) => (*/}
            {/*            <li key={id} style={{margin: '10px 0'}}>*/}
            {/*                <a href={`#${id}`}*/}
            {/*                   style={{*/}
            {/*                       textDecoration: 'none',*/}
            {/*                       color: activeSection === id ? 'blue' : 'black',*/}
            {/*                       fontWeight: 'bold',*/}
            {/*                       fontSize: '14px'*/}
            {/*                   }}>*/}
            {/*                    {index + 1}. {t(`policy.general_situation.title_${index + 1}`)}*/}
            {/*                </a>*/}
            {/*            </li>*/}
            {/*        ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div style={{flex: 1, padding: '20px', lineHeight: '1.6'}}>
                <h1 id="policy-title"
                    style={{textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px'}}>
                    {t("policy.title")}
                </h1>
                <div id="general_situation">

                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>1. {t("policy.general_situation.title_1")}</h1>
                    <p>
                        {t("policy.general_situation.content_1")}
                    </p>
                    <p>
                        <b>1.1.</b> {t("policy.general_situation.content_1_1")}
                    </p>
                    <p>
                        <b>1.2.</b> {t("policy.general_situation.content_1_2")}
                    </p>
                </div>
                <div id={"basic_concepts"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>2. {t("policy.general_situation.title_2")} </h1>
                    <p>
                        <b>2.1.</b> {t("policy.general_situation.content_2_1")}
                    </p>
                    <p>
                        <b>2.2.</b> {t("policy.general_situation.content_2_2")}
                    </p>
                    <p>
                        <b>2.3.</b> {t("policy.general_situation.content_2_3")}
                        <a href="https://tuotuo.kz"> https://tuotuo.kz</a>.
                    </p>
                    <p>
                        <b>2.4.</b> {t("policy.general_situation.content_2_4")}
                    </p>
                    <p>
                        <b>2.5.</b> {t("policy.general_situation.content_2_5")}
                    </p>
                    <p>
                        <b>2.6.</b> {t("policy.general_situation.content_2_6")}
                    </p>
                    <p>
                        <b>2.7.</b> {t("policy.general_situation.content_2_7")}
                    </p>
                    <p>
                        <b>2.8.</b> {t("policy.general_situation.content_2_8")}
                    </p>
                    <p>
                        <b>2.9.</b> {t("policy.general_situation.content_2_9")}
                    </p>
                    <p>
                        <b>2.10.</b> {t("policy.general_situation.content_2_10")}
                    </p>
                    <p>
                        <b>2.11.</b> {t("policy.general_situation.content_2_11")}
                    </p>
                    <p>
                        <b>2.12.</b> {t("policy.general_situation.content_2_12")}
                    </p>
                    <p>
                        <b>2.13.</b> {t("policy.general_situation.content_2_13")}
                    </p>
                    <p>
                        <b>2.14.</b> {t("policy.general_situation.content_2_14")}
                    </p>
                </div>
                <div id={"basic_rights_operator"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>3. {t("policy.general_situation.title_3")}</h1>
                    <p>
                        <b>3.1.</b> {t("policy.general_situation.content_3_1")}
                    </p>
                    <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                        <li>{t("policy.general_situation.content_3_1_1")}</li>
                        <li>{t("policy.general_situation.content_3_1_2")}</li>
                        <li>{t("policy.general_situation.content_3_1_3")}</li>
                    </ul>
                    <p>
                        <b>3.2.</b> {t("policy.general_situation.content_3_2")}
                    </p>
                    <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                        <li>{t("policy.general_situation.content_3_2_1")}</li>
                        <li>{t("policy.general_situation.content_3_2_2")}</li>
                        <li>{t("policy.general_situation.content_3_2_3")}</li>
                        <li>{t("policy.general_situation.content_3_2_4")}</li>
                        <li>{t("policy.general_situation.content_3_2_5")}</li>
                        <li>{t("policy.general_situation.content_3_2_6")}</li>
                        <li>{t("policy.general_situation.content_3_2_7")}</li>
                        <li>{t("policy.general_situation.content_3_2_8")}</li>
                    </ul>

                </div>
                <div id={"basic_rights_subject"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>4. {t("policy.general_situation.title_4")} </h1>
                    <p>
                        <b>4.1.</b> {t("policy.general_situation.content_4_1")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_4_1_1")}</li>
                        <li>{t("policy.general_situation.content_4_1_2")}</li>
                        <li>{t("policy.general_situation.content_4_1_3")}</li>
                        <li>{t("policy.general_situation.content_4_1_4")}</li>
                        <li>{t("policy.general_situation.content_4_1_5")}</li>
                        <li>{t("policy.general_situation.content_4_1_6")}</li>
                    </ul>
                    <p>
                        <b>4.2.</b> {t("policy.general_situation.content_4_2")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_4_2_1")}</li>
                        <li>{t("policy.general_situation.content_4_2_2")}</li>
                    </ul>
                    <p>
                        <b>4.3.</b> {t("policy.general_situation.content_4_3")}
                    </p>
                </div>
                <div id={"principles_of_processing"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>5. {t("policy.general_situation.title_5")} </h1>
                    <p>
                        <b>5.1.</b> {t("policy.general_situation.content_5_1")}
                    </p>
                    <p>
                        <b>5.2.</b> {t("policy.general_situation.content_5_2")}
                    </p>
                    <p>
                        <b>5.3.</b> {t("policy.general_situation.content_5_3")}
                    </p>
                    <p>
                        <b>5.4.</b> {t("policy.general_situation.content_5_4")}
                    </p>
                    <p>
                        <b>5.5.</b> {t("policy.general_situation.content_5_5")}
                    </p>
                    <p>
                        <b>5.6.</b> {t("policy.general_situation.content_5_6")}
                    </p>
                    <p>
                        <b>5.7.</b> {t("policy.general_situation.content_5_7")}
                    </p>
                </div>
                <div id={"processing_purposes"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>6. {t("policy.general_situation.title_6")} </h1>
                    <p>
                        <b>6.1.</b> {t("policy.general_situation.content_6_1")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_6_1_1")}</li>
                    </ul>
                    <p>
                        <b>6.2.</b> {t("policy.general_situation.content_6_2")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_6_2_1")}</li>
                        <li>{t("policy.general_situation.content_6_2_2")}</li>
                        <li>{t("policy.general_situation.content_6_2_3")}</li>
                    </ul>
                    <p>
                        <b>6.3.</b> {t("policy.general_situation.content_6_3")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_6_3_1")}</li>
                    </ul>
                    <p>
                        <b>6.4.</b> {t("policy.general_situation.content_6_4")}
                    </p>
                    <ul>
                        <li>{t("policy.general_situation.content_6_4_1")}</li>
                    </ul>
                </div>
                <div id={"processing_conditions"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>7. {t("policy.general_situation.title_7")} </h1>
                    <p>
                        <b>7.1.</b> {t("policy.general_situation.content_7_1")}
                    </p>
                    <p>
                        <b>7.2.</b> {t("policy.general_situation.content_7_2")}
                    </p>
                    <p>
                        <b>7.3.</b> {t("policy.general_situation.content_7_3")}
                    </p>
                    <p>
                        <b>7.4.</b> {t("policy.general_situation.content_7_4")}
                    </p>
                    <p>
                        <b>7.5.</b> {t("policy.general_situation.content_7_5")}
                    </p>
                    <p>
                        <b>7.6.</b> {t("policy.general_situation.content_7_6")}
                    </p>
                    <p>
                        <b>7.7.</b> {t("policy.general_situation.content_7_7")}
                    </p>
                </div>
                <div id={"collection_procedure"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>8. {t("policy.general_situation.title_8")} </h1>
                    <p>
                        <b>8.1.</b> {t("policy.general_situation.content_8_1")}
                    </p>
                    <p>
                        <b>8.2.</b> {t("policy.general_situation.content_8_2")}
                    </p>
                    <p>
                        <b>8.3.</b> {t("policy.general_situation.content_8_3")}
                    </p>
                    <p>
                        <b>8.4.</b> {t("policy.general_situation.content_8_4")}
                    </p>
                    <p>
                        <b>8.5.</b> {t("policy.general_situation.content_8_5")}
                    </p>
                    <p>
                        <b>8.6.</b> {t("policy.general_situation.content_8_6")}
                    </p>
                    <p>
                        <b>8.7.</b> {t("policy.general_situation.content_8_7")}
                    </p>
                    <p>
                        <b>8.8.</b> {t("policy.general_situation.content_8_8")}
                    </p>
                    <p>
                        <b>8.9.</b> {t("policy.general_situation.content_8_9")}
                    </p>
                    <p>
                        <b>8.10.</b> {t("policy.general_situation.content_8_10")}
                    </p>
                </div>
                <div id={"list_of_actions"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>9. {t("policy.general_situation.title_9")} </h1>
                    <p>
                        <b>9.1.</b> {t("policy.general_situation.content_9_1")}
                    </p>
                    <p>
                        <b>9.2.</b> {t("policy.general_situation.content_9_2")}
                    </p>
                </div>
                <div id={"cross_border_transfer"}>
                    <h1 className="py-2" style={{
                        fontWeight: 'bold',
                        fontSize: '2rem'
                    }}>10. {t("policy.general_situation.title_10")} </h1>
                    <p>
                        <b>10.1.</b> {t("policy.general_situation.content_10_1")}
                    </p>
                    <p>
                        <b>10.2.</b> {t("policy.general_situation.content_10_2")}
                    </p>
                </div>
                <div id={"confidentiality"}>
                    <h1 className="py-2" style={{
                        fontWeight: 'bold',
                        fontSize: '2rem'
                    }}>11. {t("policy.general_situation.title_11")} </h1>
                    <p>
                        <b>11.1.</b> {t("policy.general_situation.content_11_1")}
                    </p>
                </div>
                <div id={"final_provisions"}>
                    <h1 className="py-2"
                        style={{fontWeight: 'bold', fontSize: '2rem'}}>12. {t("policy.general_situation.title_12")}</h1>
                    <p>
                        <b>12.1.</b> {t("policy.general_situation.content_12_1")}
                    </p>
                    <p>
                        <b>12.2.</b> {t("policy.general_situation.content_12_2")}
                    </p>
                    <p>
                        <b>12.3.</b> {t("policy.general_situation.content_12_3")}
                    </p>
                </div>

            </div>
        </div>
    );
};

export default PrivacyPolicy;