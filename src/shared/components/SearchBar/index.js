import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material UI
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import FilterListIcon from '@material-ui/icons/FilterList';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
`;

const SearchBar = ({ options, onSearch, onClear }) => {
  const [showInputSearch, setShowInputSearch] = useState(false);

  const onHandlerClear = () => {
    setShowInputSearch(false);
    onClear();
  }

  return (
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
      {showInputSearch &&
        <>
          <TextField
            id="standard-basic"
            label="Standard"
            onChange={(ev) => onSearch(ev.target.value)}
          />
          <CloseIcon onClick={onHandlerClear} />
        </>
      }
      <div>
        <IconButton edge="start" color="inherit" aria-label="menu" >
          <FilterListIcon />
        </IconButton>
        <IconButton
          onClick={() => setShowInputSearch(!showInputSearch)}
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </Container>
  )
};

SearchBar.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    text: PropTypes.string
  })).isRequired,
  onSearch: PropTypes.func,
  onClear: PropTypes.func
}

SearchBar.defaultProps = {
  onSearch: () => {},
  onClear: () => {},
}

export default SearchBar;