import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';

// Material UI
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import Avatar from '../Avatar';
import Icon from '../Icon';

// Styles
import { Container, Content, Title } from './cardList.styled';

const CardList = ({
  title,
  subtitle,
  description,
  arrowPosition,
  bgColor,
  titleColor,
  pathUrl
}) => (
  <Container bgColor={bgColor}>
    {arrowPosition === 'left' &&
      <Link to={pathUrl}>
        <Icon>
          <ArrowBackIosIcon style={{ color: titleColor, fontSize: 20 }} />
        </Icon>
      </Link>
    }
    <Avatar label="C" width="50" height="50" />
    <Content>
      <div><Title titleColor={titleColor}>{title}</Title></div>
      <label>{subtitle}</label>
      <div>{description}</div>
    </Content>
    {arrowPosition === 'right' &&
      <Link to={pathUrl}>
        <Icon>
          <ArrowForwardIosIcon style={{ color: titleColor, fontSize: 20 }} />
        </Icon>
      </Link>
    }
  </Container>
);

CardList.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  description: PropType.string,
  arrowPosition: PropType.oneOf(['left', 'right']),
  bgColor: PropType.string,
  titleColor: PropType.string,
  pathUrl: PropType.string
}

CardList.defaultProps = {
  title: 'Title',
  subtitle: 'Label',
  description: 'Description',
  arrowPosition: 'right',
  bgColor: '#FFFFFF',
  titleColor: '#333333',
  pathUrl: '/'
}

export default CardList;
