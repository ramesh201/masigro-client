import React, { Component } from "react";

class Orders extends Component {
    state = {productId: 99, isAvailable: false};
    render(){
        return (<React.Fragment>
                <h1>Apple Product Orders{this.state.productId}</h1>
            </React.Fragment>);
    }

}

export default Orders;