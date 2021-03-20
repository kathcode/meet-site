import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import IconButton from '@material-ui/core/IconButton';

const Icon = ({ children, onClick }) => (
  <IconButton onClick={onClick} edge="start" color="inherit" aria-label="menu" >
    {children}
  </IconButton>
);

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
}

Icon.defaultPropTypes = {
  onClick: () => {}
}

export default Icon;
