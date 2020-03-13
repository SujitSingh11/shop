import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Table } from 'react-bootstrap';

class Main extends Component {
    state = { 
        
    }
    render() { 
        return ( 
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
                            <span className="mr-auto"><b>Total: $999</b></span>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        );
    }
}
 
export default Main;