import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

const Container = styled.div`
  background-color: #153e90;
  padding: 10px;
  border-top: 1px solid black;
  text-align: center;
  color: white;
`;

const ContextBar = ({ title }) => (
  <Container>{title}</Container>
);

ContextBar.propTypes = {
  title: PropType.string.isRequired
}

export default ContextBar;