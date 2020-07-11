import React, { Component } from "react";
import Item from "./Item";

export class ItemList extends Component {
  render() {
    // Array defines all details about each type of product
    const itemDetails = [
      {
        title: "BEST SMARTPHONE",
        name: "iPhone X",
        desc:
          "iPhone X features a new all-screen design. Face ID, which makes your face your password",
        imgSrc: "/assets/img/sp_iphoneX.png",
      },
      {
        title: "BEST LAPTOP",
        name: "MACBOOK",
        desc:
          "The MacBook is a brand of notebook computers manufactured by Apple Inc",
        imgSrc: "/assets/img/lt_macbook.png",
      },
    ];

    // idx = 0 => phone, idx = 1 => laptop
    const idx = this.props.itemType === "phone" ? 0 : 1;
    return (
      <section className="container-fluid pt-5 pb-5">
        <h1 className="text-white text-center">{itemDetails[idx].title}</h1>
        <div className="row">
          <Item details={itemDetails[idx]} />
          <Item details={itemDetails[idx]} />
          <Item details={itemDetails[idx]} />
          <Item details={itemDetails[idx]} />
        </div>
      </section>
    );
  }
}

export default ItemList;
