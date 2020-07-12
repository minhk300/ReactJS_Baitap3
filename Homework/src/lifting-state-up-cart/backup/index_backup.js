import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";


export default class LiftingStateUpCart extends Component {
  // (1)
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      // state dynamic add
      detailProduct: data[0],
      // state dynamic - array type
      listCart: []
    }
  }

  handleProduct = (product) => {
    this.setState({
      detailProduct: product
    })
  }
  handleAddCart = (product) => {
    // console.log(product);
    // !! setState asynchronous => cannot use console.log(this.state.listCart) to view
    this.setState({ listCart: [...this.state.listCart, product] }, 
      () => console.log(this.state.listCart));
  }
  render() {
    const { listProduct, detailProduct, listCart } = this.state;
    return (
      <div>
        <h3 className="title">Bài tập giỏ hàng</h3>
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (0)
          </button>
        </div>

        {/* !!! */}
        <DanhSachSanPham 
          listProduct={listProduct} 
          handleProduct={this.handleProduct}
          addCart={this.handleAddCart}
          />

        {/*  */}
        {/*  */}
        <Modal listCart={listCart}/>
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={detailProduct.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{detailProduct.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{detailProduct.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{detailProduct.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{detailProduct.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{detailProduct.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{detailProduct.rom}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
