import React, { Component } from 'react'
import Laptop from './Laptop'

export class LaptopList extends Component {
  render() {
    return (
      <section
        id="laptop"
        className="container-fluid pt-5 pb-5 bg-light text-dark"
      >
        <h1 className="text-center">BEST LAPTOP</h1>
        <div className="row">
          <Laptop />
          <Laptop />
          <Laptop />
          <Laptop />
        </div>
      </section>
    );
  }
}

export default LaptopList
