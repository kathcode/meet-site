import React, { useState, useEffect } from 'react';

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

  return (
    <List isLoading={isLoading} sites={sites} onNextPage={nextPage} />
  )
}

export default ContainerList;