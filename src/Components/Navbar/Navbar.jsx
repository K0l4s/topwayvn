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
    // Lấy subpath từ URL
    const subPath = window.location.pathname.split('/')[1];
    // Hiển thị trên consolelog
    console.log(subPath);
    return (
        // <div className="navbar">
        //     <div className="language">
        //         <img onClick={handleChangeLanguage("en")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png" alt="English" />
        //         <img onClick={handleChangeLanguage("vi")} src="https://cdn-icons-png.flaticon.com/512/323/323319.png" alt="Tiếng Việt" />
        //         <img onClick={handleChangeLanguage("cn")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg/2048px-Circle_Flag_of_the_People%27s_Republic_of_China.svg.png" alt="Tiếng Trung" />
        //     </div>
        //     <img className="logo" src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/335372298_1286959945188947_1228093645418539727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mZez1jhf0f4AX96aiBa&_nc_ht=scontent.fsgn13-2.fna&_nc_e2o=f&oh=00_AfAbMiYLyvFfWkIXpNjGkV48J_vExzVOc1uoKW8TKrvefw&oe=65176BC7"
        //         alt="logo" onClick={() => navigate("/")} />

        //     <div className="group">
        //         <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/")}>{t("navbar.home")}</Button>
        //         <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/linh-kien-may")}>{t("navbar.tab_1")}</Button>
        //         <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/khau-kim")}>{t("navbar.tab_2")}</Button>
        //         <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/gia-cong")}>{t("navbar.tab_3")}</Button>
        //         <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/all")}>{t("navbar.tab_4")}</Button>
        //     </div >
        // </div>
        <div className="nav">
            <div className="nav_top">
                <div className="logo_back">
                    <div className="logo">
                    <img src="https://i.ibb.co/F811bFS/Untitled-1.png"
                        alt="logo" onClick={() => navigate("/")} />
                        </div>
                </div>
                <div className="nav_text">
                    <p className="Name">TOPWAY VIETNAM TRADING PRODUCTION SERVICES COMPANY LIMITED</p>
                    <p className="hotline">Hotline:  0908 793 445 (Mrs.Hương) - 0942 898 168</p>
                </div>
                <div className="language">
                    <img onClick={handleChangeLanguage("en")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png" alt="English" />
                    <img onClick={handleChangeLanguage("vi")} src="https://cdn-icons-png.flaticon.com/512/323/323319.png" alt="Tiếng Việt" />
                    <img onClick={handleChangeLanguage("cn")} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg/2048px-Circle_Flag_of_the_People%27s_Republic_of_China.svg.png" alt="Tiếng Trung" />
                </div>
            </div>
            <div className="nav_group">
                <div className="group">
                    {subPath == "" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/")}>{t("navbar.home")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/")} variant="ghost">{t("navbar.home")}</Button>}
                    {/* Tương tự với các hàng dưới */}
                    {subPath == "linh-kien-may" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/linh-kien-may")}>{t("navbar.tab_1")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/linh-kien-may")} variant="ghost">{t("navbar.tab_1")}</Button>}
                    {subPath == "khau-kim" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/khau-kim")}>{t("navbar.tab_2")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/khau-kim")} variant="ghost">{t("navbar.tab_2")}</Button>}
                    {subPath == "gia-cong" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/gia-cong")}>{t("navbar.tab_3")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/gia-cong")} variant="ghost">{t("navbar.tab_3")}</Button>}
                    {subPath == "all" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/all")}>{t("navbar.tab_4")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/all")} variant="ghost">{t("navbar.tab_4")}</Button>}
                    {subPath == "contact" ? <Button className="nav_button" colorScheme="blue" onClick={() => navigate("/contact")}>{t("navbar.tab_5")}</Button> : <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/contact")} variant="ghost">{t("navbar.tab_5")}</Button>}
                    
                    {/* <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/linh-kien-may")}>{t("navbar.tab_1")}</Button>
                    <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/khau-kim")}>{t("navbar.tab_2")}</Button>
                    <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/gia-cong")}>{t("navbar.tab_3")}</Button>
                    <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/all")}>{t("navbar.tab_4")}</Button>
                    <Button className="nav_button" colorScheme="transparent" onClick={() => navigate("/contact")}>{t("navbar.tab_5")}</Button> */}
                </div >
            </div>
        </div>
    )
}

export default Navbar