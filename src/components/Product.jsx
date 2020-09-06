import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Pagination, Collapse } from "react-bootstrap";

class Product extends Component {
  state = { productId: 99, isAvailable: false };
  render() {
    return (
      <React.Fragment>
        <div style={{ overflowX: "scroll", margin: "1px 2px 10px 1px" }}>
          <div className="card" style={{ width: "28rem" }}>
            <img
              className="card-img-top"
              src={this.props.productItem.imgUrl}
              alt="Card image cap"
              style={{ width: "auto", height: 350 }}
            />
            <div className="card-body">
              <h5 className="card-title">{this.props.productItem.name}</h5>
              <p className="card-text">
                <span style={{ fontSize: 15 }}>{this.props.imgUrl}</span>
                <br />
                <span
                  style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                >
                  {this.props.productItem.price}
                </span>
              </p>

              <a href="#" className="btn btn-success">
                Add Cart &raquo;
              </a>

              <Button
                onClick={this.go11}
                aria-controls="example-collapse-text"
                aria-expanded={this.state.open}
              >
                More Info &raquo;
              </Button>
            </div>
          </div>
        </div>

        <Collapse in={this.state.open}>
          <div id="example-collapse-text">
            product details panel here
            <img src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"></img>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Product;
