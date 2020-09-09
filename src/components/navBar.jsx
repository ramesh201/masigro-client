import React, { component, Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faCoffee2, config } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faShoppingCart,
  faUserPlus,
  faSearch,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  Form,
  FormControl,
  Button,
  Carousel,
  Modal,
  Container,
  Row,
  Col,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from "./Home";
import axios from "axios";

import {
  isLoggedIn,
  setAuthTokens,
  clearAuthTokens,
  getAccessToken,
  getRefreshToken,
  IAuthTokens,
} from "axios-jwt";

import { API_BACKEND_ENDPOINT_SERVER } from "../constants/Config";

//import { connect } from 'react-redux';
//import { addTodo } from '../redux/actions'

/*const authResponseToAuthTokens = (res: IAuthResponse): IAuthTokens => ({
    accessToken: res.access_token,
    refreshToken: res.refresh_token
  });*/

class NavBar extends Component {
  //state = {cartItemCount: 0};
  //props.value;
  constructor(props) {
    super(props);

    /*interface IAuthResponse {
        access_token: string;
        refresh_token: string;
      }*/

    this.state = {
      //hi: "hi",
      //homeProps: 0,
      allCustomers: [],
      allOrders: [],
      showModal: false,
      numberOfItems: 0,
      isInitial: false,
      showConfModal: false,
      closeAllCartModal: false,
      loginStatus: "Signup/Login",
      showAuthConfModal: false,
      showSignupModal: false,
      showSignupConfModal: false,
      loginEmail: "",
      loginPassword: "",
      signupFName: "",
      signupLName: "",
      signupUsername: "",
      signupEmail: "",
      signupPassword: "",
      loginSuccessUserObj: {},
    };
    //this.myRefs = React.createRef();
    //this.printValues = this.printValues.bind(this);
    //debugger;
    //console.log("i'm props - "+props);
  }

