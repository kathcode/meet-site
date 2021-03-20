import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px;
  background-color: ${props => props.bgColor};
`;

export const Content = styled.div`
  flex-grow: 1;
  padding-left: 15px;
`;

export const Title = styled.strong`
  color: ${props => props.titleColor};
`;