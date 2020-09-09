import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";
import { API_BACKEND_ENDPOINT_SERVER } from "../constants/Config";

class Products extends Component {
  state = {
    productId: 99,
    isAvailable: false,
    allProducts: [],
  };

  /*
   <div className="row">
  <div className="col"><div>
          <Product />
        </div></div>
        <div className="col"><div>
          <Product />
        </div></div>
        <div className="col"><div>
          <Product />
        </div></div>
</div>
     */
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

    var { data } = await axios.get(API_BACKEND_ENDPOINT_SERVER + "/api/products");

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

    /*
    let { data } = await axios.get(
      "http://localhost:4000/api/products/" +
        this.props.match.params.categoryName
    ); //5f49f5c45d61f00b11c05d17");
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
*/
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
    //alert(JSON.stringify(productsArr));
    this.setState({ allProducts: productsArr });
  }
}

export default Products;
