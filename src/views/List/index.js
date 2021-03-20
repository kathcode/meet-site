import React from 'react';
import PropType from 'prop-types';

import ContextBar from '../../shared/components/ContextBar';
import SearchBar from '../../shared/components/SearchBar';

const List = ({ children }) => (
  <>
    <ContextBar title="Sites" />
    <SearchBar />
    {children}
  </>
);

List.propTypes = {
  children: PropType.node
}

export default List;
