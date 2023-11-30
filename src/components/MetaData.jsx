import React from 'react';
import { Helmet } from 'react-helmet';

const MetaData = ({ pageTitle, description}) => {
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default MetaData;
