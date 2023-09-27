import React from 'react'
import './FooterBar.css'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
const FooterBar = () => {
    const navigate = useNavigate();
    const [t, i18n] = useTranslation("global");
    return (
        <div className="footer">
            <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/335372298_1286959945188947_1228093645418539727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mZez1jhf0f4AX96aiBa&_nc_ht=scontent.fsgn13-2.fna&_nc_e2o=f&oh=00_AfAbMiYLyvFfWkIXpNjGkV48J_vExzVOc1uoKW8TKrvefw&oe=65176BC7"
                alt="logo" onClick={() => navigate("/")} />
            <p>{t("footer")}</p>
        </div>
    )
}

export default FooterBar