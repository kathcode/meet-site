import React from 'react';
import styled from 'styled-components';
import PropType from 'prop-types';

// Material UI
import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import Avatar from '../Avatar';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px;
`;

const Content = styled.div`
  flex-grow: 1;
  padding-left: 15px;
`;

const Arrow = styled.div`
  position: absolute;
  right: -5px;
`;

const CardList = ({ title, subtitle, description, arrowRight, arrowLeft }) => (
  <Container>
    {arrowLeft &&
      <Arrow>
        <IconButton edge="start" color="inherit" aria-label="menu" >
          <ArrowForwardIosIcon style={{ fontSize: 20 }} />
        </IconButton>
      </Arrow>
    }
    <Avatar label="C" width="50" height="50" />
    <Content>
      <div><strong>{title}</strong></div>
      <label>{subtitle}</label>
      <div>{description}</div>
    </Content>
    {arrowRight &&
      <Arrow>
        <IconButton edge="start" color="inherit" aria-label="menu" >
          <ArrowForwardIosIcon style={{ fontSize: 20 }} />
        </IconButton>
      </Arrow>
    }
  </Container>
);

CardList.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  description: PropType.string,
  arrowRight: PropType.bool,
  arrowLeft: PropType.bool,
}

CardList.defaultProps = {
  title: 'Title',
  subtitle: 'Label',
  description: 'Description',
  arrowRight: true,
  arrowLeft: false,
}

export default CardList;
