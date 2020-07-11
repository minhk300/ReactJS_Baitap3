import React, { Component } from 'react'
import data from "./data.json";
// import MovieList from './MovieList';


export default class BaitapList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMovie: data
    }
  }
  renderList = () => {
    const listMovie = this.state.listMovie;
    return listMovie.map((movie) => (
      <div className="card col-4" key={movie.maPhim}>
        <a href={movie.trailer}>
          <img className="card-img-top img-fluid" src={movie.hinhAnh} alt="Card cap" />
          <div className="card-body">
            <h5 className="card-title">{movie.tenPhim}</h5>
            <p className="card-text">
              {movie.moTa}
            </p>
          </div>
        </a>
      </div>
    ));
  }
  render() {
    return (
      <div>
        <h3 style={{color: "red", textAlign: "center"}}>Danh sách phim</h3>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    )
  }
}
