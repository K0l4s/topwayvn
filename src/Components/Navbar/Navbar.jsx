import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useTranslation } from 'react-i18next';
const Navbar = () => {
    const navigate = useNavigate();
    const handleChangeLanguage = (language) => () => {
        i18n.changeLanguage(language);
    }
    const [t, i18n] = useTranslation("global");
    return (
        <div className="navbar">
            <Button onClick={handleChangeLanguage("en")}>English</Button>
            <Button onClick={handleChangeLanguage("vi")}>Tiếng Việt</Button>
            
            <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/335372298_1286959945188947_1228093645418539727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mZez1jhf0f4AX96aiBa&_nc_ht=scontent.fsgn13-2.fna&_nc_e2o=f&oh=00_AfAbMiYLyvFfWkIXpNjGkV48J_vExzVOc1uoKW8TKrvefw&oe=65176BC7" 
            alt="logo" onClick={()=> navigate("/")}/>
            <div className="group">
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/")}>{t("navbar.home")}</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/linh-kien-may")}>{t("navbar.tab_1")}</Button>
                <Button className="nav_button" colorScheme="transparent"onClick={()=> navigate("/khau-kim")}>{t("navbar.tab_2")}</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/gia-cong")}>{t("navbar.tab_3")}</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/all")}>{t("navbar.tab_4")}</Button>
            </div >
        </div>
    )
}

export default Navbar