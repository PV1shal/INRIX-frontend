// CustomCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CustomCard = ({ score, name, imageUrl, onClick }) => (
  <Card style={{ width: '12rem' }}>
    <Card.Img
      variant="top"
      src={imageUrl}
      style={{ width: '100%', height: '5rem', objectFit: 'cover' }}
    />
    <Card.Body>
      <Card.Title>Score: {score}</Card.Title>
      <Card.Title>{name}</Card.Title>
      
      <Button variant="primary" onClick={onClick}>
        Get more spefic information about this application and socre
      </Button>
    </Card.Body>
  </Card>
);

CustomCard.propTypes = {
  score: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomCard;
