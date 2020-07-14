import React, { Component } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";


export default class LiftingStateUpCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: data,
      detailProduct: data[0],
      listCart: []
    }
  }

  handleProduct = (product) => {
    this.setState({
      detailProduct: product
    })
  }

  // handle Add new product to Cart + increase Cart if product already exist
  handleAddCart = (product) => {
    let listCart = [...this.state.listCart];

    let index = listCart.findIndex(item => item.maSP === product.maSP);
    if (index === -1) {
      product.inCart = 1;
      listCart.push(product);
    } else {
      listCart[index].inCart += 1;
    }

    this.setState({ listCart });
    // !! setState asynchronous => cannot use console.log(this.state.listCart) to view
      // () => console.log('New updated listCart: \n', this.state.listCart));
  }

  handleDecreaseCart = (product) => {
    let listCart = [...this.state.listCart];
    let index = listCart.findIndex(item => item.maSP === product.maSP);
    listCart[index].inCart -= 1;
    this.setState({ listCart });
  }

  handleDeleteCart = (product) => {
    let listCart = [...this.state.listCart];
    listCart = listCart.filter(item => item.maSP !== product.maSP)
    this.setState({ listCart });
  }

  totalInCartCount = () => {
    const { listCart } = this.state;
    console.log(listCart);
    return listCart.reduce((total, { inCart }) => total + inCart, 0);
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
            Giỏ hàng ({this.totalInCartCount()})
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
        <Modal 
          listCart={listCart} 
          handleAddCart={this.handleAddCart}
          handleDecreaseCart={this.handleDecreaseCart}
          handleDeleteCart={this.handleDeleteCart}
        />

        {/* Product Detail Render */}
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
