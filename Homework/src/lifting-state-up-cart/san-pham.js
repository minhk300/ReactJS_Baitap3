import React from "react";

const SanPham = ({ detailProduct, handleDetailProduct, addToCart}) => {
  return (
    <div className="col-sm-4">
      <div className="card">
        <img className="card-img-top" src={detailProduct.hinhAnh} alt="" />
        <div className="card-body">
          <h4 className="card-title">{detailProduct.tenSP}</h4>
          <button className="btn btn-success" onClick={handleDetailProduct.bind(this, detailProduct)}>Chi tiết</button>
          <button className="btn btn-danger" onClick={addToCart.bind(this, detailProduct)}>Thêm giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}

export default SanPham;