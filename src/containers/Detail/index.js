import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SiteService } from '../../services/sites';
import Detail from '../../views/Detail';

const DetailContainer = () => {
  let { id } = useParams();
  const [site, setSite] = useState({});  

  useEffect(() => {
    getSiteData();
  }, []);

  const getSiteData = async () => {
    const response = await SiteService.getSite(id);
    setSite(response);
  };

  return (
    <>
      {Object.keys(site).length &&
        <Detail site={site} />
      }
    </>
  )
};

export default DetailContainer;
