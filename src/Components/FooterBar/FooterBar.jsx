import React from 'react'
import './FooterBar.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const FooterBar = () => {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation("global");
    return (
        <div className="footer">
            
            <div className="text">
                <p>CÔNG TY TNHH TM SX DV TOP WAY VIỆT NAM</p>
                <p>TOPWAY VIETNAM TRADING PRODUCTION SERVICES COMPANY LIMITED</p>
                <p>{t("home.infor_1")}</p>
                <p>{t("home.phone")} 0908 793 445 (Mrs.Hương)</p>
                <p>0942 898 168</p>
                <p>Email: Topwayvn9999@gmail.com</p>
                <p>MST: 3702813749</p>
            </div>
        </div>
    )
}

export default FooterBar