import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyFile from "../rates";

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

class Orders extends Component {
    state = {productId: 99, isAvailable: false};
    render(){
        return (<React.Fragment>
                <h1>Apple Product Orders{this.state.productId}</h1>
                <Container>
              <Row key={1}>
                <Col xs={12} md={8}>
                  <img
                    src="https://www.facebook.com"
                    style={{ width: 50, height: 50 }}
                  />{" "}
                  MacBook Pro 13 - 2020
                </Col>
                <Col xs={6} md={4}>
                  <div>
                    <div style={{ float: "left" }}>
                      <Button
                        
                      >
                        +
                      </Button>
                    </div>
                    <div style={{ float: "left" }}>
                      <InputGroup style={{ width: 50 }}>
                        <InputGroup.Prepend></InputGroup.Prepend>
                        <FormControl
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                      </InputGroup>
                    </div>
                    <div style={{ float: "left" }}>
                      <Button
                        
                      >
                        -
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          
            </React.Fragment>);
    }

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
      
    async componentDidMount() {

        var { data } = await axios.get(
            "http://localhost:4000/api/orders/" + this.getCookie("myToken3")
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
      
          
          this.setState({ allOrders: this.getCookie("myToken3") == null ? [] : ordersArray });

    }

}

export default Orders;