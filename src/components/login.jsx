



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

class Login extends Component {
    render() {
        return (
          <React.Fragment>
           
         
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
}

export default Login;