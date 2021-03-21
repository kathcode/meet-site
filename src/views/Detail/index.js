import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { SiteService } from '../../services/sites';

import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';

const Detail = () => {
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
        <>
          <DetailHeader
            title={site.title}
            subtitle={site.address.street}
            description={site.contacts.main.firstName}
            label={site.title && site.title.charAt(0)}
          />
          <DetailContent
            imageUrl={site.images[0]}
            altImgAttribute={site.title}
            hostName={site.contacts.main.firstName}
            hostTitle={site.contacts.main.jobTitle}
            phoneNumber={site.contacts.main.phoneNumber}
            email={site.contacts.main.email}
            address={site.contacts.main.address.country}
          />
        </>
      }
    </>
  )
};

export default Detail;
