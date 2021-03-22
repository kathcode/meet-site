import React from 'react';
import PropTypes from 'prop-types';

import CircularProgress from '@material-ui/core/CircularProgress';

import ContextBar from '../../shared/components/ContextBar';
import SearchBar from '../../shared/components/SearchBar';
import CardList from '../../shared/components/CardList';

import { PaginationC, ProgressBarContainer } from './styled';

const List = ({ isLoading, sites, onNextPage, onSearch, onClear }) => {
  const options = [
    { value: 0, text: 'All sites' }
  ];

  return <>
    <ContextBar title="Sites" />
    <SearchBar options={options} onSearch={onSearch} onClear={onClear} />
    {isLoading && <ProgressBarContainer><CircularProgress /></ProgressBarContainer>}
      {!isLoading && sites.map(site => {
        const { id, title, address, images } = site;
        return <CardList
          key={id}
          title={title}
          subtitle={address.city}
          imageUrl={images[0]}
          pathUrl={`/detail/${id}`}
        />
      })}
      {!isLoading &&
        <PaginationC
          count={283} color="primary"
          boundaryCount={1}
          onChange={((ev, page) => onNextPage(page))}
        />
      }
  </>
};

List.propTypes = {
  isLoading: PropTypes.bool,
  sites: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    contacts: PropTypes.object,
    address: PropTypes.object,
    images: PropTypes.array
  })).isRequired,
  onNextPage: PropTypes.func,
  onSearch: PropTypes.func,
  onClear: PropTypes.func
}

List.defaultProps = {
  onNextPage: () => {},
  onSearch: () => {},
  onClear: () => {}
}

export default List;
