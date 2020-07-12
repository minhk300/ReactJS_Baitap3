import React, { Component } from "react";

export default class SanPham extends Component {
  handleProductDetailCb = () => {
    this.props.handleProductDetail(this.props.productDetail);
  }
  addProductCb = () => {
    this.props.addProduct(this.props.productDetail);
  }
  render() {
    const { productDetail } = this.props;
    return (
      <div className="col-sm-4">
        <div className="card">
          <img className="card-img-top" src={productDetail.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{productDetail.tenSP}</h4>
            <button className="btn btn-success" onClick={this.handleProductDetailCb}>Chi tiết</button>
            <button className="btn btn-danger" onClick={this.addProductCb}>Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}
