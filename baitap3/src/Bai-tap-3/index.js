import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import Promotion from './Promotion'
import ItemList from './ItemList'

export class Baitap3 extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <ItemList itemType="phone"/>
        <ItemList itemType="laptop"/>
        <Promotion />
      </div>
    );
  }
}

export default Baitap3
