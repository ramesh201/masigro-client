import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyFile from "../rates";
import { Link } from "react-router-dom";
//import { addTodo } from "redux/actions";

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
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUserPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { faCoffee2 } from "@fortawesome/fontawesome-svg-core";

import { API_BACKEND_ENDPOINT_SERVER } from "../constants/Config";

class Orders extends Component {
  state = {
    productId: 99,
    isAvailable: false,
    allOrders: [],
    fullAmout: 0,
    selectedItemCount: 1,
    initLoad: false,
    showDeleteConfModal: false,
    orderProductString: "",
    fullOrder: [],
    selectedOrderItem: {},
  };
  render() {
    return (
      <React.Fragment>
        <h1>Apple Product Orders{this.state.productId}</h1>
        <Container>
          {this.state.allOrders
            .filter((x) => x.customerToken == this.getCookie("myToken3"))
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
                            this.changeItemCount(1);
                          }}
                        >
                          +
                        </Button>
                      </div>
                      <div style={{ float: "left" }}>
                        <input
                          type="text"
                          value={
                            this.state.initLoad
                              ? aOrder.qty
                              : this.state.selectedItemCount
                          }
                          style={{
                            width: 40,
                            height: 30,
                            fontSize: "small",
                          }}
                        />
                      </div>
                      <div style={{ float: "left" }}>
                        <Button
                          style={{ height: 30, width: 30 }}
                          onClick={() => {
                            this.changeItemCount(-1);
                          }}
                        >
                          -
                        </Button>
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
                        this.showDeleteConfModal(
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
            <Col style={{ textAlign: "right" }}>{(500000.0).toFixed(2)}</Col>
          </Row>

          <Row
            style={{
              display: this.state.allOrders.length == 0 ? "none" : "inline",
            }}
          >
            <Col style={{ textAlign: "right" }}>
              <Button variant="secondary" onClick={this.handleClose}>
                <Link to="/" style={{ color: "white" }}>
                  Cancel
                </Link>
              </Button>
              <Button
                variant="primary"
                style={{ margin: "0px 5px 0px 10px" }}
                onClick={this.dummySaving}
              >
                <Link
                  to="/OrderComplete"
                  style={{ margin: "0px 1px 0px 1px", color: "white" }}
                >
                  Checkout
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>

        <Modal
          show={this.state.showDeleteConfModal}
          onHide={this.closeDeleteConfModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete Confirm</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row
                style={{
                  display: this.state.allOrders.length == 0 ? "none" : "inline",
                }}
              >
                <Col style={{ textAlign: "right" }}>
                  <Button
                    variant="secondary"
                    onClick={this.closeDeleteConfModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    style={{ margin: "0px 5px 0px 10px" }}
                    onClick={this.deleteItem}
                  >
                    Delete
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }

  showDeleteConfModal = (orderProductString, fullOrder, selectedOrderItem) => {
    this.setState({ showDeleteConfModal: true });
    this.setState({ orderProductString: orderProductString });
    this.setState({ fullOrder: fullOrder });
    this.setState({ selectedOrderItem: selectedOrderItem });
  };

  closeDeleteConfModal = () => {
    this.setState({ showDeleteConfModal: false });
  };

  getCookie = (name) => {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  deleteItem = () => {
    this.functionCall(
      this.state.orderProductString,
      this.state.fullOrder,
      this.state.selectedOrderItem
    );
  };

  functionCall = (event, fullOrder, selectedOrder) => {
    debugger;
    alert();
    this.updateCart(event, selectedOrder);
    //console.log(event.target.getAttribute('key'));
  };

  async updateCart(componentKey, selectedOrder) {
    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + this.getCookie("myToken3")
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
    document.location.reload(true);
  }

  changeItemCount = (counter) => {
    this.setState({ initLoad: false });
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

  async componentDidMount() {
    this.setState({ initLoad: true });
    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/orders/" + this.getCookie("myToken3")
    );
    //alert(JSON.stringify(productsArr));
    let ordersArray = [];

    if (data["orders"][0] == null) {
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
    }

    this.setState({
      allOrders: this.getCookie("myToken3") == null ? [] : ordersArray,
    });
  }
}

export default Orders;
