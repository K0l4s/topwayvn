import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import './ProductDetail.css';
import { useTranslation } from 'react-i18next';

const ProductDetail = ({ isOpen, onClose, productId }) => {
  const [t, i18n] = useTranslation("global");
  // Điều hướng đến Contact
  const handleContact = () => {
    onClose();
    window.location.href = '/contact';
  };
  return (

    <Modal size='full' isOpen={isOpen} onClose={onClose} productId={productId}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <p>{t("product.product_" + productId + ".name")}</p>
        </ModalHeader>
        <ModalCloseButton />
        <hr />
        <ModalBody>
          <img class="productDetail_img" loading='lazy' src={t("product.product_" + productId + ".ImageUrl")} alt="" />
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleContact}>Liên hệ ngay</Button>
        </ModalFooter>
      </ModalContent >
    </Modal >
  );
};

export default ProductDetail;
