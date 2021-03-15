import React from 'react';
import styled from 'styled-components';

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

const SearchBar = () => (
  <Container>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
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

export default SearchBar;