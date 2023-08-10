import React, {useEffect, useState} from "react";
import "../../Styles/LoginForm.css";

const LoginForm = () => {

    const [popupStyle, showPopup] = useState("hide")

    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => showPopup("hide"), 3000)
    }

    return (
        <div className="cover">
            <input type="text" placeholder="Prisijungimo vardas" />
            <input type="password" placeholder="Slaptazodis" />
            <div className="login-btn" onClick={popup}>Prisijungti</div>
            <div className={popupStyle}>
                <h3>Prisijungimas Nepavyko</h3>
                <h4>Neteisingai ivestas prisijungimo vardas arba slaptazodis</h4>
            </div>            
        </div>
    )
}

export default LoginForm