import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyFile from "../rates";
import home from "../home";
//import { addTodo } from "redux/actions";
import { API_BACKEND_ENDPOINT_SERVER } from "../constants/Config";

import {
  Button,
  Pagination,
  Collapse,
  Modal,
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUserPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faCoffee2 } from "@fortawesome/fontawesome-svg-core";
import axios from "axios";
import nav from "./navBar";
import Login from "../home";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItemCountBtn: 0,
      open: false,
      macBookInfoOpen: false,
      iPhoneInfoOpen: false,
      iPadInfoOpen: false,
      modalShow: false,
      allProducts: [],
      selectedProduct: {},
      allOrders: [],
      value: localStorage.getItem("myToken"),
      selectedItemCount: 1,
      API_URL: "https://api.exchangeratesapi.io/latest",
      currencyList: [],
      currencyCode: "LKR",
      currencyCodePrice: "",
      currencyRateList: [],
      updatedCurrencyPrice: "0.00",
      showConfModal: false,
      itemCount: 0,
      showAuthConfModal: false
    };
  }

  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>
          <div>
            <div style={{ float: "left" }}></div>
            <div style={{ float: "right" }}>
              <Container>
                <Row>
                  <Col xs={4} md={4}>
                    <div>
                      <span
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: 8,
                          backgroundColor: "green",
                          color: "white",
                          fontSize: "15px",
                          padding: "2px",
                        }}
                      >
                        {this.state.itemCount < 10 ? "0"+this.state.itemCount : this.state.itemCount}
                      </span>
                      <Link
                        onClick={() => {
                          this.singleClick();
                        }}
                        style={{ margin: "0px 1px 0px 1px" }}
                      >
                        <FontAwesomeIcon icon={faShoppingCart} /> Orders
                      </Link>
                    </div>
                  </Col>
                  <Col xs={10} md={5}>
                    <DropdownButton
                      alignRight
                      title="Select Products"
                      id="dropdown-menu-align-right"
                    >
                      <Dropdown.Header>Categories</Dropdown.Header>
                      <Dropdown.Item eventKey="2">
                        <Link to="/Products/macbook">MacBooks</Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="3">
                        <Link to="/Products/iphone">iPhones</Link>
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="4">
                        <Link to="/Products/ipad">iPads</Link>
                      </Dropdown.Item>
                      <Dropdown.Header>All Products</Dropdown.Header>
                      <Dropdown.Item eventKey="5">
                        <Link to="/Products">All Products</Link>
                      </Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs={4} md={2}>
                    <DropdownButton
                      title={this.state.currencyCode}
                      id="dropdown-menu-align-right"
                      style={{ width: 50, height: 30, fontSize: 10 }}
                      size="sm"
                      fontSize="4"
                    >
                      <Dropdown.Item
                        key="LKR"
                        eventKey="LKR"
                        onClick={() => {
                          this.changeCurrency("LKR", "productItem.price");
                        }}
                      >
                        LKR
                      </Dropdown.Item>
                      {this.state.currencyList.map((aCurrency) => (
                        <Dropdown.Item
                          eventKey={aCurrency}
                          key={aCurrency}
                          onClick={() => {
                            this.changeCurrency(aCurrency, "productItem.price");
                          }}
                        >
                          {aCurrency}
                        </Dropdown.Item>
                      ))}
                    </DropdownButton>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <br />
          <br />
          <h1 style={{ backgroundColor: "silver" }}>
            <a onClick={this.navMacBooks}>Apple - MacBooks</a>
          </h1>

          <div className="container" style={{ marginTop: "20px" }}>
            <div className="row">
              {this.state.allProducts
                .filter((objss) => objss.categoryName == "macbook")
                .map((productItem) => (
                  <div className="col" key={productItem.id}>
                    <div className="card" style={{ width: "21rem" }}>
                      <img
                        className="card-img-top"
                        src={productItem.imgUrl}
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{productItem.name}</h5>
                        <div className="card-text">
                          <span style={{ fontSize: 15 }}>
                            {productItem.Description.substring(0, 30) + "..."}
                          </span>
                          <br />
                          <div
                            style={{
                              color: "blue",
                              fontSize: 14,
                              fontWeight: "bold",
                            }}
                          >
                            <div style={{ float: "left" }}>
                              <DropdownButton
                                title={this.state.currencyCode}
                                id="dropdown-menu-align-right"
                                style={{ width: 50, height: 30, fontSize: 10 }}
                                size="sm"
                                fontSize="4"
                              >
                                <Dropdown.Item
                                  key="LKR"
                                  eventKey="LKR"
                                  onClick={() => {
                                    this.changeCurrency(
                                      "LKR",
                                      productItem.price
                                    );
                                  }}
                                >
                                  LKR
                                </Dropdown.Item>
                                {this.state.currencyList.map((aCurrency) => (
                                  <Dropdown.Item
                                    eventKey={aCurrency}
                                    key={aCurrency}
                                    onClick={() => {
                                      this.changeCurrency(
                                        aCurrency,
                                        productItem.price
                                      );
                                    }}
                                  >
                                    {aCurrency}
                                  </Dropdown.Item>
                                ))}
                              </DropdownButton>
                            </div>
                            <div
                              style={{
                                float: "left",
                                margin: "5px 0px 0px 15px",
                              }}
                            >
                              {this.showUpdatedPrice(
                                this.state.currencyCode,
                                productItem.price
                              )}
                            </div>
                          </div>
                        </div>
                        <br /> <br />
                        <Button
                          variant="primary"
                          className="btn btn-success"
                          onClick={() => {
                            this.handleShow(productItem);
                          }}
                        >
                          Add Cart
                        </Button>
                        <Button
                          style={{ margin: "0px 0px 0px 20px" }}
                          onClick={() => {
                            this.macBookDescription(productItem);
                          }}
                          aria-controls="example-collapse-text"
                          aria-expanded={this.state.macBookInfoOpen}
                        >
                          More Info &raquo;
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <Collapse in={this.state.macBookInfoOpen}>
            <div id="example-collapse-text">
              <br />
              <Container>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    {this.state.selectedProduct.name}
                  </Col>
                </Row>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <img src={this.state.selectedProduct.imgUrl} />
                  </Col>
                </Row>
                <Row>
                  <Col>Description</Col>
                  <Col>{this.state.selectedProduct.Description}</Col>
                </Row>
                <Row>
                  <Col>RAM</Col>
                  <Col>{this.state.selectedProduct.RAMDetails}</Col>
                </Row>
                <Row>
                  <Col>CPU</Col>
                  <Col>{this.state.selectedProduct.CPUDetails}</Col>
                </Row>
                <Row>
                  <Col>Storage</Col>
                  <Col>{this.state.selectedProduct.Storage}</Col>
                </Row>
                <Row>
                  <Col>Display</Col>
                  <Col>{this.state.selectedProduct.Display}</Col>
                </Row>
                <Row>
                  <Col>Price</Col>
                  <Col>{this.state.selectedProduct.price}</Col>
                </Row>
              </Container>
            </div>
          </Collapse>
        </div>

        <h1 style={{ backgroundColor: "silver" }}>
          <a
            onClick={() => {
              this.navProducts("iPhone");
            }}
          >
            Apple - iPhones
          </a>
        </h1>

        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {this.state.allProducts
              .filter((objss) => objss.categoryName == "iphone")
              .map((productItem) => (
                <div className="col" key={productItem.id}>
                  <div className="card" style={{ width: "21rem" }}>
                    <img
                      className="card-img-top"
                      src={productItem.imgUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{productItem.name}</h5>
                      <div className="card-text">
                        <span style={{ fontSize: 15 }}>
                          {productItem.Description.substring(0, 30) + "..."}
                        </span>
                        <br />
                        <div
                          style={{
                            color: "blue",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          <div style={{ float: "left" }}>
                            <DropdownButton
                              title={this.state.currencyCode}
                              id="dropdown-menu-align-right"
                              style={{ width: 50, height: 30, fontSize: 10 }}
                              size="sm"
                              fontSize="4"
                            >
                              <Dropdown.Item
                                eventKey="LKR"
                                key="LKR"
                                onClick={() => {
                                  this.changeCurrency("LKR", productItem.price);
                                }}
                              >
                                LKR
                              </Dropdown.Item>
                              {this.state.currencyList.map((aCurrency) => (
                                <Dropdown.Item
                                  key={aCurrency}
                                  eventKey={aCurrency}
                                  onClick={() => {
                                    this.changeCurrency(
                                      aCurrency,
                                      productItem.price
                                    );
                                  }}
                                >
                                  {aCurrency}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                          </div>
                          <div
                            style={{
                              float: "left",
                              margin: "5px 0px 0px 15px",
                            }}
                          >
                            {productItem.price}
                          </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <Button
                        variant="primary"
                        className="btn btn-success"
                        onClick={() => {
                          this.handleShow(productItem);
                        }}
                      >
                        Add Cart
                      </Button>
                      <Button
                        style={{ margin: "0px 0px 0px 20px" }}
                        onClick={() => {
                          this.iPhoneDescription(productItem);
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.iPhoneInfoOpen}
                      >
                        More Info &raquo;
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Collapse in={this.state.iPhoneInfoOpen}>
          <div id="example-collapse-text">
            <br />
            <Container>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  {this.state.selectedProduct.name}
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={this.state.selectedProduct.imgUrl} />
                </Col>
              </Row>
              <Row>
                <Col>Description</Col>
                <Col>{this.state.selectedProduct.Description}</Col>
              </Row>
              <Row>
                <Col>RAM</Col>
                <Col>{this.state.selectedProduct.RAMDetails}</Col>
              </Row>
              <Row>
                <Col>CPU</Col>
                <Col>{this.state.selectedProduct.CPUDetails}</Col>
              </Row>
              <Row>
                <Col>Storage</Col>
                <Col>{this.state.selectedProduct.Storage}</Col>
              </Row>
              <Row>
                <Col>Display</Col>
                <Col>{this.state.selectedProduct.Display}</Col>
              </Row>
              <Row>
                <Col>Price</Col>
                <Col>{this.state.selectedProduct.price}</Col>
              </Row>
            </Container>
          </div>
        </Collapse>

        <h1 style={{ backgroundColor: "silver" }}>
          <a
            onClick={() => {
              this.navProducts("iPad");
            }}
          >
            Apple - iPads
          </a>
        </h1>

        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {this.state.allProducts
              .filter((objss) => objss.categoryName == "ipad")
              .map((productItem) => (
                <div className="col" key={productItem.id}>
                  <div className="card" style={{ width: "21rem" }}>
                    <img
                      className="card-img-top"
                      src={productItem.imgUrl}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{productItem.name}</h5>
                      <div className="card-text">
                        <span style={{ fontSize: 15 }}>
                          {productItem.Description.substring(0, 30) + "..."}
                        </span>
                        <br />
                        <div
                          style={{
                            color: "blue",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          <div style={{ float: "left" }}>
                            <DropdownButton
                              title={this.state.currencyCode}
                              id="dropdown-menu-align-right"
                              style={{ width: 50, height: 30, fontSize: 10 }}
                              size="sm"
                              fontSize="4"
                            >
                              <Dropdown.Item
                                eventKey="LKR"
                                key="LKR"
                                onClick={() => {
                                  this.changeCurrency("LKR", productItem.price);
                                }}
                              >
                                LKR
                              </Dropdown.Item>
                              {this.state.currencyList.map((aCurrency) => (
                                <Dropdown.Item
                                  key={aCurrency}
                                  eventKey={aCurrency}
                                  onClick={() => {
                                    this.changeCurrency(
                                      aCurrency,
                                      productItem.price
                                    );
                                  }}
                                >
                                  {aCurrency}
                                </Dropdown.Item>
                              ))}
                            </DropdownButton>
                          </div>
                          <div
                            style={{
                              float: "left",
                              margin: "5px 0px 0px 15px",
                            }}
                          >
                            {productItem.price}
                          </div>
                        </div>
                        <br />
                      </div>
                      <br />
                      <Button
                        variant="primary"
                        className="btn btn-success"
                        onClick={() => {
                          this.handleShow(productItem);
                        }}
                      >
                        Add Cart
                      </Button>
                      <Button
                        style={{ margin: "0px 0px 0px 20px" }}
                        onClick={() => {
                          this.iPadDescription(productItem);
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={this.state.iPadInfoOpen}
                      >
                        More Info &raquo;
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <Collapse in={this.state.iPadInfoOpen}>
          <div id="example-collapse-text">
            <br />
            <Container>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  {this.state.selectedProduct.name}
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <img src={this.state.selectedProduct.imgUrl} />
                </Col>
              </Row>
              <Row>
                <Col>Description</Col>
                <Col>{this.state.selectedProduct.Description}</Col>
              </Row>
              <Row>
                <Col>RAM</Col>
                <Col>{this.state.selectedProduct.RAMDetails}</Col>
              </Row>
              <Row>
                <Col>CPU</Col>
                <Col>{this.state.selectedProduct.CPUDetails}</Col>
              </Row>
              <Row>
                <Col>Storage</Col>
                <Col>{this.state.selectedProduct.Storage}</Col>
              </Row>
              <Row>
                <Col>Display</Col>
                <Col>{this.state.selectedProduct.Display}</Col>
              </Row>
              <Row>
                <Col>Price</Col>
                <Col>{this.state.selectedProduct.price}</Col>
              </Row>
            </Container>
          </div>
        </Collapse>

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row key={1}>
                <Col xs={12} md={8}>
                  <img
                    src={this.state.selectedProduct.imgUrl}
                    style={{ width: 50, height: 50 }}
                  />{" "}
                  {this.state.selectedProduct.name}
                </Col>
                <Col xs={6} md={4}>
                  <div>
                    <div style={{ float: "left" }}>
                      <Button
                        onClick={() => {
                          this.changeItemCount(1);
                        }}
                      >
                        +
                      </Button>
                    </div>
                    <div style={{ float: "left" }}>
                      <input
                        id="selectedProductItemId"
                        type="text"
                        style={{ width: 40, height: 40 }}
                        value={this.state.selectedItemCount}
                      />
                    </div>
                    <div style={{ float: "left" }}>
                      <Button
                        onClick={() => {
                          this.changeItemCount(-1);
                        }}
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.OrderItemSaving}>
              Add Item
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showConfModal}
          onHide={this.closeConfModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Confirm Action</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      this.clikcOnShowPopup();
                    }}
                  >
                    Open in popup
                  </Button>
                </Col>
                <Col>
                  <Button>
                    <Link
                      to="/orders"
                      style={{ margin: "0px 1px 0px 1px", color: "white" }}
                      onClick={() => {
                        this.clickOnShowOrderPage();
                      }}
                    >
                      Go to page
                    </Link>
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>

        <Modal show={this.state.showModal} onHide={this.closeModal} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Checkout Order</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {this.state.allOrders
                .filter((x) => x.customerToken == home.getCookie("myToken3"))
                .map((orderItem) =>
                  orderItem.orderArr.map((aOrder) => (
                    <Row key={orderItem.id + "-" + aOrder.productId}>
                      <Col xs={7} md={4}>
                        {aOrder.productName}
                      </Col>
                      <Col xs={2} md={2}>
                        {aOrder.price}
                      </Col>
                      <Col xs={4} md={3}>
                        <div>
                          <div style={{ float: "left" }}>
                            <Button
                              style={{ height: 30, width: 30 }}
                              onClick={() => {
                                this.changeItemCount(this.aOrder);
                              }}
                            >
                              +
                            </Button>
                          </div>
                          <div style={{ float: "left" }}>
                            <InputGroup style={{ width: 40, height: 30 }}>
                              <InputGroup.Prepend></InputGroup.Prepend>
                              <FormControl
                                style={{
                                  width: 40,
                                  height: 30,
                                  fontSize: "small",
                                }}
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                              />
                            </InputGroup>
                          </div>
                          <div style={{ float: "left" }}>
                            <Button style={{ height: 30, width: 30 }}>-</Button>
                          </div>
                        </div>
                      </Col>
                      <Col xs={4} md={2}>
                        {(aOrder.price * aOrder.qty).toFixed(2)}
                      </Col>
                      <Col xs={1} md={1}>
                        <FontAwesomeIcon
                          key={orderItem.id + "-" + aOrder.productId}
                          icon={faTrash}
                          onClick={() => {
                            this.functionCall(
                              orderItem.id + "-" + aOrder.productId,
                              orderItem.orderArr,
                              aOrder
                            );
                          }}
                        />
                      </Col>
                    </Row>
                  ))
                )}
              <Row>
                <Col style={{ textAlign: "right" }}>
                  {(500000.0).toFixed(2)}
                </Col>
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                this.closeModal();
              }}
            >
              Close
            </Button>
            <Button variant="primary">
              <Link
                to="/OrderComplete"
                style={{ margin: "0px 1px 0px 1px", color: "white" }}
                onClick={() => {
                  this.closeAllCartModal();
                }}
              >
                Checkout
              </Link>
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal
          show={this.state.showAuthConfModal}
          onHide={this.closeAuthConfModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>Email</Row>
              <Row>
                <input
                  id="loginEmailId"
                  type="text"
                  onChange={() => {
                    this.updateLoginForm();
                  }}
                />
              </Row>
              <Row>Password</Row>
              <Row>
                <input
                  id="loginPasswordId"
                  type="password"
                  onChange={() => {
                    this.updateLoginForm();
                  }}
                />
              </Row>
              <Row style={{ margin: "10px 0px 10px 0px" }}>
                <Link
                  onClick={() => {
                    this.clickOnShowSignupModal();
                  }}
                >
                  Create an account &raquo;
                </Link>
              </Row>
              <Row>
                <Col>
                  <Button
                    onClick={() => {
                      this.loginProcess();
                    }}
                  >
                    Login
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.closeAuthConfModal();
                    }}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }

  singleClick = () => {
    console.log("Single clicked");
    if (this.state.itemCount == 0) {
      alert("Cart is empty...");
      this.setState({ showConfModal: false });
    } else {
      this.loadUserOrders();
      this.setState({ showConfModal: true });
    }
    return this.state.showConfModal;
  };

  async currency() {
    const res = await fetch(this.state.API_URL);
    const data = await res.json();
    debugger;
    var importedCurrencyFile = CurrencyFile;
    //alert(JSON.stringify(importedCurrencyFile.currencyRateList.rates));
    //var currencyList2  = {"valid":true,"updated":1599123754,"base":"USD","rates":{"AED":3.67338,"AFN":77.205,"ALL":104.92145,"AMD":487.3145,"ANG":1.79952,"AOA":609.5845,"ARS":74.31842,"AUD":1.36673,"AWG":1.8,"AZN":1.7,"BAM":1.65311,"BBD":2.02415,"BCH":0.003808145623488642,"BDT":85.02536,"BGN":1.65692,"BHD":0.37699,"BIF":1935.43375,"BMD":1,"BND":1.36441,"BOB":6.92251,"BRL":5.34125,"BSD":1.00248,"BTC":0.00008791371093444362,"BTG":0.10638297872340426,"BWP":11.52999,"BZD":2.02079,"CAD":1.30747,"CDF":1950.1,"CHF":0.9112,"CLP":770.93,"CNH":6.83562,"CNY":6.8347,"COP":3658.2,"CRC":597.81049,"CUC":1,"CUP":1.00243,"CVE":93.20236,"CZK":22.21031,"DASH":0.01220703125,"DJF":178.47183,"DKK":6.2876,"DOP":58.52678,"DZD":127.8793,"EGP":15.79209,"EOS":0.3286230693394676,"ETB":36.78297,"ETH":0.0022858187802870986,"EUR":0.84505,"FJD":2.09305,"GBP":0.75096,"GEL":3.09,"GHS":5.79475,"GIP":0.75096,"GMD":51.805,"GNF":9690.8185,"GTQ":7.75,"GYD":209.53328,"HKD":7.7499,"HNL":24.71706,"HRK":6.37042,"HTG":112.48243,"HUF":302.24,"IDR":14827.5915,"ILS":3.364,"INR":73.39347,"IQD":1196.83285,"IRR":42107.1,"ISK":139.017,"JMD":148.47363,"JOD":0.70905,"JPY":106.24,"KES":108.305,"KGS":78.26852,"KHR":4115.9238,"KMF":412.9705,"KRW":1188.9395,"KWD":0.30577,"KYD":0.83541,"KZT":420.15641,"LAK":9125.11025,"LBP":1515.796,"LKR":185.66949,"LRD":199.31,"LSL":17.351,"LTC":0.0173235166738848,"LYD":1.36609,"MAD":9.21959,"MDL":16.64211,"MKD":52.13323,"MMK":1326.82735,"MOP":8.00275,"MUR":39.74464,"MVR":15.411,"MWK":750.40782,"MXN":21.6858,"MYR":4.14371,"MZN":71.6935,"NAD":17.351,"NGN":387.3095,"NIO":34.97272,"NOK":8.8768,"NPR":117.37557,"NZD":1.48068,"OMR":0.38452,"PAB":1.00252,"PEN":3.53709,"PGK":3.53995,"PHP":48.58745,"PKR":165.9139,"PLN":3.7329,"PYG":6992.0626,"QAR":3.6412,"RON":4.09401,"RSD":99.335,"RUB":75.2474,"RWF":969.80459,"SAR":3.75109,"SBD":8.26598,"SCR":17.89026,"SDG":55.305,"SEK":8.7321,"SGD":1.36309,"SLL":9762.99,"SOS":582.53,"SRD":7.45835,"SVC":8.77164,"SZL":16.83848,"THB":31.3515,"TJS":10.34418,"TMT":3.51,"TND":2.72764,"TOP":2.26286,"TRY":7.4264,"TTD":6.79443,"TWD":29.35277,"TZS":2320.1,"UAH":27.73733,"UGX":3694.4287,"USD":1,"UYU":42.71511,"UZS":10293.9845,"VND":23175.66,"XAF":554.41302,"XAG":0.03669455452810803,"XAU":0.0005164168930294048,"XCD":2.70269,"XLM":11.074197120708748,"XOF":554.40832,"XRP":3.6663611365719526,"YER":250.3625,"ZAR":16.732,"ZMW":19.69952}}

    //alert(currencyList.rates);
    //const res2 = await axios.get("https://currencyapi.net/api/v1/rates?key=27mBqR5raACZLGP1wNi1YOmoemOWg4GjLTKr");
    /*var res3 = 
    fetch("ttps://currencyapi.net/api/v1/rates?key=27mBqR5raACZLGP1wNi1YOmoemOWg4GjLTKr")
      .then(res => res.json())
      .then(
        (result) => {
          alert(result.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          alert("error");
        }
      )*/

    //getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open("GET", this.state.API_URL);
    debugger;
    // send the request
    xhr.send();
    debugger;
    //}

    //alert(JSON.stringify(data.rates));
    this.setState({
      currencyRateList: importedCurrencyFile.currencyRateList.rates,
    });
    this.setState({
      currencyList: Object.keys(importedCurrencyFile.currencyRateList.rates),
    });
    return this.state.currencyList;
  }

  changeCurrency = (currencyParam, priceParam) => {
    debugger;
    //alert(currencyParam + " - " + priceParam);
    //var currencyFile = CurrencyFile;
    //alert(currencyFile);
    var selectedCurrencyAmount = 0;
    /*for(var i=0 ; i< this.state.currencyRateList.length();i++){
        debugger;
    }
    */
    selectedCurrencyAmount = this.state.currencyRateList[currencyParam];

    this.setState({ currencyCode: currencyParam });
    this.setState({ currencyCodePrice: selectedCurrencyAmount });
    this.setState({
      updatedCurrencyPrice: priceParam * selectedCurrencyAmount,
    });
  };

  showUpdatedPrice = (currencyCode, price) => {
    return (
      /*currencyCode == "LKR" ? price :*/ price *
      this.state.currencyRateList[currencyCode]
    );
  };

  clikcOnShowPopup = () => {
    this.setState({ showConfModal: false });
    this.setState({ showModal: true });
    return this.state.showConfModal;
  };

  clickOnShowOrderPage = () => {
    this.setState({ showConfModal: false });
    //this.setState({showModal: true});
    return this.state.showConfModal;
  };

  closeConfModal = () => {
    this.setState({ showConfModal: false });
    return this.state.showConfModal;
  };

  closeModal = () => {
    this.setState({ showModal: false });
    return this.state.showModal;
  };

  functionCall = (event, fullOrder, selectedOrder) => {
    debugger;
    //alert();
    this.updateCart(event, selectedOrder);
    //console.log(event.target.getAttribute('key'));
  };

  async updateCart(componentKey, selectedOrder) {
    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + home.getCookie("myToken3")
    );
    //alert(JSON.stringify(productsArr));
    let ordersArray = [];
    var dataObj = data["orders"];
    debugger;
    var didPut = false;
    var orderId = componentKey.split("-")[0];
    var existingOrderItems = null;
    data["orders"].map((orderItem) => {
      existingOrderItems = orderItem.orderArr;
    });

    //existingOrderItems = existingOrderItems.splice(existingOrderItems.indexOf(selectedOrder),1);
    existingOrderItems = existingOrderItems.filter(
      (x) => x.productId != selectedOrder.productId
    );

    const res = await axios.put(API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + orderId, {
      orderArr: existingOrderItems,
    });

    this.setState({ showModal: false });
    //document.location.reload(true);
    this.setState({ showModal: true });
    this.loadUserOrders();
    return this.state.showModal;
  }

  go11 = () => {
    //alert();
    debugger;
    this.setState({ open: !this.state.open });
    return this.state.open;
  };

  macBookDescription = (obj) => {
    this.setState({ selectedProduct: obj });
    this.setState({ macBookInfoOpen: !this.state.macBookInfoOpen });
    return this.state.macBookInfoOpen;
  };

  iPhoneDescription = (obj) => {
    this.setState({ selectedProduct: obj });
    this.setState({ iPhoneInfoOpen: !this.state.iPhoneInfoOpen });
    return this.state.iPhoneInfoOpen;
  };

  iPadDescription = (obj) => {
    this.setState({ selectedProduct: obj });
    this.setState({ iPadInfoOpen: !this.state.iPadInfoOpen });
    return this.state.iPadInfoOpen;
  };

  setModalShow = () => {
    //alert();
    debugger;
    this.setState({ open: !this.state.open });
    return this.state.open;
  };

  handleShow = (obj) => {
    //alert();
    debugger;
    if (
      home.getCookie("myToken3") == null ||
      typeof home.getCookie("myToken3") == "undefined"
    ) {
      //alert(nav.props);
      this.setState({ showAuthConfModal: true, modalShow: false });
    } else {
      var didPut = false;
      alert(JSON.stringify(obj));
      this.setState({ modalShow: true });
      this.setState({ selectedProduct: obj });
      if (this.state.allOrders.length == 0) {
        this.setState({ selectedItemCount: 1 });
      } else {
        this.state.allOrders[0].orderArr.map((orderItem) => {
          if (orderItem.productId == obj.id) {
            didPut = true;
            this.setState({ selectedItemCount: orderItem.qty });
          }
        });
      }

      if (!didPut) this.setState({ selectedItemCount: 1 });
    }
    return this.state.modalShow;
    //setShow(true);
  };

  handleClose = () => {
    //alert();
    debugger;
    this.setState({ modalShow: false });
    window.location.reload(true);
    return this.state.modalShow;
  };

  closeAllCartModal = () => {
    this.setState({ showModal: false });
  };

  navMacBooks = () => {
    //this.props.history.push("/Products");
    this.props.history.push("/Products/macbook");
  };

  navProducts = (categoryName) => {
    this.props.history.push("/Products/" + categoryName);
  };

  onChange = (event) => {
    debugger;

    var hours = 24; // Reset when storage is more than 24hours
    var now = new Date().getTime();

    if (localStorage.getItem("myToken") == null) {
      localStorage.setItem("myToken", "80");
      localStorage.setItem("myTokenSetupTime", now);
    } else {
      //localStorage.clear()
      //localStorage.setItem('myTokenSetupTime', now);
      //localStorage.setItem('myToken','40');
      var setupTime = localStorage.getItem("myTokenSetupTime");
      if (setupTime == null) {
        localStorage.setItem("myTokenSetupTime", now);
      } else {
        if (now - setupTime > hours * 60 * 60 * 1000) {
          localStorage.clear();
          localStorage.setItem("myTokenSetupTime", now);
          localStorage.setItem("myToken", "80");
        }
      }
    }

    var currentToken = null; //localStorage.getItem('myToken') == null ? localStorage.setItem('myToken','80') : localStorage.getItem('myToken');
    var tokenSetupTime = null;
    currentToken = localStorage.getItem("myToken");
    tokenSetupTime = localStorage.getItem("myTokenSetupTime");
    alert(currentToken + " - " + tokenSetupTime);
    this.setState({ value: currentToken });
    alert(this.state.value);
    return this.state.value;
  };

  OrderItemSaving = () => {
    //this.setCookie("myToken3", "18802-9802-95873", 1);
    alert("Saving to DB...");
    this.getCustomerOrders(this.state.selectedProduct);
    this.loadUserOrders();
  };

  async getCustomerOrders(selectedProduct) {
    var orderArray = {};
    if (
      home.getCookie("myToken3") == null ||
      typeof home.getCookie("myToken3") == "undefined"
    ) {
      //alert(nav.props);
      this.setState({ showAuthConfModal: true });

      /*var randomToken =
        Math.floor(Math.random() * 100000 + 1).toString() +
        "-" +
        Math.floor(Math.random() * 100000 + 1).toString() +
        "-" +
        Math.floor(Math.random() * 100000 + 1).toString();

      this.setCookie("myToken3", randomToken, 1);

      alert("do POST action for new user token");
      var orderArray = {};

      var newItemToCart = [
        {
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          price: selectedProduct.price,
          qty: this.state.selectedItemCount,
        },
      ];

      orderArray = {
        customerToken: this.getCookie("myToken3"),
        orderDate: new Date().toLocaleString(),
        isCompleted: false,
        orderArr: newItemToCart,
      };
      this.addToCart(orderArray);
      this.setState({ itemCount : this.state.itemCount + 1 });
      */
    } else {
      //alert("hi");
      var { data } = await axios.get(
        API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + home.getCookie("myToken3")
      );
      //alert(JSON.stringify(productsArr));
      let ordersArray = [];
      var dataObj = data["orders"];
      debugger;
      var didPut = false;

      data["orders"].map((orderItem) => {
        orderItem.orderArr.map((anOrder) => {
          if (anOrder.productName == selectedProduct.name) {
            alert("PUT action for order Id: " + orderItem._id);
            anOrder.qty = parseInt(
              document.getElementById("selectedProductItemId").value
            );
            didPut = true;
            this.updateOrder(orderItem, orderItem.orderArr);
          }
        });
      });

      if (!didPut) {
        alert("do POST action for existing user token");
        var newOrderItem = [];
        data["orders"].map((orderItem) => {
          newOrderItem = orderItem;
        });

        var newItemToCart = {
          productId: selectedProduct.id,
          productName: selectedProduct.name,
          price: selectedProduct.price,
          qty: parseInt(document.getElementById("selectedProductItemId").value),
        };
        if (data["orders"].length == 0) {
          newOrderItem.orderArr = newItemToCart;

          orderArray = {
            //id: data["orders"]._id,
            customerToken: home.getCookie("myToken3"),
            orderDate: new Date().toLocaleString(),
            isCompleted: false,
            orderArr: newItemToCart,
          };
          this.addToCart(orderArray);
          //this.setState({ itemCount : this.state.itemCount + 1 });
        } else {
          newOrderItem.orderArr.push(newItemToCart);
          this.updateOrder(newOrderItem, newOrderItem.orderArr);
          this.setState({ itemCount: newOrderItem.orderArr.length });
        }
      }
    }
    /*data["orders"][0].orderArr.map((anOrder) => {
        if(anOrder.productName == selectedProduct.name){
                alert(anOrder.id);
        }
      })*/
    //debugger;
    /*if (data["orders"][0] == null) {
        ordersArray.push({
          id: data["orders"]._id,
          customerToken: data["orders"].customerToken,
          orderDate: data["orders"].orderDate,
          isCompleted: data["orders"].isCompleted,
          orderArr: data["orders"].orderArr,
        });
      } else {
        ordersArray = data["orders"].map((productItem) => {
          return {
            id: productItem._id,
            customerToken: productItem.customerToken,
            orderDate: productItem.orderDate,
            isCompleted: productItem.isCompleted,
            orderArr: productItem.orderArr,
          };
        });
      }*/

    this.setState({ modalShow: false });
    //window.location.reload(true);
  }

  async updateOrder(obj, updateingOrder) {
    const json = JSON.stringify({ updateingOrder });
    //const res = await axios.put("http://localhost:4000/api/orders/" + obj._id,json);
    const res = await axios.put(API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + obj._id, {
      orderArr: updateingOrder,
    });
  }

  addToCart = (obj) => {
    this.addOrder(obj);
  };

  async addOrder(obj) {
    /*try {
        axios
    .post('http://localhost:4000/api/orders', obj, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      }
    })

    } catch (error) {
        alert(error);
    }*/

    try {
      let res = await axios.post(API_BACKEND_ENDPOINT_SERVER + "/api/orders/", obj);
      this.setState({ itemCount: this.state.itemCount + 1 });
    } catch (error) {
      alert("Saving Error...");
    }

    /*
      try {
        await this.$axios.post('http://localhost:4000/api/orders/', obj)
        //this.$emit('formSent')
      } catch (err) {
          alert("exception");
        //this.errors.push('form_error')
      }
*/
  }

  addToCart2 = () => {
    var randomToken =
      Math.floor(Math.random() * 100000 + 1).toString() +
      "-" +
      Math.floor(Math.random() * 100000 + 1).toString() +
      "-" +
      Math.floor(Math.random() * 100000 + 1).toString();
    //localStorage.clear();
    //localStorage.clear();
    /*var expirationMS = 24 * 60 * 60 * 1000;
    var record = {Tvalue: JSON.stringify(jsonData), timestamp: new Date().getTime() + expirationMS}
    localStorage.setItem(key, JSON.stringify(record));
    */
    debugger;
    this.setCookie("myToken3", "18802-9802-95873", 1);
    /*
var data = {value: randomToken, expires_at: new Date().getTime() / 1};
        localStorage.setItem("myToken2", JSON.stringify(data));

    var hours = 24; // Reset when storage is more than 24hours
    var now = new Date().getTime();
    debugger;
alert(localStorage.getItem('myToken'));
    if(localStorage.getItem('myToken') == null){
        localStorage.setItem('myToken', randomToken);
        localStorage.setItem('myTokenSetupTime', now);
    }
    else{
      
                alert(JSON.stringify(this.state.allCustomers.filter(objss => objss.customerToken == "53896-90708-17215")));
        var setupTime = localStorage.getItem('myTokenSetupTime');
        if (setupTime == null) {
            localStorage.setItem('myTokenSetupTime', now)
        } else {
            if(now-setupTime > hours*60*60*1000) {
                localStorage.clear()
                localStorage.setItem('myTokenSetupTime', now);
                localStorage.setItem('myToken','80');
            }
        }
    
    }
    */
    debugger;

    //this.setCookie("myToken3",randomToken,1);
    //alert(this.getCookieExpirationDate("Expires"));
    //debugger;
    /*var expires = "";
    if (1) {
        var date = new Date();
        date.setTime(date.getTime() + (1*24*60*60*1000));
        expires = ";expires=" + date.toUTCString();
    }*/

    /*let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = "myToken3" + "=" + randomToken+";"+ "expires=" + date;*/

    /*var cookieName = 'savedTests';
var cookieValue = [
{'id':12345678}
];
var cookieString = JSON.stringify(cookieValue);

var addDays = 2;
var newDate = new Date();
newDate.setTime(newDate.getTime() + (addDays*24*60*60*1000));
var expiresInTime = "expires="+ newDate.toUTCString();
document.cookie = cookieName + "=" + cookieString + ";" + " Path=/; Expires=Thu, 01 Jan 2021 00:00:01 GMT;expiresInTime + ";//path=/";

    alert(document.cookie);
    */

    //document.cookie = "myToken3" + "=" + /*(randomToken || "")*/ randomToken  + expires + ";path=/";
    //var diff = new Date('2020','09','01','10','0','0').getTime().valueOf() - new Date(this.getCookie("myUserTokenSetup")).getTime().valueOf();
    //var diffInHours = diff/(1000*60*60);

    if (
      this.getCookie("myUserToken") == "" ||
      this.getCookie("myUserToken") == null
    ) {
      debugger;
      this.setCookie("myUserToken", randomToken, 1);
      this.setCookie("myUserTokenSetup", new Date(), 1);
    } else {
      debugger;
      var diff =
        Math.abs(
          new Date(this.getCookie("myUserTokenSetup")).getTime() -
          new Date(Date.now() + 1 * 24 * 60 * 60 * 1000)
        ) / 3600000;
      //alert(diff);
      if (diff > 24) {
        debugger;
        //alert("Erasing");
        this.eraseCookie("myUserToken");
        this.eraseCookie("myUserTokenSetup");

        this.setCookie("myUserToken", randomToken, 1);
        this.setCookie("myUserTokenSetup", new Date(), 1);
      }
    }

    this.setState({ value: localStorage.getItem("myToken") });
  };

  increaseItemCount = (counter) => {
    //alert();
    this.setState({
      selectedItemCount: this.state.selectedItemCount + counter,
    });
    return this.state.selectedItemCount;
  };

  decreaseItemCount = (counter) => {
    this.setState({
      selectedItemCount: this.state.selectedItemCount - counter,
    });
    return this.state.selectedItemCount;
  };

  changeItemCount = (counter) => {
    if (this.state.selectedItemCount + counter < 1) {
      alert("exceeded minimum qty limit");
    } else {
      this.setState({
        selectedItemCount: this.state.selectedItemCount + counter,
      });
    }
    //alert(this.state.selectedItemCount);
    return this.state.selectedItemCount;
  };

  selectedItemCountShowFunc = (selectedProd) => {
    return this.state.selectedItemCount;
  };

  async loadUserOrders() {
    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + home.getCookie("myToken3")
    );
    //alert(JSON.stringify(productsArr));
    let ordersArr = [];

    if (data["orders"][0] == null) {
      ordersArr.push({
        id: data["orders"]._id,
        customerToken: data["orders"].customerToken,
        orderDate: data["orders"].orderDate,
        isCompleted: data["orders"].isCompleted,
        orderArr: data["orders"].orderArr,
      });
    } else {
      ordersArr = data["orders"].map((orderItem) => {
        return {
          id: orderItem._id,
          customerToken: orderItem.customerToken,
          orderDate: orderItem.orderDate,
          isCompleted: orderItem.isCompleted,
          orderArr: orderItem.orderArr,
        };
      });
    }

    this.setState({
      allOrders:
        home.getCookie("myToken3") == null
          ? []
          : data["orders"].length == 0
            ? []
            : ordersArr,
    });
  }

  async componentDidMount() {
    //debugger;
    //localStorage.clear();
    //alert("home page");
    //this.eraseCookie("myToken3");
    //this.eraseCookie("myUserTokenSetup");
    //alert(this.state.value);
    //this.setState({ showModal: true });
    //home.currUserMailAddress(home.getCookie("myToken3"));
    this.setState({
      loginStatus:
        typeof home.getCookie("myToken3") != "undefined" ||
          home.getCookie("myToken3") != ""
          ? home.getCookie("myToken3")
          : "Signup/Login",
    });
    this.currency();
    var { data } = await axios.get(API_BACKEND_ENDPOINT_SERVER + "/api/products");

    //alert(JSON.stringify(data["products"][0]["productName"]));
    /*alert(
      JSON.stringify(data) +
        " - " +
        JSON.stringify(data["products"][0] == null ? 0 : 1)
    );*/
    console.log(JSON.stringify(data));

    let productsArr = [];
    if (data["products"][0] == null) {
      productsArr.push({
        id: data["products"]._id,
        name: data["products"].productName,
        imgUrl: data["products"].imgUrl,
        categoryName: data["products"].categoryName,
        Description: data["products"].Description,
        RAMDetails: data["products"].RAMDetails,
        CPUDetails: data["products"].CPUDetails,
        Storage: data["products"].Storage,
        Display: data["products"].Display,
        price: data["products"].price,
      });
    } else {
      productsArr = data["products"].map((productItem) => {
        return {
          id: productItem._id,
          name: productItem.productName,
          imgUrl: productItem.imgUrl,
          categoryName: productItem.categoryName,
          Description: productItem.Description,
          RAMDetails: productItem.RAMDetails,
          CPUDetails: productItem.CPUDetails,
          Storage: productItem.Storage,
          Display: productItem.Display,
          price: productItem.price,
        };
      });
    }

    var { data } = await axios.get(API_BACKEND_ENDPOINT_SERVER + "/api/customers/");
    //alert(JSON.stringify(productsArr));
    let customersArr = [];

    if (data["customers"][0] == null) {
      customersArr.push({
        id: data["customers"]._id,
        customerToken: data["customers"].customerToken,
        firstName: data["customers"].customerFirstName,
        lastName: data["customers"].customerLastName,
        customerEmail: data["customers"].customerEmail,
        customerAddress: data["customers"].customerAddress,
      });
    } else {
      customersArr = data["customers"].map((productItem) => {
        return {
          id: productItem._id,
          customerToken: productItem.customerToken,
          firstName: productItem.customerFirstName,
          lastName: productItem.customerLastName,
          customerEmail: productItem.customerEmail,
          customerAddress: productItem.customerAddress,
        };
      });
    }

    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + home.getCookie("myToken3")
    );
    //alert(JSON.stringify(productsArr));
    let ordersArr = [];

    if (data["orders"][0] == null) {
      ordersArr.push({
        id: data["orders"]._id,
        customerToken: data["orders"].customerToken,
        orderDate: data["orders"].orderDate,
        isCompleted: data["orders"].isCompleted,
        orderArr: data["orders"].orderArr,
      });
    } else {
      ordersArr = data["orders"].map((orderItem) => {
        return {
          id: orderItem._id,
          customerToken: orderItem.customerToken,
          orderDate: orderItem.orderDate,
          isCompleted: orderItem.isCompleted,
          orderArr: orderItem.orderArr,
        };
      });
    }

    var numberOfItemsObj = 0;
    numberOfItemsObj =
      home.getCookie("myToken3") == null
        ? 0
        : data["orders"].length == 0
          ? 0
          : ordersArr[0].orderArr.length;

    this.setState({ itemCount: numberOfItemsObj });

    this.setState({ allProducts: productsArr });
    this.setState({ allCustomers: customersArr });
    this.setState({
      allOrders:
        home.getCookie("myToken3") == null
          ? []
          : data["orders"].length == 0
            ? []
            : ordersArr,
    });
    //this.setState({ currencyList: this.currency() });
    //alert(JSON.stringify(this.state.allProducts.filter(objss => objss.categoryName == "iPad")[0].categoryName));
  }
}
//export default connect()(Home);
export default Home;
