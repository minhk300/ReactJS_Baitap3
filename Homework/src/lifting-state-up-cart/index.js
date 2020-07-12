import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data.map(product => ({...product, "inCart": 0})),
      productDetail: data[0],
      listProductAdded: []
    }
  }
  // cập nhật Hiển thị sản phẩm
  handleProductDetail = (product) => {
    this.setState({productDetail: product})
  }
  // thêm sản phẩm đã chọn vào danh sách listProductAdded
  addProduct = (product) => {
    this.setState({
      listProductAdded: [...this.state.listProductAdded, product]
    }, () => {
      console.log(this.state.listProductAdded);
      console.log('Da add product vao list')
    })
  }

  render() {
    const { listProduct, productDetail, listProductAdded } = this.state;
    return (
      <div>
        {/* Tiêu đề */}
        <h3 className="title text-center text-uppercase">Bài tập giỏ hàng</h3>

        {/* Giỏ hàng button + Modal pop-up */}
        <div className="container">
          <button
            className="btn btn-danger"
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({listProductAdded.length})
          </button>
        </div>
        <Modal listProductAdded={listProductAdded}/>

        {/* Danh sách sản phẩm */}
        <DanhSachSanPham 
          handleProductDetail={this.handleProductDetail} 
          addProduct={this.addProduct}
          listProduct={listProduct}
          />



        {/* Hiển thị sản phẩm */}
        <div className="row">
          <div className="col-sm-5">
            <img className="img-fluid" src={productDetail.hinhAnh} alt="" />
          </div>
          <div className="col-sm-7">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tbody>
                <tr>
                  <td>Màn hình</td>
                  <td>{productDetail.manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{productDetail.heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{productDetail.cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{productDetail.cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{productDetail.ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{productDetail.rom}</td>
                </tr>
                <tr>
                  <td>Giá bán</td>
                  <td>{productDetail.giaBan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
