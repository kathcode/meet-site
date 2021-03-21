import React, { useState, useEffect } from 'react';
import _ from "lodash";

// Services
import { SiteService } from '../../services/sites';

import List from '../../views/List';

const ContainerList = () => {
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSites();
  }, []);

  const getSites = async (current) => {
    const response = await SiteService.getSites(current, 6);

    setSites(response);
    setIsLoading(false);
  }

  const nextPage = (page) => {
    getSites(page);
  }

  const search = async (term) => {
    const response = await SiteService.search(term);

    setSites(response);
    setIsLoading(false);
  }


  return (
    <List
      isLoading={isLoading}
      sites={sites}
      onNextPage={nextPage}
      onSearch={_.debounce(search, 2000)}
      onClear={getSites}
    />
  )
}

export default ContainerList;