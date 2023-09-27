import React from 'react'
import ViewSanPham from '../../../Components/ViewSanPham/ViewSanPham'
import './Tatca.css'
import { useTranslation } from 'react-i18next'
const Tatca = () => {
  const [t,i18n] = useTranslation("global");
  return (
    <div className="tatCa">
      <div className="productList">
        <ViewSanPham name={t("product.product_1.name")} src={t("product.product_1.ImageUrl")} />
        <ViewSanPham name={t("product.product_2.name")} src={t("product.product_2.ImageUrl")} />
        <ViewSanPham name={t("product.product_3.name")} src={t("product.product_3.ImageUrl")} />
        <ViewSanPham name={t("product.product_4.name")} src={t("product.product_4.ImageUrl")} />
        <ViewSanPham name={t("product.product_5.name")} src={t("product.product_5.ImageUrl")} />
        <ViewSanPham name={t("product.product_6.name")} src={t("product.product_6.ImageUrl")} />
        <ViewSanPham name={t("product.product_7.name")} src={t("product.product_7.ImageUrl")} />
        <ViewSanPham name={t("product.product_8.name")} src={t("product.product_8.ImageUrl")} />
        <ViewSanPham name={t("product.product_9.name")} src={t("product.product_9.ImageUrl")} />
        <ViewSanPham name={t("product.product_10.name")} src={t("product.product_10.ImageUrl")} />
        <ViewSanPham name={t("product.product_11.name")} src={t("product.product_11.ImageUrl")} />
        <ViewSanPham name={t("product.product_12.name")} src={t("product.product_12.ImageUrl")} />
        <ViewSanPham name={t("product.product_13.name")} src={t("product.product_13.ImageUrl")} />
        <ViewSanPham name={t("product.product_14.name")} src={t("product.product_14.ImageUrl")} />
        <ViewSanPham name={t("product.product_15.name")} src={t("product.product_15.ImageUrl")} />
        <ViewSanPham name={t("product.product_16.name")} src={t("product.product_16.ImageUrl")} />
        <ViewSanPham name={t("product.product_17.name")} src={t("product.product_17.ImageUrl")} />
        <ViewSanPham name={t("product.product_18.name")} src={t("product.product_18.ImageUrl")} />
        <ViewSanPham name={t("product.product_19.name")} src={t("product.product_19.ImageUrl")} /> 
      </div>
    </div>
  )
}

export default Tatca