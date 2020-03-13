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