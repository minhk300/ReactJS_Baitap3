import React, { Component } from "react";
import SanPham from "./san-pham";


export default class DanhSachSanPham extends Component {
  renderSanPham = () => {
    const { listProduct } = this.props;
    return listProduct.map(product =>
      <SanPham
        key={product.maSP}
        productDetail={product}
        handleProductDetail={this.props.handleProductDetail}
        addProduct={this.props.addProduct}
      />
    )
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderSanPham()}
        </div>
      </div>
    );
  }
}
