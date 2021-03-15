import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #153e90;
  padding: 10px;
  border-top: 1px solid black;
  text-align: center;
  color: white;
`;

const ContextBar = ({ title }) => (
  <Container>{title}</Container>
)

export default ContextBar;