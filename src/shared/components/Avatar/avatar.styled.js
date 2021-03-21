import styled from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${ props => props.imageUrl? 'transparent' : props.color };
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
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;