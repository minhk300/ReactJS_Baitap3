import React from "react";
import SanPham from "./san-pham"

const DanhSachSanPham = ({ listProduct, handleDetailProduct, addToCart}) => {
  const renderProduct = (listProduct) => listProduct.map(product => <SanPham
    key={product.maSP} 
    detailProduct={product} 
    handleDetailProduct={handleDetailProduct} 
    addToCart={addToCart}
  />)
  return (
    <div className="container">
      <div className="row">
        {renderProduct(listProduct)}
      </div>
    </div>
  );
}

export default DanhSachSanPham;