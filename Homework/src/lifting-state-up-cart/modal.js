import React from "react";


const Modal = ({ listCart, deleteInCart, adjustQuantityInCart}) => {
  const renderModal = () => {
    return listCart
      .filter(product => product.quantity !== 0)
      .map(product => (
        <tr key={product.maSP}>
          <td>{product.maSP}</td>
          <td>{product.tenSP}</td>
          <td>
            <img src={product.hinhAnh} width={50} alt="" />
          </td>
          <td>
            <button onClick={adjustQuantityInCart.bind(this, product, false)} disabled={product.quantity===1}>-</button>
              {product.quantity}
            <button onClick={adjustQuantityInCart.bind(this, product, true)}>+</button>
          </td>
          <td>{product.giaBan}</td>
          <td>{product.giaBan * product.quantity}</td>
          <td>
            <button className="btn btn-danger" onClick={deleteInCart.bind(this, product)}>Delete</button>
          </td>
        </tr>
      ))
  }

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
                {renderModal()}
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

export default Modal;
