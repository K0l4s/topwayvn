import React, { useState } from 'react'
import ViewSanPham from '../../../Components/ViewSanPham/ViewSanPham'
import './KhauKim.css'
import { useTranslation } from 'react-i18next'
import ProductDetail from '../../ProductDetail/ProductDetail'
const KhauKim = () => {
  const [t, i18n] = useTranslation("global");
  const [isOpen, setIsOpen] = useState();
  const onClose = () => { setIsOpen(false); }
  const [productId, setProductId] = useState("1");
  return (
    <div className="gcct">
      <div className="productList">
        <div className="1" onClick={() => { setIsOpen(true); setProductId("1") }}>
          <ViewSanPham name={t("product.product_1.name")} src={t("product.product_1.ImageUrl")} />
        </div>
        <div className="2" onClick={() => { setIsOpen(true); setProductId("2") }}>
          <ViewSanPham name={t("product.product_2.name")} src={t("product.product_2.ImageUrl")} />
        </div>
        <div className="3" onClick={() => { setIsOpen(true); setProductId("3") }}>
          <ViewSanPham name={t("product.product_3.name")} src={t("product.product_3.ImageUrl")} />
        </div>
        <div className="4" onClick={() => { setIsOpen(true); setProductId("4") }}>
          <ViewSanPham name={t("product.product_4.name")} src={t("product.product_4.ImageUrl")} />
        </div>
        <div className="5" onClick={() => { setIsOpen(true); setProductId("5") }}>
          <ViewSanPham name={t("product.product_5.name")} src={t("product.product_5.ImageUrl")} />
        </div>
        <div className="6" onClick={() => { setIsOpen(true); setProductId("6") }}>
          <ViewSanPham name={t("product.product_6.name")} src={t("product.product_6.ImageUrl")} />
        </div>
        <div className="7" onClick={() => { setIsOpen(true); setProductId("7") }}>
          <ViewSanPham name={t("product.product_7.name")} src={t("product.product_7.ImageUrl")} />
        </div>
        <div className="8" onClick={() => { setIsOpen(true); setProductId("8") }}>
          <ViewSanPham name={t("product.product_8.name")} src={t("product.product_8.ImageUrl")} />
        </div>
        <div className="9" onClick={() => { setIsOpen(true); setProductId("9") }}>
          <ViewSanPham name={t("product.product_9.name")} src={t("product.product_9.ImageUrl")} />
        </div>
        <div className="10" onClick={() => { setIsOpen(true); setProductId("10") }}>
          <ViewSanPham name={t("product.product_10.name")} src={t("product.product_10.ImageUrl")} />
        </div>
        <div className="11" onClick={() => { setIsOpen(true); setProductId("11") }}>
          <ViewSanPham name={t("product.product_11.name")} src={t("product.product_11.ImageUrl")} />
        </div>
        <div className="12" onClick={() => { setIsOpen(true); setProductId("12") }}>
          <ViewSanPham name={t("product.product_12.name")} src={t("product.product_12.ImageUrl")} />
        </div>
        <div className="13" onClick={() => { setIsOpen(true); setProductId("13") }}>
          <ViewSanPham name={t("product.product_13.name")} src={t("product.product_13.ImageUrl")} />
        </div>
        <div className="14" onClick={() => { setIsOpen(true); setProductId("14") }}>
          <ViewSanPham name={t("product.product_14.name")} src={t("product.product_14.ImageUrl")} />
        </div>
        <div className="15" onClick={() => { setIsOpen(true); setProductId("15") }}>
          <ViewSanPham name={t("product.product_15.name")} src={t("product.product_15.ImageUrl")} />
        </div>
        <div className="16" onClick={() => { setIsOpen(true); setProductId("16") }}>
          <ViewSanPham name={t("product.product_16.name")} src={t("product.product_16.ImageUrl")} />
        </div>
        <div className="17" onClick={() => { setIsOpen(true); setProductId("17") }}>
          <ViewSanPham name={t("product.product_17.name")} src={t("product.product_17.ImageUrl")} />
        </div>
        <div className="18" onClick={() => { setIsOpen(true); setProductId("18") }}>
          <ViewSanPham name={t("product.product_18.name")} src={t("product.product_18.ImageUrl")} />
        </div>
        <div className="19" onClick={() => { setIsOpen(true); setProductId("19") }}>
          <ViewSanPham name={t("product.product_19.name")} src={t("product.product_19.ImageUrl")} />
        </div>
      </div>
      <ProductDetail isOpen={isOpen} onClose={onClose} productId={productId} />
    </div>
  )
}

export default KhauKim