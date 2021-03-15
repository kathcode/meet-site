import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${ props => props.color };
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const Label = styled.label`
  text-transform: capitalize;
  font-weight: 600;
  font-size: 1.2rem;
  margin-bottom: 1px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;