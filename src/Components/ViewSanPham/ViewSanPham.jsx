import React from 'react'
import './ViewSanPham.css'
const ViewSanPham = ({ name, src }) => {
    return (
        <div className="viewSanPham">
            <h1>{name}</h1>
            <img loading='lazy' boxSize='200px' src={src} />
        </div>
    )
}

export default ViewSanPham