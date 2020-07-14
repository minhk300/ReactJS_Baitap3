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
      // listProductAdded: [], => not use
    }
  }
  // cập nhật Hiển thị sản phẩm khi chọn Chi tiết
  handleProductDetail = (product) => {
    this.setState({productDetail: product})
  }
  
  // tính tổng số product trong Giỏ hàng
  inCartCal = () => {
    const { listProduct } = this.state;
    return listProduct.reduce((acc, {inCart}) => acc + inCart, 0);
  }

  // tăng số sp trong Giỏ 
  addProduct = (product) => {
    this.setState({
      listProduct: this.state.listProduct.map(item => {
        if (item.maSP === product.maSP) {
          item.inCart += 1;
        }
        return item;
      })
    })
  }

  // Giảm số sp trong Giỏ 
  decreaseProduct = (product) => {
    this.setState({
      listProduct: this.state.listProduct.map(item => {
        if (item.maSP === product.maSP) {
          // negative value not allowed => no need anymore
          item.inCart -= 1;
        }
        return item;
      })
    })
  }

  // Nhấn Delete trong Modal => reset số sp trong Giỏ về 0
  deleteProduct = (product) => {
    this.setState({
      listProduct: this.state.listProduct.map(item => {
        if (item.maSP === product.maSP) {
          item.inCart = 0;
        }
      return item;
      })
    })
  }
  
  render() {
    const { listProduct, productDetail } = this.state;
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
            Giỏ hàng ({this.inCartCal()})
          </button>
        </div>
        <Modal 
          listProduct={listProduct}
          addProduct={this.addProduct}
          decreaseProduct={this.decreaseProduct}
          deleteProduct={this.deleteProduct}
        />

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
