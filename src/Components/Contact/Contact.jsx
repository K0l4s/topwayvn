import React from 'react'
import { useTranslation } from 'react-i18next';
import  './Contact.css'
const Contact = () => {
    const [t] = useTranslation("global");
    return (
        <div className='contact'>
            <h1>{t("home.contact")}</h1>
            <h1>*Lưu ý, đây chỉ là biểu mẫu sample. Sau khi hoàn thành web, hãy tạo lại 1 forms khác và gửi cho dev để cập nhật forms!</h1>
            <iframe loading="lazy" frame src="https://forms.gle/eseG4gyXvsyXqt747" frameborder="0"></iframe>
        </div>
    )
}

export default Contact