import React from 'react'
import './Homepage.css'
const Homepage = () => {
    return (
        <div className="homepage">

            <h1>Về chúng tôi</h1>
            <hr />
            <div className="companyInfo">
                <h2>Thông tin chung</h2>
                <hr />
                <div className="flipCard">
                    <h3>CÔNG TY TNHH TM SX DV TOP WAY VIỆT NAM</h3>
                    <h3>TOPWAY VIETNAM TRADING PRODUCTION SERVICES COMPANY LIMITED</h3>
                    <p>Địa chỉ: Số 25b/70, khu phố 9, phường Hố Nai, thành phố Biên Hoà, tỉnh Đồng Nai, Việt Nam</p>
                    <p>Điện thoại: 0908793445</p>
                    <p>Email: Topwayvn9999@gmail.com</p>
                    <p>MST: 3702813749</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>Lịch sử hình thành</h2>
                <hr />
                <div className="flipCard">
                    <p>Công ty Topway được thành lập vào năm 2019 với trụ sở đầu tiên tại Bình Dương, sau đó đã chuyển về Biên Hòa-Đồng Nai, hiện tại công ty đã hoạt động được gần 5 năm trong thương mại, sản xuất khuôn mẫu, cơ khí. Với đội ngũ kỹ sư, chuyên gia nước ngoài, cử nhân và công nhân lành nghề trên 10 năm kinh nghiệm, Top Way Việt Nam cam kết sẽ cung cấp cho Quý khách hàng và đối tác những sản phẩm, dịch vụ tốt nhất.</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>Lĩnh vực kinh doanh</h2>
                <hr />
                <div className="flipCard">
                    <p>Top Way Việt Nam là công ty chuyên về Cơ khí, chuyên thiết kế và chế tạo khuôn mẫu, phụ tùng máy, máy chuyên dùng theo yêu cầu với các máy móc gia công hiện đại CNC, Máy dập, máy Hàn, Máy Tiện, máy Phay, máy Mài... Với nhận thức cơ khí là giá trị cốt lõi của sản xuất, của nền công nghiệp hoá - hiện đại hoá công nghiệp; Việc nâng cao chất lượng sản phẩm là chìa khoá để Top Way Việt Nam tạo dựng lòng tin vững chắc đối với khách hàng và đối tác. Tất cả các sản phẩm của Top Way Việt Nam đều trải qua quá trình chế tạo được kiểm soát chặt chẽ từ nguyên vật liệu, công cụ dụng cụ đầu vào, trong quá trình sản xuất cũng như kiểm tra nghiêm ngặt khi xuất kho đảm bảo chất lượng đồng đều trên tất cả loạt chi tiết được giao đến tay khách hàng. Ngoài ra, Top Way Việt Nam còn thực hiện các dịch vụ như: Kế toán - Thuế và gỡ rối số liệu kế toán doanh nghiệp; Thành lập - Thay đổi - Giải thể doanh nghiệp; Tư vấn và xin cấp phép lao động, Visa, Thẻ tạm trú cho người nước ngoài.</p>
                </div>
            </div>
            <div className="companyInfo">
                <h2>Các đối tác của TopWay VN</h2>
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
            <h1>Liên hệ ngay</h1>
            <h1>*Lưu ý, đây chỉ là biểu mẫu sample, sau khi web được chấp nhận, hãy tạo lại 1 forms khác và gửi cho dev để cập nhật forms!</h1>
            <hr />
            <iframe loading="lazy" frame src="https://forms.gle/eseG4gyXvsyXqt747" frameborder="0"></iframe>
        </div>
    )
}

export default Homepage