import React from 'react';
import PropType from 'prop-types';

import DetailHeader from './components/DetailHeader';
import DetailContent from './components/DetailContent';

const Detail = ({ siteData }) => (
  <>
    <DetailHeader title="Sites" />
    <DetailContent
      siteData={siteData}
    />
  </>
);

Detail.propTypes = {
  siteData: PropType.shape({
    imageUrl: PropType.string,
    altImgAttribute: PropType.string,
    hostName: PropType.string,
    hostTitle: PropType.string,
    phoneNumber: PropType.string,
    email: PropType.string,
    address: PropType.string
  }).isRequired
}

export default Detail;
