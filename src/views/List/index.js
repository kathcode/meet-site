import React from 'react';

import ContextBar from '../../shared/components/ContextBar';
import SearchBar from '../../shared/components/SearchBar';
import CardList from '../../shared/components/CardList';

const List = () => (
  <>
    <ContextBar title="Sites" />
    <SearchBar />
    <CardList title="Title" subtitle="Subtitle" description="Description" />
    <CardList title="Title" subtitle="Subtitle" description="Description" />
    <CardList title="Title" subtitle="Subtitle" description="Description" />
  </>
);

export default List;
