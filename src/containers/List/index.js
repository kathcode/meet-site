import React, { useState, useEffect } from 'react';

// Services
import { SiteService } from '../../services/sites';
import CardList from '../../shared/components/CardList';

import List from '../../views/List';

const ContainerList = () => {
  const [sites, setSites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSites();
  }, [])

  const getSites = async () => {
    const response = await SiteService.getSites();

    setSites(response);
    setIsLoading(false);
  }

  return (
    <List>
      {isLoading && <div>Loading</div>}
      {!isLoading && sites.map(site => {
        const { id, title, address } = site;
        return <CardList
          key={id}
          title={title}
          subtitle={address.city}
        />
      })}
    </List>
  )
}

export default ContainerList;