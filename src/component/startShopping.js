import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row,Col,Card,Button,Modal} from 'react-bootstrap';
import { Link } from "react-router-dom";
import axios from 'axios';

import Instascan from 'instascan';

let opts = {
    continuous: true,
    video: document.getElementById('preview'),
    mirror: true,
    captureImage: false,
    backgroundScan: true,
    refractoryPeriod: 5000,
    scanPeriod: 1
};

let scanner = new Instascan.Scanner({ video: document.getElementById('preview') },opts);
scanner.addListener('scan', function (content) {
    console.log(content);
});
Instascan.Camera.getCameras().then(function (cameras) {
if (cameras.length > 0) {
    scanner.start(cameras[0]);
} else {
    console.error('No cameras found.');
}
}).catch(function (e) {
    console.error(e);
});

function StartScan(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Scan the QR code
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="my-5">
            <video id="preview" autoplay="autoplay"></video>
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