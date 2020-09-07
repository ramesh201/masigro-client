import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Pagination, Collapse, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

class Product extends Component {
  state = { productId: 99,
     isAvailable: false,
     selectedProduct: {},
     prodInfoOpen: false
    };
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
                onClick={() => {
                  this.prodDescription(this.props.productItem);
                }}
                aria-controls="example-collapse-text"
                aria-expanded={this.state.prodInfoOpen}
                style={{margin:"0px 0px 0px 10px"}}
              >
                More Info &raquo;
              </Button>
            </div>
          </div>

          <Collapse in={this.state.prodInfoOpen}>
          <div id="example-collapse-text">
          <br />
            <Container>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  {this.props.productItem.name}
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={this.props.productItem.imgUrl} />
                </Col>
              </Row>
              <Row>
                <Col>Description</Col>
                <Col>{this.props.productItem.Description}</Col>
              </Row>
              <Row>
                <Col>RAM</Col>
                <Col>{this.props.productItem.RAMDetails}</Col>
              </Row>
              <Row>
                <Col>CPU</Col>
                <Col>{this.props.productItem.CPUDetails}</Col>
              </Row>
              <Row>
                <Col>Storage</Col>
                <Col>{this.props.productItem.Storage}</Col>
              </Row>
              <Row>
                <Col>Display</Col>
                <Col>{this.props.productItem.Display}</Col>
              </Row>
              <Row>
                <Col>Price</Col>
                <Col>{this.props.productItem.price}</Col>
              </Row>
            </Container>
          </div>
        </Collapse>
        
        </div>

      
      </React.Fragment>
    );
  }

  prodDescription = (obj) => {
    this.setState({ selectedProduct: obj });
    this.setState({ prodInfoOpen: !this.state.prodInfoOpen });
    alert(JSON.stringify(obj));
    return this.state.iPadInfoOpen;
  };

}

export default Product;
