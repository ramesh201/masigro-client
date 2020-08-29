import React , {component, Component, Fragment} from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCoffee2 } from '@fortawesome/fontawesome-svg-core';
import { faHome , faShoppingCart , faUserPlus , faSearch } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import home from './Home';

class NavBar extends Component{
    //state = {cartItemCount: 0};

    constructor(props) {
        super(props);
        this.state = {

        }
        this.myRefs = React.createRef();
        //this.printValues = this.printValues.bind(this);
        console.log(props);
    }

    render(){
        debugger;
        console.log(this.myRefs);
        return <nav>
           
            <div style={{float: 'left',width: '100%',backgroundColor: 'lightgrey'}} >
                <div style={{margin: '0px 0px 0px 0px',backgroundColor: 'Menu'}}>
                    <img style={{margin: '0px 20% 0px 20%'}} src="https://images.macrumors.com/t/YrMky4T2__6u5IHmyrBC382tTKE=/800x0/filters:quality(90)/article-new/2018/12/appleproductlineup-800x313.jpg"></img>
                    </div>
                <div>
                    <div style={{float: 'left',width: '84%'}}>
                    <Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                    </div>
                    <div>
                    <Link to="/orders" style={{margin: '0px 1px 0px 1px'}}><span style={{backgroundColor: '#e2e5e8',borderRadius: 100,margin: '0px 0px 0px 0px',fontSize: 15,color: 'orangered'}}>{}</span><FontAwesomeIcon icon={faShoppingCart} /> Orders</Link>
                    <Link to="/signin" style={{margin: '0px 1px 0px 1px'}}><FontAwesomeIcon icon={faUserPlus} /> Signup/Login</Link>
                    </div>
                </div>
                
            
            </div>
            
            </nav>



    }
    /*printValues() {
        debugger;
        console.log(this.myRefs.current.cartItemCountBtn);
        console.log(this.myRefs.current.state);
        
    }*/

}

export default NavBar;