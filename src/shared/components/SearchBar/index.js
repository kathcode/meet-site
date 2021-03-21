import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const SearchBar = ({ options }) => (
  <Container>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      {options.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.text}
        </MenuItem>
      ))}
    </Select>
    <div>
      <IconButton edge="start" color="inherit" aria-label="menu" >
        <FilterListIcon />
      </IconButton>
      <IconButton edge="start" color="inherit" aria-label="menu" >
        <SearchIcon />
      </IconButton>
    </div>
  </Container>
);

SearchBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    text: PropTypes.string
  })).isRequired
}

export default SearchBar;