import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Button,
  Pagination,
  Collapse,
  Modal,
  Container,
  Row,
  Col,
  Text,
  Carousel,
  InputGroup,
  FormControl
} from "react-bootstrap";
import axios from "axios";

class Home extends Component {
  //state = {productId: 99, isAvailable: false,cartItemCountBtn: 0};
  constructor(props) {
    super(props);
    //const [open] = useState(false);
    this.state = {
      cartItemCountBtn: 0,
      open: false,
      modalShow: false,
      allProducts: [],
      selectedProduct: {}
    };
  }

  render() {
    //"20px 200px 10px 200px"
    return (
      <React.Fragment >

        <div>
        <h1 style={{backgroundColor: "silver"}}>
          <a onClick={this.navMacBooks}>Apple - MacBooks</a>
        </h1>

        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {this.state.allProducts.filter(objss => objss.categoryName == "macbook").map((productItem) => (
              <div className="col" key={productItem.id}>
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    className="card-img-top"
                    src={productItem.imgUrl}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{productItem.name}</h5>
                    <p className="card-text">
                      <span style={{ fontSize: 15 }}>
                        13.3" Retina display,4-core Intel Core i5,256 GB
                        Storage,Touch bar & touch ID..
                      </span>
                      <br />
                      <span
                        style={{
                          color: "blue",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        Rs. 267,000
                      </span>
                    </p>

                    <Button
                      variant="primary"
                      className="btn btn-success"
                      onClick={() => {this.handleShow(productItem)}}
                    >
                      Add Cart
                    </Button>
                    <Button
                      style={{ margin: "0px 0px 0px 20px" }}
                      onClick={this.go11}
                      aria-controls="example-collapse-text"
                      aria-expanded={this.state.open}
                    >
                      More Info &raquo;
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>

        <h1>
          <a onClick={() => { this.navProducts("iPhone") }}>
            Apple - iPhones
          </a>
        </h1>

        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {this.state.allProducts.filter(objss => objss.categoryName == "iphone").map((productItem) => (
              <div className="col" key={productItem.id}>
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    className="card-img-top"
                    src={productItem.imgUrl}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{productItem.name}</h5>
                    <p className="card-text">
                      <span style={{ fontSize: 15 }}>
                        13.3" Retina display,4-core Intel Core i5,256 GB
                        Storage,Touch bar & touch ID..
                      </span>
                      <br />
                      <span
                        style={{
                          color: "blue",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        Rs. 267,000
                      </span>
                    </p>

                    <Button
                      variant="primary"
                      className="btn btn-success"
                      onClick={() => {this.handleShow(productItem)}}
                    >
                      Add Cart
                    </Button>
                    <Button
                      style={{ margin: "0px 0px 0px 20px" }}
                      onClick={this.go11}
                      aria-controls="example-collapse-text"
                      aria-expanded={this.state.open}
                    >
                      More Info &raquo;
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1>
          <a onClick={() => { this.navProducts("iPad") }}>Apple - iPads</a>
        </h1>

        <div className="container" style={{ marginTop: "20px" }}>
          <div className="row">
            {this.state.allProducts.filter(objss => objss.categoryName == "ipad").map((productItem) => (
              <div className="col" key={productItem.id}>
                <div className="card" style={{ width: "21rem" }}>
                  <img
                    className="card-img-top"
                    src={productItem.imgUrl}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{productItem.name}</h5>
                    <p className="card-text">
                      <span style={{ fontSize: 15 }}>
                        13.3" Retina display,4-core Intel Core i5,256 GB
                        Storage,Touch bar & touch ID..
                      </span>
                      <br />
                      <span
                        style={{
                          color: "blue",
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        Rs. 267,000
                      </span>
                    </p>

                    <Button
                      variant="primary"
                      className="btn btn-success"
                      onClick={() => {this.handleShow(productItem)}}
                    >
                      Add Cart
                    </Button>
                    <Button
                      style={{ margin: "0px 0px 0px 20px" }}
                      onClick={this.go11}
                      aria-controls="example-collapse-text"
                      aria-expanded={this.state.open}
                    >
                      More Info &raquo;
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <h1>
          <a onClick={this.navMacBooks}>Apple - MacBooks</a>
        </h1>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/mac/home/at/images/overview/compare/macbook_pro_13__ft1pc3lqwd6y_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
                  </span>
                </p>

                <Button
                  variant="primary"
                  className="btn btn-success"
                  onClick={this.handleShow}
                >
                  Add Cart
                </Button>
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/mac/home/at/images/overview/compare/macbook_pro_13__ft1pc3lqwd6y_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/mac/home/at/images/overview/compare/macbook_pro_13__ft1pc3lqwd6y_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
        </div>

        <h1>
          <a
            onClick={() => {
              this.navProducts("iPhone");
            }}
          >
            Apple - iPhones
          </a>
        </h1>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
        </div>

        <h1>
          <a onClick={this.navProducts}>Apple - iPads</a>
        </h1>
        <div className="row">
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
          <div className="col">
            <div className="card" style={{ width: "28rem" }}>
              <img
                className="card-img-top"
                src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">MacBook Pro 13" (2020)</h5>
                <p className="card-text">
                  <span style={{ fontSize: 15 }}>
                    13.3" Retina display,4-core Intel Core i5,256 GB
                    Storage,Touch bar & touch ID..
                  </span>
                  <br />
                  <span
                    style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                  >
                    Rs. 267,000
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
        </div>

        <h1>
          <a onClick={this.navMacBooks}>Apple - MacBooks</a>
        </h1>
        <div style={{ overflowX: "scroll", margin: "10px 2px 10px 10px" }}>
          <div className="card" style={{ width: "28rem" }}>
            <img
              className="card-img-top"
              src="https://www.apple.com/v/mac/home/at/images/overview/compare/macbook_pro_13__ft1pc3lqwd6y_large.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">MacBook Pro 13" (2020)</h5>
              <p className="card-text">
                <span style={{ fontSize: 15 }}>
                  13.3" Retina display,4-core Intel Core i5,256 GB Storage,Touch
                  bar & touch ID..
                </span>
                <br />
                <span
                  style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                >
                  Rs. 267,000
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
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
            <img src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"></img>
          </div>
        </Collapse>

        <Modal show={this.state.modalShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Row>
                <Col xs={12} md={8}>
                <img src={this.state.selectedProduct.imgUrl} style={{width: 50,height: 50}} /> {this.state.selectedProduct.name}
                </Col>
                <Col xs={6} md={4}>
                    <div>
                        <div style={{float: "left"}}>
                        <Button> 
                            +
                  </Button>
                        </div>
                        <div style={{float: "left"}}>
                        <InputGroup style={{width: 50}}>
    <InputGroup.Prepend>
    </InputGroup.Prepend>
    <FormControl
      aria-label="Username"
      aria-describedby="basic-addon1"
    />
  </InputGroup>
                  </div>
                  <div style={{float: "left"}}>
                  <Button>-</Button>
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
            <Button variant="primary" onClick={this.handleClose}>
              Add Item
            </Button>
          </Modal.Footer>
        </Modal>

        <Pagination>
          <Pagination.First />
        </Pagination>
        <div className="pagination">
          <ul>
            <li className="disabled">
              <a href="#">&laquo;</a>
            </li>
            <li className="active">
              <a href="#">&raquo;</a>
            </li>
            ...
          </ul>
        </div>

        <h1>Apple - iPhones</h1>
        <div style={{ overflowX: "scroll", margin: "20px 200px 10px 200px" }}>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              style={{ height: "28em" }}
              src="https://www.apple.com/v/iphone/home/am/images/overview/compare/compare_iphone_11__f0r1z5etd722_large.jpg"
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title">iPhone 11</h5>
              <p className="card-text">
                <span style={{ fontSize: 15 }}>
                  6.1" Retina display,Dual camera system,Upto 17 hours video
                  playback,Hapic touch
                </span>
                <br />
                <span
                  style={{ color: "blue", fontSize: 14, fontWeight: "bold" }}
                >
                  Rs. 140,000
                </span>
              </p>

              <a href="#" className="btn btn-success">
                Add Cart &raquo;
              </a>
              <a href="#" className="btn btn-primary">
                More Info &raquo;
              </a>
            </div>
          </div>
        </div>

        <div className="pagination">
          <ul>
            <li className="disabled">
              <a href="#">&laquo;</a>
            </li>
            <li className="active">
              <a href="#">&raquo;</a>
            </li>
            ...
          </ul>
        </div>




      </React.Fragment>
    );
  }

  go11 = () => {
    //alert();
    debugger;
    this.setState({ open: !this.state.open });
    return this.state.open;
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
    alert(JSON.stringify(obj));
    this.setState({ modalShow: true });
    this.setState({selectedProduct: obj});
    return this.state.modalShow;
    //setShow(true);
  };

  handleClose = () => {
    //alert();
    debugger;
    this.setState({ modalShow: false });
    return this.state.modalShow;
  };

  navMacBooks = () => {
    //this.props.history.push("/Products");
    this.props.history.push("/Products/MacBook");
  };

  navProducts = (categoryName) => {
    debugger;
    this.props.history.push("/Products/" + categoryName);
  };

  async componentDidMount() {
    debugger;
    let { data } = await axios.get("http://localhost:4000/api/products/");
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
        categoryName: data["products"].categoryName
      });
    } else {
      productsArr = data["products"].map((productItem) => {
        return {
          id: productItem._id,
          name: productItem.productName,
          imgUrl: productItem.imgUrl,
          categoryName: productItem.categoryName
        };
      });
    }

    //alert(JSON.stringify(productsArr));
    
    this.setState({ allProducts: productsArr });
    //alert(JSON.stringify(this.state.allProducts.filter(objss => objss.categoryName == "iPad")[0].categoryName));
  }
}
//export default connect()(Home);
export default Home;


<Form inline>
<FormControl
  type="text"
  placeholder="Search"
  className="mr-sm-2"
/>
<Button variant="outline-success">
  <FontAwesomeIcon icon={faSearch} />
</Button>
</Form>