  render() {
    //debugger;
    //this.props.addTodo(this.state.input);
    //<img style={{margin: '0px 20% 0px 20%'}} src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"></img>

    //console.log(this.myRefs);
    return (
      <nav className="nav nav-dark">
        <div style={{ float: "left", width: "100%" }}>
          <div style={{ margin: "0px 0px 0px 0px" }}>
            <img
              src={require("../images/masigrologo.png")}
              style={{ width: "10%", height: 100 }}
            ></img>
            <Carousel style={{ backgroundColor: "silver" }}>
              <Carousel.Item style={{ backgroundColor: "silver" }}>
                <img
                  className="d-block w-50"
                  style={{ width: 200, height: 300, margin: "0 50% 0 30%" }}
                  src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Apple</h3>
                  <p>World's 1st class digital experience</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50"
                  style={{ width: 200, height: 300, margin: "0 50% 0 30%" }}
                  src="https://www.apple.com/v/mac/home/at/images/overview/compare/macbook_pro_13__ft1pc3lqwd6y_large.jpg"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>MacBook</h3>
                  <p>Feel difference on computing</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ backgroundColor: "silver" }}>
                <img
                  className="d-block w-50"
                  style={{ width: 10, height: 300, margin: "0 50% 0 30%" }}
                  src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>iPhone</h3>
                  <p>Make the communication revolution</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-50"
                  style={{ width: 100, height: 300, margin: "0 50% 0 30%" }}
                  src="https://www.apple.com/v/ipad/shared/compare/e/images/overview/compare_ipad__gt1civqvilei_large.png"
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>iPad</h3>
                  <p>Interact with both cellular and laptop feeling</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div>
            <div style={{ float: "left", width: "84%" }}>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </div>
            <div>
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
                  {this.state.numberOfItems == 0
                    ? 0
                    : this.state.numberOfItems < 10
                      ? "0" + this.state.numberOfItems
                      : this.state.numberOfItems}
                </span>
                <Link
                  onClick={() => {
                    this.singleClick();
                  }}
                  style={{ margin: "0px 1px 0px 1px" }}
                >
                  <FontAwesomeIcon icon={faShoppingCart} /> Orders
                </Link>
                <Link
                  onClick={() => {
                    this.authenticationClick();
                  }}
                  style={{ margin: "0px 1px 0px 1px" }}
                >
                  <FontAwesomeIcon icon={faUserPlus} /> {this.state.loginStatus}
                </Link>
              </div>
              <div style={{ float: "right" }}></div>
            </div>
          </div>
        </div>

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
                        this.clikcOnShowOrderPage();
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
              {typeof this.state.allOrders == "undefined" ? (
                <Row>
                  <Col>No Orders</Col>
                </Row>
              ) : (
                  this.state.allOrders.map((orderItem) =>
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
                  )
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

        <Modal
          show={this.state.showSignupConfModal}
          onHide={this.closeSignupConfModal}
          size="sm"
        >
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>First Name</Row>
              <Row>
                <input id="signupFNId" type="text" />
              </Row>

              <Row>Last Name</Row>
              <Row>
                <input id="signupLNId" type="text" />
              </Row>
              <Row>Username</Row>
              <Row>
                <input id="signupUsernameId" type="text" />
              </Row>
              <Row>Email</Row>
              <Row>
                <input id="signupEmailId" type="text" />
              </Row>
              <Row>Password</Row>
              <Row>
                <input id="signupPwdId" type="password" />
              </Row>

              <Row style={{ margin: "10px 0px 10px 0px" }}>
                <Col>
                  <Button
                    onClick={() => {
                      this.signupProcess();
                    }}
                  >
                    Sign Up
                  </Button>
                </Col>
                <Col>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      this.closeSignupConfModal();
                    }}
                  >
                    Close
                  </Button>
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </nav>
    );
  }

  //Authentication
  closeAuthConfModal = () => {
    this.setState({ showAuthConfModal: false });
    return this.state.showAuthConfModal;
  };
  signupProcess = () => {
    var obj = {
      userFirstName: document.getElementById("signupFNId").value,

      userLastName: document.getElementById("signupLNId").value,

      username: document.getElementById("signupUsernameId").value,

      userEmail: document.getElementById("signupEmailId").value,

      userPassword: document.getElementById("signupPwdId").value,
      userRoles: "",
    };
    alert(JSON.stringify(obj));
    this.addUser(obj);
  };

  async addUser(obj) {
    try {
      alert(obj);
      let res = await axios.post(API_BACKEND_ENDPOINT_SERVER + "/api/users", obj);
      this.setState({
        loginStatus:
          obj.userFirstName.substring(0, 1) + ". " + obj.userLastName,
      });
    } catch (error) {
      alert("User saving error occured...");
    }
  }
  clickOnShowSignupModal = () => {
    this.setState({ showAuthConfModal: false });
    this.setState({ showSignupConfModal: true });
  };
  closeSignupConfModal = () => {
    this.setState({ showSignupConfModal: false });
  };
  authenticationClick = () => {
    debugger;
    if (
      typeof this.getCookie("myToken3") == "undefined" ||
      this.getCookie("myToken3") == ""
    ) {
      this.setState({ showAuthConfModal: true });
    } else {
      this.setState({ showAuthConfModal: true });
    }
  };

  updateLoginForm = () => {
    this.setState({
      loginEmail: document.getElementById("loginEmailId").value,
    });
    this.setState({
      loginPassword: document.getElementById("loginPasswordId").value,
    });

    //alert(this.state.loginEmail);
  };

  async loginProcess() {
    alert(
      this.state.loginEmail +
      " - " +
      document.getElementById("loginPasswordId").value
    );
    /*let userObj = {
          userEmail: this.state.loginEmail,
          userPassword: document.getElementById("loginPasswordId").value
      }*/

    let userObj = {
      userFirstName: "Test",
      userLastName: "User",
      username: "testuser",
      userEmail: this.state.loginEmail,
      userPassword: document.getElementById("loginPasswordId").value,
    };

    var res = null;
    //this.validateUser(userObj);
    try {
      //const res = await axios.post("localhost:4000/api/auth/", userObj);

      /*const res = await axios.post("https://masigroapi.herokuapp.com/api/auth",{
              userEmail: "zdxfgxdfg",
              userpassword: "fghyj"
          });*/
      //debugger;
      /* const res = await axios.interceptors.request.use(
              config => {
              config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTJlYjZhZDYxZDk1MDAxNzdjYTNiZSIsImN1c0VtYWlsIjoiYWRtaW5AbWFzaWdyby5sayIsImlhdCI6MTU5OTI4NzAxMH0.Pj_n_ZAWwxGritHcktRdllAk0nac4KYK5u6FS59FfnE';
              return config;
              }
          ,
          error => 
          {
              return Promise.reject(error);
          }
          )
          return res;*/

      /*const login = async (params: ILoginRequest) => {
              const res: IAuthResponse = (await axios.post("localhost:4000/api/auth", params)).data;
              // save tokens to storage
              setAuthTokens(authResponseToAuthTokens(res));
            };*/

      res = await axios.post(API_BACKEND_ENDPOINT_SERVER + "/api/auth", {
        userEmail: userObj.userEmail,
        userPassword: this.state.loginPassword,
      });

      /*
        axios
          .post("http://localhost:4000/api/auth", {
            userEmail: userObj.userEmail,
            userPassword: this.state.loginPassword,
          })
          .then(function (response) {
              debugger;
              return response;
            //alert(typeof(response.data));
            //this.setState({loginSuccessUserObj: {}});
            //this.accessAuthenticationCookies(this.state.loginSuccessUserObj);
            //this.setState({loginStatus:
              //  this.getCookie("myFName").substring(0, 1) + ". " + this.getCookie("myLName"),
            //});
            console.log(response);
          })
          .catch(function (error) {
            alert(error);
            console.log(error);
          });
  
        //this.setState({ itemCount : this.state.itemCount + 1 });
        */
    } catch (error) {
      alert("Validating Error...");
      return;
    }

    debugger;
    this.accessAuthenticationCookies(res.data);
    this.setState({
      loginStatus:
        this.getCookie("myFName").substring(0, 1) +
        ". " +
        this.getCookie("myLName"),
    });
    //alert(JSON.stringify(res));
  }

  async validateUser(userObj) {
    try {
      //const res = await axios.post("localhost:4000/api/auth/", userObj);

      /*const res = await axios.post("https://masigroapi.herokuapp.com/api/auth",{
            userEmail: "zdxfgxdfg",
            userpassword: "fghyj"
        });*/
      //debugger;
      /* const res = await axios.interceptors.request.use(
            config => {
            config.headers.authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNTJlYjZhZDYxZDk1MDAxNzdjYTNiZSIsImN1c0VtYWlsIjoiYWRtaW5AbWFzaWdyby5sayIsImlhdCI6MTU5OTI4NzAxMH0.Pj_n_ZAWwxGritHcktRdllAk0nac4KYK5u6FS59FfnE';
            return config;
            }
        ,
        error => 
        {
            return Promise.reject(error);
        }
        )
        return res;*/

      /*const login = async (params: ILoginRequest) => {
            const res: IAuthResponse = (await axios.post("localhost:4000/api/auth", params)).data;
            // save tokens to storage
            setAuthTokens(authResponseToAuthTokens(res));
          };*/

      let res = await axios.post(API_BACKEND_ENDPOINT_SERVER + "/api/auth", {
        userEmail: userObj.userEmail,
        userPassword: this.state.loginPassword,
      });

      /*
      axios
        .post("http://localhost:4000/api/auth", {
          userEmail: userObj.userEmail,
          userPassword: this.state.loginPassword,
        })
        .then(function (response) {
            debugger;
            return response;
          //alert(typeof(response.data));
          //this.setState({loginSuccessUserObj: {}});
          //this.accessAuthenticationCookies(this.state.loginSuccessUserObj);
          //this.setState({loginStatus:
            //  this.getCookie("myFName").substring(0, 1) + ". " + this.getCookie("myLName"),
          //});
          console.log(response);
        })
        .catch(function (error) {
          alert(error);
          console.log(error);
        });

      //this.setState({ itemCount : this.state.itemCount + 1 });
      */
    } catch (error) {
      alert("Validating Error...");
      return;
    }
  }

  accessAuthenticationCookies = (userObj) => {
    if (
      this.getCookie("myToken3") == "" ||
      this.getCookie("myToken3") == null
    ) {
      debugger;
      this.setCookie("myToken3", userObj.userEmail, 1);
      this.setCookie("myFName", userObj.userFirstName, 1);
      this.setCookie("myLName", userObj.userLastName, 1);
      this.setCookie("myUsername", userObj.username, 1);
      this.setCookie("myRole", userObj.userRoles, 1);
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
        alert("New Login User Adding");
        this.eraseCookie("myToken3");
        this.eraseCookie("myFName");
        this.eraseCookie("myLName");
        this.eraseCookie("myUsername");
        this.eraseCookie("myRole");
        this.eraseCookie("myUserTokenSetup");

        this.setCookie("myToken3", userObj.userEmail, 1);
        this.setCookie("myFName", userObj.userFirstName, 1);
        this.setCookie("myLName", userObj.userLastName, 1);
        this.setCookie("myUsername", userObj.username, 1);
        this.setCookie("myRole", userObj.userRoles, 1);
        this.setCookie("myUserTokenSetup", new Date(), 1);
      }
    }
  };
  ////////////////////////////

  setCookie = (name, value, days) => {
    debugger;
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  };

  eraseCookie = (name) => {
    document.cookie =
      name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  };

  closeAllCartModal = () => {
    this.setState({ showModal: false });
  };

  navMacBooks = () => {
    //this.props.history.push("/Products");
    this.props.history.push("/Products/macbook");
  };
  navSuccess = () => {
    //this.props.history.push("/Products");
    this.props.history.push("/OrderComplete");
  };
  showing = () => {
    debugger;
    //var x = this.props;
    //alert(this.refs + " - " + this.getCookie("myUserToken"));
  };

  functionCall = (event, fullOrder, selectedOrder) => {
    debugger;
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

    const res = await axios.put(
      "https://masigroapi.herokuapp.com/api/orders/" + orderId,
      {
        orderArr: existingOrderItems,
      }
    );
  }
  addingQty = (qtyObj) => {
    alert(qtyObj);
  };

  singleClick = () => {
    console.log("Single clicked");
    this.setState({ showConfModal: true });
    return this.state.showConfModal;
  };

  doubleClick = () => {
    console.log("Double clicked");
  };

  clikcOnShowPopup = () => {
    this.setState({ showConfModal: false });
    this.setState({ showModal: true });
    return this.state.showConfModal;
  };

  clikcOnShowOrderPage = () => {
    this.setState({ showConfModal: false });
    //this.setState({showModal: true});
    return this.state.showConfModal;
  };

  closeConfModal = () => {
    this.setState({ showConfModal: false });
    return this.state.showConfModal;
  };

  deleteFromCart = (key) => {
    debugger;
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

  closeModal = () => {
    this.setState({ showModal: false });
    return this.state.showModal;
  };

  changeItemCount = (obj) => { };

  async componentDidMount() {
    debugger;
    /*this.eraseCookie("myToken3");
    this.eraseCookie("myFName");
    this.eraseCookie("myLName");
    this.eraseCookie("myUsername");
    this.eraseCookie("myRole");
    this.eraseCookie("myUserTokenSetup");
*/
    if (
      typeof this.getCookie("myToken3") != "undefined" &&
      this.getCookie("myToken3") != "" &&
      this.getCookie("myToken3") != null
    ) {
      this.setState({
        loginStatus:
          this.getCookie("myFName").substr(0, 1) +
          ". " +
          this.getCookie("myLName"),
      });
    } else {
      this.setState({ loginStatus: "Signup/Login" });
    }
    /*this.setState({ loginStatus: (typeof(this.getCookie("myToken3")) != "undefined" || this.getCookie("myToken3") != "" || this.getCookie("myToken3") != null) ? this.getCookie("myFName").substr(0,1)+". "+this.getCookie("myLName") : "Signup/Login"});*/
    var { data } = await axios.get(
      API_BACKEND_ENDPOINT_SERVER + "/api/customers/" + this.getCookie("myToken3")
    );
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

    debugger;
    var numberOfItemsObj = 0;
    numberOfItemsObj =
      this.getCookie("myToken3") == null
        ? 0
        : data["orders"].length == 0
          ? 0
          : ordersArray[0].orderArr.length;

    this.setState({ allCustomers: customersArr });
    this.setState({
      allOrders:
        this.getCookie("myToken3") == null
          ? []
          : data["orders"].length == 0
            ? []
            : ordersArray,
    });
    this.setState({ numberOfItems: numberOfItemsObj });
    this.setState({ isInitial: true });
  }
}

export default NavBar;
