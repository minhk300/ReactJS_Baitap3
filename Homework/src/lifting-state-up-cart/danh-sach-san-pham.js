import React, { Component } from "react";
import SanPham from "./san-pham";


export default class DanhSachSanPham extends Component {
  renderHTML = () => {
    const { listProduct } = this.props;
    return listProduct.map(product => (
      <SanPham
        key={product.maSP}
        product={product}
        handleProduct={this.props.handleProduct}
        addCart={this.props.addCart}
      />))
  }
  render() {
    // const { listProduct } = this.props.listProduct;
    return (
      <div className="container">
        <div className="row">
          {this.renderHTML()}
        </div>
      </div>
    );
  }
}
