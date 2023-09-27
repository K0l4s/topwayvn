import React from 'react'
import './Homepage.css'
import { useTranslation } from 'react-i18next';
const Homepage = () => {
    const [t, i18n] = useTranslation("global");
    return (
        <div className="homepage">

            <h1>{t("home.aboutUs")}</h1>
            <hr />
            <div className="companyInfo">
                <h2>{t("home.infor")}</h2>
                <hr />
                <div className="flipCard">
                    <h3>CÔNG TY TNHH TM SX DV TOP WAY VIỆT NAM</h3>
                    <h3>TOPWAY VIETNAM TRADING PRODUCTION SERVICES COMPANY LIMITED</h3>
                    <p>{t("home.infor_1")}</p>
                    <p>{t("home.phone")} 0908793445</p>
                    <p>Email: Topwayvn9999@gmail.com</p>
                    <p>MST: 3702813749</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>{t("home.history")}</h2>
                <hr />
                <div className="flipCard">
                    <p>{t("home.historyDetail")}</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>{t("home.businessAreas")}</h2>
                <hr />
                <div className="flipCard">
                    <p>{t("home.businessAreasDetail")}</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>{t("home.partner")} TopWay VietNam</h2>
                <hr />
                <div className="imagelist">
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/3_1692342284.png?width=1200&optimize=medium"
                        alt="Maxxit" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/2_1692342260.png?width=1200&optimize=medium"
                        alt="Sailun" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/4_1692342288.png?width=1200&optimize=medium"
                        alt="Kumho Tire" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/6_1692342295.png?width=1200&optimize=medium"
                        alt="Tai Tan" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/5_1692342292.png?width=1200&optimize=medium"
                        alt="Jinyu" loading='lazy' />
                    <img src="https://sandbox.weebly.com/uploads/b/ba23cd2041780287b02b335bf182d9d7dc7b7c24cc899f1dd26f9f6020ee03f7/Picture1_1692342329.png?width=1200&optimize=medium"
                        alt="Kenda" loading='lazy' />
                </div>
            </div>
            <h1>{t("home.contact")}</h1>
            <h1>*Lưu ý, đây chỉ là biểu mẫu sample. Sau khi hoàn thành web, hãy tạo lại 1 forms khác và gửi cho dev để cập nhật forms!</h1>
            <hr />
            <iframe loading="lazy" frame src="https://forms.gle/eseG4gyXvsyXqt747" frameborder="0"></iframe>
        </div>
    )
}

export default Homepage