import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Row, Col, Badge, Stack } from 'react-bootstrap';

const SideCanvas = ({ listing }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} style={{ backgroundColor: 'rgba(200,200, 200, 0.9)'  }}>
      <Offcanvas.Header closeButton>
            <Row>
                <Col>
                <Offcanvas.Title style={{ fontSize: '1.5rem' }}>{listing.streetAddress}</Offcanvas.Title>
                </Col>
            </Row>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <img src={listing.imgSrc} alt="Property" style={{ width: '100%', marginBottom: '16px' }} />
                <Row>
                <Col>
                    <Badge bg="success">Bed</Badge>
                </Col>
                <Col>
                    <p>{listing.bedrooms}</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">Bath</Badge>
                </Col>
                <Col>
                    <p>{listing.bathrooms}</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">Open House</Badge>
                </Col>
                <Col>
                    <p>{listing.openHouse}</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">Living Area</Badge>
                </Col>
                <Col>
                    <p>{583}</p>
                </Col>
                </Row>
                
                <Row>
                <Col>
                    <Badge bg="success">Home Status</Badge>
                </Col>
                <Col>
                    <p>{listing.homeStatus}</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">Price</Badge>
                </Col>
                <Col>
                    <p>{listing.price}</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">Zillow Owned</Badge>
                </Col>
                <Col>
                    <p>false</p>
                </Col>
                </Row>

                <Row>
                <Col>
                    <Badge bg="success">On Zillow</Badge>
                </Col>
                <Col>
                    <p>{listing.daysOnZillow}</p>
                </Col>
                </Row>
                
                        
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

SideCanvas.propTypes = {

};

export default SideCanvas;
