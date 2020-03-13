import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col,Card,Button,Modal } from 'react-bootstrap';

const size={
    fontSize: '20px'
};
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
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function Home(){
    const [modalShow, setModalShow] = React.useState(false);
    
    return (  
        <Container>
            <Row className="mt-5">
                <Col>
                    <Card className="text-center mt-5">
                        <Card.Body>
                            <Card.Title style={size}>Welcome to KwikCart</Card.Title>
                            <Button className="mt-5" variant="primary" onClick={() => setModalShow(true)}>Start Shoping</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                           
                        </Card.Body>
                        <Card.Footer>
                            <span className="mr-auto"><b>Total: $999</b></span>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <StartScan
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Container>
    );
}
 
export default Home;