import React, { Component } from "react";

class Product extends Component {
    state = {productId: 99, isAvailable: false};
    render(){
        return (<React.Fragment>
                <h1>Apple Product {this.state.productId}</h1>
            </React.Fragment>);
    }

}

export default Product;