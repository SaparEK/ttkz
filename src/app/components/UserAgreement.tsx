'use client';
import React from 'react';
import { useLanguage } from "../contexts/LanguageContext";

const UserAgreement = () => {
    const { t } = useLanguage();
    return (
        <div style={{maxWidth: '1000px', margin: '0 auto', padding: '20px', paddingTop: '100px'}}>
            <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>{t('agreement.name')}</h1>
            <div id={"heading"}>
                <p>
                    {t("agreement.heading.content_1")} <br/>
                    {t("agreement.heading.content_2")} <br/><br/>
                    {t("agreement.heading.content_3")} <br/>
                    <b>{t("agreement.heading.content_4")}</b> <br/>
                </p>
            </div>
            <div id={"rights"} style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>{t("agreement.rights.name")}</h1>
                <h3 style={{fontWeight: 'bold', paddingTop: '20px'}}>{t("agreement.rights.title_1.name")}</h3>
                <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li>{t("agreement.rights.title_1.content_1")}</li>
                    <li>{t("agreement.rights.title_1.content_2")}</li>
                    <li>{t("agreement.rights.title_1.content_3")}</li>
                </ul>
                <h3 style={{fontWeight: 'bold', paddingTop: '20px'}}>{t("agreement.rights.title_2.name")}</h3>
                <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li>{t("agreement.rights.title_2.content_1")}</li>
                    <li>{t("agreement.rights.title_2.content_2")}</li>
                </ul>
                <h3 style={{fontWeight: 'bold', paddingTop: '20px'}}>{t("agreement.rights.title_3.name")}</h3>
                <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li>{t("agreement.rights.title_3.content_1")}</li>
                    <li>{t("agreement.rights.title_3.content_2")}</li>
                </ul>
                <h3 style={{fontWeight: 'bold', paddingTop: '20px'}}>{t("agreement.rights.title_4.name")}</h3>
                <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li>{t("agreement.rights.title_4.content_1")}</li>
                </ul>
            </div>
            <div id={"responsibility"} style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>{t("agreement.responsibility.name")}</h1>
                <ul style={{listStyleType: 'square', paddingLeft: '20px'}}>
                    <li>{t("agreement.responsibility.content_1")}</li>
                    <li>{t("agreement.responsibility.content_2")}</li>
                </ul>
            </div>
            <div id={"condition"} style={{paddingTop: '20px', paddingBottom: '20px'}}>
                <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>{t("agreement.condition.name")}</h1>
                <ul>
                    <li>{t("agreement.condition.content_1")}</li>
                    <li>{t("agreement.condition.content_2")}</li>
                    <li>{t("agreement.condition.content_3")}</li>
                    <li>{t("agreement.condition.content_4")}</li>
                </ul>
            </div>
        </div>

    )
}
export default UserAgreement;