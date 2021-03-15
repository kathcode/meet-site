import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { Container, Label, Image } from './avatar.styled';

const Avatar = ({ imageUrl, label, alt, color, width, height }) => (
  <Container color={color} width={width} height={height}>
    {imageUrl && <Image src={imageUrl} alt={alt} />}
    {!imageUrl && <Label>{label}</Label>}
  </Container>
);

Avatar.propTypes = {
  imageUrl: PropTypes.string,
  label: PropTypes.string.isRequired,
  alt: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

Avatar.defaultProps = {
  imageUrl: null,
  alt: 'image',
  color: '#ccc',
  width: 30,
  height: 30
}

export default Avatar;
