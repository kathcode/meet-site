import React from 'react';
import PropTypes from 'prop-types';

import ContextBar from '../../shared/components/ContextBar';
import SearchBar from '../../shared/components/SearchBar';
import CardList from '../../shared/components/CardList';

import { PaginationC } from './styled';

const List = ({ isLoading, sites, onNextPage }) => {
  const options = [
    { value: 0, text: 'All sites' }
  ];

  return <>
    <ContextBar title="Sites" />
    <SearchBar options={options} />
    {isLoading && <div>Loading</div>}
      {!isLoading && sites.map(site => {
        const { id, title, address, images } = site;
        return <CardList
          key={id}
          title={title}
          subtitle={address.city}
          imageUrl={images[0]}
          pathUrl={`/blog/${id}`}
        />
      })}
      {!isLoading &&
        <PaginationC
          count={340} color="primary"
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
  onNextPage: PropTypes.func
}

List.defaultProps = {
  onNextPage: () => {}
}

export default List;
