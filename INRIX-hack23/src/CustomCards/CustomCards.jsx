// CustomCard.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideCanvas from '../SideCanvas/SideCanvas';

const CustomCard = ({ listing, onClick }) => {

  const [isCanvasVisible, setCanvasVisible] = useState(false);

  const handleButtonClick = () => {
    // Handle button click logic
    setCanvasVisible(true); // Show the canvas component
  };

  return (
    <div>
    <Card style={{ width: '12rem', backgroundColor: 'rgba(255,255,255, 0.7)'  }}>
      <Card.Img
        variant="top"
        src={listing.imgSrc}
        style={{ width: '100%', height: '5rem', objectFit: 'cover' }}

      />
      <Card.Body >
        <Row>
          <Col>
            <Card.Title>Score:</Card.Title>
          </Col>
          <Col>
            <Card.Title>{listing.propertyScore}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card.Title>Name:</Card.Title>
          </Col>
          <Col>
            <Card.Title>{listing.streetAddress}</Card.Title>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={handleButtonClick}>
              Check it out!
            </Button>
          </Col>
        </Row>
      </Card.Body>    
    </Card>
    {isCanvasVisible && 
      <SideCanvas
        listing = {listing}

      />} 
  </div>
  );
};

CustomCard.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomCard;
