import React from 'react'
const ViewSanPham = ({ name, src }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img width={300} loading='lazy' boxSize='200px' src={src} />
        </div>
    )
}

export default ViewSanPham