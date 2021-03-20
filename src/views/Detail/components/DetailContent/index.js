import React from 'react';
import PropType from 'prop-types';
// Material UI
import PersonIcon from '@material-ui/icons/Person';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import RoomIcon from '@material-ui/icons/Room';

import { Info } from './styled';
import Icon from '../../../../shared/components/Icon';

const IconSize = { fontSize: 30 };

const DetailContent = ({
  siteData: { 
    imageUrl,
    altImgAttribute,
    hostName,
    hostTitle,
    phoneNumber,
    email,
    address
  }
}) => (
  <div>
    <img width="100%" src={imageUrl} alt={altImgAttribute} />
    <Info>
      <Icon>
        <PersonIcon style={IconSize} />
      </Icon>
      <div>
        <div>{hostName}</div>
        <small>{hostTitle}</small>
      </div>
    </Info>

    <Info>
      <Icon>
        <PhoneIcon style={IconSize} />
      </Icon>
      <p>{phoneNumber}</p>
    </Info>

    <Info>
      <Icon>
        <EmailIcon style={IconSize} />
      </Icon>
      <p>{email}</p>
    </Info>

    <Info>
      <Icon>
        <RoomIcon style={IconSize} />
      </Icon>
      <p>{address}</p>
    </Info>
  </div>
);

DetailContent.propTypes = {
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

export default DetailContent;
