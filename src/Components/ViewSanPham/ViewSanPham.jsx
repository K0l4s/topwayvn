import React from 'react'
import './ViewSanPham.css'
import { Button } from '@chakra-ui/react'
const ViewSanPham = ({ name, src }) => {
    return (
        <div className="viewSanPham">
            <p>{name}</p>
            <img loading='lazy' boxSize='200px' src={src} />
        </div>
    )
}

export default ViewSanPham