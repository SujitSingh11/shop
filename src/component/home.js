import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import StartShopping from './startShopping'
import Main from './main'
import {
    Switch,
    Route
} from "react-router-dom";

class Home extends Component{
    state = {
        sessionId: null,
        pid: null,
        pname: null,
        pimg: null,
        price: null,
        stock: null
    }

    fetchProduct(){
        if(this.isStockEmpty()){

        }else{

        }
    }
    isStockEmpty(){
        return false;
    }

    render(){
        return (  
            <Container>
                <Switch>
                    <Route path="/main">
                        <Main />
                    </Route>
                    <Route path="/">
                        <StartShopping/>
                    </Route>
                </Switch>
            </Container>
        );
    }
}
 
export default Home;