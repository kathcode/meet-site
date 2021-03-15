import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '../Avatar';


// Styles
import { Container, Label, RightMenu } from './header.styled';

const Header = () => (
  <Container>
    <IconButton edge="start" color="inherit" aria-label="menu" >
      <MenuIcon style={{ fontSize: 30 }} />
    </IconButton>
    <Label>Scheduling</Label>
    <RightMenu>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <AppsIcon style={{ fontSize: 30 }} />
      </IconButton>
      <Avatar label="C" />
    </RightMenu>
  </Container>
);

export default Header;