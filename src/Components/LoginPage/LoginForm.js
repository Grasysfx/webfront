
import React, { useState } from "react";
import { useLanguage } from '../../locales/LanguageContext'; 
import enTranslations from '../../locales/EN/en.json'; 
import ltTranslations from "../../locales/LT/lt.json"; 
import "../../Styles/LoginForm.css";

const LoginForm = () => {
    const { language } = useLanguage();
    const translations = language === 'en' ? enTranslations : ltTranslations;

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <input type="text" placeholder={translations.username} />
            <input type="password" placeholder={translations.password} />
            <div className="login-btn" onClick={popup}>{translations.loginButton}</div>
            <div className={popupStyle}>
                <h3>{translations.loginFailed}</h3>
                <h4>{translations.invalidCredentials}</h4>
            </div>
        </div>
    )
}

export default LoginForm;