import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Card, Table, Button, Modal, Link } from 'react-bootstrap';
import axios from 'axios';
import https from 'https';


class Main extends Component {
    state = { 
        cartID: null,
        mobile: null,
        email: null,
        cart: [],
        total: null

    }
    
    componentDidMount() {
        console.log('Inside Axios')
        // axios.get('https://192.168.0.116:4500/api/cart')
        //   .then(res => {
        //       console.log('Inside Axios then')
        //     const cartID = res.key;
        //     this.setState({cartID});
        // }).catch(error => {console.error(error)})
        
        fetch('http://192.168.0.116:4500/api/cart')
        .then(res => res.json())
        .then((data) => {  
            console.log('Inside Axios then')
             const cartID = data.key;
             console.log(cartID);
            this.setState({cartID});
        })
        .catch(console.log)

        /*const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ pid: 'P01',pname:"pname",price:"5",qty:"20",sessionId:"-M2Kax-_1WAxbMNXTFw8" })
        };
        fetch('http://192.168.0.116:4500/api/cart', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));*/
    }    
    render() { 
        return ( 
            <div>
            <Row>
                <Col>
                    <Card className="mt-5">
                    <Card.Header>
                        <video id="preview" autoplay="autoplay"></video>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{this.cartID}</Card.Title>
                        <Card.Text> <b>price:</b> Rs. 25 </Card.Text>
                        <Card.Text> <b>Description:</b> 250g</Card.Text>
                        <Card.Text> <b>stock:</b> 8 </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card className="my-5">
                        <Card.Body>
                            <Card.Text><b>My Cart</b></Card.Text>
                            <Table responsive>
                                <thead>
                                    <tr>
                                        <th>Products</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Apple</td>
                                        <td>2</td>
                                        <td>30</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>
                            <Card.Subtitle>GST 2.5%</Card.Subtitle>
                            <span className="float-left"><b>Total: Rs. 999</b></span>
                            <Button className="float-right" >Checkout</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            
            </div>
        );
    }
}
 
export default Main;