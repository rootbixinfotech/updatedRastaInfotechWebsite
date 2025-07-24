import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, keywords, canonical, children }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={canonical} />}
      {children}
    </Helmet>
  );
};

export default Seo; 