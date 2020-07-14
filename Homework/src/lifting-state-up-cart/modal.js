import React, { Component } from "react";

export default class Modal extends Component {
  increaseInCart = (product) => {
    this.props.handleAddCart(product);
  }

  decreaseInCart = (product) => {
    this.props.handleDecreaseCart(product);
  }
  deleteInCart = (product) => {
    this.props.handleDeleteCart(product);
  }
  renderProductRow = () => {
    const {listCart} = this.props;
    return listCart.map(product => (
      <tr key={product.maSP}>
        <td>{product.maSP}</td>
        <td>{product.tenSP}</td>
        <td>
          <img src={product.hinhAnh} width={50} alt="" />
        </td>
        <td>
          <button
            onClick={()=>this.decreaseInCart(product)}
            disabled={product.inCart === 1}
          >-</button>
            {product.inCart}
          <button
            onClick={()=> this.increaseInCart(product)}
          >+</button>
        </td>
        <td>{product.giaBan}</td>
        <td>{product.giaBan * product.inCart}</td>
        <td>
          <button 
            className="btn btn-danger"
            onClick={()=> this.deleteInCart(product)}
          >
            Delete
          </button>
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
                  {this.renderProductRow()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
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
