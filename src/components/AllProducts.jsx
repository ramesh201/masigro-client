import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

class Products extends Component {
  state = {
    productId: 99,
    isAvailable: false,
    allProducts: [],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            {this.state.allProducts.map((productItem) => (
              <div className="col" key={productItem.id}>
                <Product key={productItem.key} productItem={productItem} />
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }

  async componentDidMount() {
    debugger;
    let { data } = await axios.get("http://localhost:4000/api/products/");
    //alert(JSON.stringify(data["products"][0]["productName"]));
    alert(
      JSON.stringify(data) +
        " - " +
        JSON.stringify(data["products"][0] == null ? 0 : 1)
    );
    console.log(JSON.stringify(data));

    let productsArr = [];
    if (data["products"][0] == null) {
      productsArr.push({
        id: data["products"]._id,
        name: data["products"].productName,
        imgUrl: data["products"].imgUrl,
        categoryName: data["products"].categoryName,
      });
    } else {
      productsArr = data["products"].map((productItem) => {
        return {
          id: productItem._id,
          name: productItem.productName,
          imgUrl: productItem.imgUrl,
          categoryName: productItem.categoryName,
        };
      });
    }
    /*let productsArr = data["products"].map((productItem) => {
return {
    id: productItem._id,
    name: productItem.productName
}
      });
alert(JSON.stringify(productsArr));
      this.setState({allProducts: productsArr});
      */

    //data["products"].map((productItem) => {

    //});
    alert(JSON.stringify(productsArr));
    this.setState({ allProducts: productsArr });
  }
}

export default Products;
