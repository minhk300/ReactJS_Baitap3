import React, { useState, useRef, useEffect } from "react";
import DanhSachSanPham from "./danh-sach-san-pham";
import Modal from "./modal";
import data from "./data.json";

const LiftingStateUpCart = () => {
  const [listProduct] = useState(()=> data);
  const [detailProduct, setdetailProduct] = useState(listProduct[0]);
  const [listCart, setlistCart] = useState(()=> []);

  // display detail Product when clicked on "Chi tiet"
  const handleDetailProduct = product => setdetailProduct(product);

  // Add product to Cart when clicked on "THem gio hang"
  const addToCart = (product) => {
    let newListCart = [...listCart];
    let index = newListCart.findIndex(item => item.maSP === product.maSP);
    if (index === -1) {
      newListCart.push({...product, quantity: 1});
    } else {
      newListCart[index].quantity++;
    }
    setlistCart(newListCart);
  }

  const deleteInCart = (product) => {
    let newListCart = [...listCart];
    let index = newListCart.findIndex(item => item.maSP === product.maSP);
    if (index !== -1) {
      newListCart.splice(index, 1);
    }
    setlistCart(newListCart);
  }

  const adjustQuantityInCart = (product, status) => {
    let newListCart = [...listCart];
    let index = newListCart.findIndex(item => item.maSP === product.maSP);
    if (index !== -1) {
      newListCart[index].quantity += status ? 1 : -1;
    }
    setlistCart(newListCart);
  }
  /**
   * useEffect to check new updated State
   */
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!isFirstRender.current) {
      console.log(listCart) // do something after state has updated
    }
  }, [listCart])

  useEffect(() => {
    isFirstRender.current = false // toggle flag after first render/mounting
  }, [])

  const cartCalc = () => listCart.reduce((total, {quantity}) => total + quantity, 0);

  return (
    <div>
      <h3 className="title">Bài tập giỏ hàng</h3>
      <div className="container">
        <button
          className="btn btn-danger"
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng ({cartCalc()})
          </button>
      </div>
      <DanhSachSanPham 
        listProduct={listProduct}
        handleDetailProduct={handleDetailProduct}
        addToCart={addToCart}
      />
      <Modal 
        listCart={listCart}
        deleteInCart={deleteInCart}
        adjustQuantityInCart={adjustQuantityInCart}
      />

      {/* detailProduct here */}
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

export default LiftingStateUpCart;