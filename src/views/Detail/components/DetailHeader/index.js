import React from 'react';
import PropType from 'prop-types';
import styled from 'styled-components';

// Shared components
import CardList from '../../../../shared/components/CardList';

const Container = styled.div`
  border-top: 1px solid black;
`;

const DetailHeader = ({ title, subtitle, description, label }) => (
  <Container>
    <CardList
      title={title}
      titleColor="#FFFFFF"
      subtitle={subtitle}
      description={description}
      arrowPosition="left"
      bgColor="#153e90"
      pathUrl=""
      label={label}
    />
  </Container>
);

DetailHeader.propTypes = {
  title: PropType.string,
  subtitle: PropType.string,
  description: PropType.string,
  arrowRight: PropType.bool,
  arrowLeft: PropType.bool,
  label: PropType.string
}

DetailHeader.defaultProps = {
  title: 'Title',
  subtitle: 'Label',
  description: 'Description',
  arrowRight: true,
  arrowLeft: false,
  label: ''
}

export default DetailHeader;