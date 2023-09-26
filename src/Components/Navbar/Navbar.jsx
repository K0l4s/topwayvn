import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <img src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/335372298_1286959945188947_1228093645418539727_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=mZez1jhf0f4AX96aiBa&_nc_ht=scontent.fsgn13-2.fna&_nc_e2o=f&oh=00_AfAbMiYLyvFfWkIXpNjGkV48J_vExzVOc1uoKW8TKrvefw&oe=65176BC7" 
            alt="logo" onClick={()=> navigate("/")}/>
            <div className="group">
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/")}>Trang Chủ</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/linh-kien-may")}>Linh Kiện Máy Thành Hình</Button>
                <Button className="nav_button" colorScheme="transparent"onClick={()=> navigate("/khau-kim")}>Khẩu Kim</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/gia-cong")}>Gia Công Chi Tiết</Button>
                <Button className="nav_button" colorScheme="transparent" onClick={()=> navigate("/all")}>Tất Cả Sản Phẩm</Button>
            </div >
        </div>
    )
}

export default Navbar