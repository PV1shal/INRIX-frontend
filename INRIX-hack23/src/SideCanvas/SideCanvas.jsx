import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Row, Col, Badge, Stack } from 'react-bootstrap';

const SideCanvas = ({ imageUrl, name, location, score, bed, bath, price, parks, parking }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: 'rgba(200,200, 200, 0.9)'  }}>
      <Offcanvas.Header closeButton>
            <Row>
                <Col>
                <Offcanvas.Title style={{ fontSize: '1.5rem' }}>{name}</Offcanvas.Title>
                </Col>
            </Row>
            <Row>
                <Col>
                <Offcanvas.Title style={{ fontSize: '1rem' }}>{location}</Offcanvas.Title>
                </Col>
            </Row>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={imageUrl} alt="Property" style={{ width: '100%', marginBottom: '16px' }} />
          <Row>
                <Col>
                    <Badge bg="success">Apt Name</Badge>
                </Col>
                <Col>
                    <p>{name}</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Badge bg="success">Score</Badge>
                </Col>
                <Col>
                    <p>{score}</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Badge bg="success">Bedrooms</Badge>
                </Col>
                <Col>
                    <p>{bed}</p>
                </Col>
                </Row>
                
                <Row>
                <Col>
                    <Badge bg="success">Bathrooms</Badge>
                </Col>
                <Col>
                    <p>{bath}</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Badge bg="success">Price</Badge>
                </Col>
                <Col>
                    <p>{price}</p>
                </Col>
                </Row>



                <Row>
                <Col>
                    <Badge bg="success">Parks</Badge>
                </Col>
                <Col>
                    <p>{parks}</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <Badge bg="success">Praking</Badge>
                </Col>
                <Col>
                    <p>{parking}</p>
                </Col>
                </Row>
                
                        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

SideCanvas.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  bed: PropTypes.number.isRequired,
  bath: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  parks: PropTypes.number.isRequired,
  parking: PropTypes.string.isRequired,
};

export default SideCanvas;
