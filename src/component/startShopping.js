import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Button,Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";

function StartScan(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Scan the QR code to start your shopping 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-5">
          QR CODE SCANNER

          <Link to="./main" onClick={props.onHide} >Main</Link>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function StartShopping() {
    const [modalShow, setModalShow] = React.useState(false);
    return ( 
        <Row className="mt-5">
            <Col>
                <Card className="text-center mt-5">
                    <Card.Body>
                        <Card.Title>Welcome to KwikCart</Card.Title>
                        <Button className="mt-5" variant="primary" onClick={() => setModalShow(true)}>Start Shoping</Button>
                    </Card.Body>
                </Card>
            </Col>
            <StartScan
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Row> 
    );
}
 
export default StartShopping;