import React from 'react';
import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const useStyle = {
    color: 'white'
}
class Header extends Component {
    render() { 
        return (  
            <Navbar bg="primary" expand="lg">
                <Navbar.Brand href="#home" className="mx-auto" style={useStyle}>KwikCart</Navbar.Brand>
            </Navbar>
        );
    }
}
 
export default Header;