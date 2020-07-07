import React, { Component } from 'react'
import Header from './Header'
import Carousel from './Carousel'
import PhoneList from './PhoneList'
import LaptopList from './LaptopList'
import Promotion from './Promotion'

export class Baitap3 extends Component {
  render() {
    return (
      <div className="bg-dark">
        <Header />
        <Carousel />
        <PhoneList />
        <LaptopList />
        <Promotion />
      </div>
    );
  }
}

export default Baitap3
