import React, { Component } from "react";

class Home extends Component {
    //state = {productId: 99, isAvailable: false,cartItemCountBtn: 0};
    constructor(props) {
        super(props);
        this.state = {
            cartItemCountBtn: 0,
        }
        
    }
    render(){
        return (<React.Fragment>
            
            <h1>Masigro - Home</h1>
            <button onClick={() => {this.printValues()}}>ADD CART</button>
            <img alt="this is" style={{margin: '0px 20% 0px 20%'}} src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"></img>
                
            </React.Fragment>);
    }

    printValues() {
        debugger;
        this.setState({cartItemCountBtn: this.cartItemCountBtn + 10});
        //console.log(this.myRefs.current.selectedValues);
        //console.log(this.myRefs.current.state);
        console.log(this.state.cartItemCountBtn);
        
    }

    

}

//export default connect()(Home);
export default (Home) 