import React from 'react';
import PropTypes from 'prop-types';

import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';

const Detail = ({ site }) => (
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
);

Detail.propTypes = {
  site: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    contacts: PropTypes.object,
    address: PropTypes.object,
    images: PropTypes.array
  })
}

export default Detail;
