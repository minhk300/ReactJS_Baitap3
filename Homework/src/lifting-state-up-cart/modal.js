import React, { Component } from "react";

export default class Modal extends Component {
  addProductCb = (product) => {
    this.props.addProduct(product);
  }

  decreaseProductCb = (product) => {
    this.props.decreaseProduct(product);
  }

  // Đoạn này có j đó cồng kềnh (?) :v
  // Delete Button => hide tr Node
  deleteProductCb = (product) => {
    this.props.deleteProduct(product);
    const rowNodeLst = document.querySelectorAll("#modelId .modal-body tbody tr");
    for (let node of rowNodeLst) {
      if (node.childNodes[0].innerHTML == product.maSP) {
        node.style.display = "none";
      }
    }
  }

  // Close Button => Unhide tr Node bên trên
  unHideDOM = () => {
    const rowNodeLst = document.querySelectorAll("#modelId .modal-body tbody tr");
    for (let node of rowNodeLst) {
      node.style.display = "table-row";
    }
  }

  renderModal = () => {
    const { listProduct } = this.props;
    return listProduct.map(product => (
      <tr key={product.maSP}>
        <td>{product.maSP}</td>
        <td>{product.tenSP}</td>
        <td>
          <img src={product.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button
            onClick={() => this.decreaseProductCb(product)}
          >-</button>
          {product.inCart}
          <button
            onClick={() => this.addProductCb(product)}
          >+</button>
        </td>
        <td>{product.giaBan.toLocaleString()}</td>
        <td>{(product.giaBan * product.inCart).toLocaleString()}</td>
        <td>
          <button className="btn btn-danger" onClick={() => this.deleteProductCb(product)}>Delete</button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: "1000px" }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>
                  {this.renderModal()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={this.unHideDOM}
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
