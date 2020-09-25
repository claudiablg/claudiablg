import {
  getMetaBasicTags,
  getMetadataOpenGraphWebsiteTags,
  getMetadataTwitterTags,
  OPEN_GRAPH_TYPE,
} from '@newrade/core-react-ui';
import { graphql } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../layouts';
import { AboutPageFrQuery } from '../../types/graphql-types';
import { About } from '../templates/about-page.template';

export const AboutPageFRQuery = graphql`
  query AboutPageFR {
    site {
      ...SiteMetadata
    }
    graphCmsCompanyInfo {
      ...CompanyInfo
    }
    graphCmsPage(name: { eq: "About" }, locale: { in: [fr, en] }) {
      ...Page
    }
    routes: graphCmsPage(name: { ne: "Not Found" }, locale: { in: [fr, en] }) {
      name
      title
      route
    }
    bannerImageMobile: file(name: { eq: "ImageOffice01" }) {
      ...MobileFluidImage
    }
    bannerImageDesktop: file(name: { eq: "ImageOffice01" }) {
      ...DesktopFluidImage
    }
  }
`;

interface PageProps {
  data: AboutPageFrQuery;
  location: Location;
}

const AboutPage: React.FC<PageProps> = (props) => {
  return (
    <Layout
      location={props.location}
      logoURL={props.data.graphCmsCompanyInfo[0].logo?.url}
      linkedinPageURL={props.data.graphCmsCompanyInfo[0].linkedinPageUrl}
      facebookPageURL={props.data.graphCmsCompanyInfo[0].facebookPageUrl}
      instagramPageURL={props.data.graphCmsCompanyInfo[0].instagramPageUrl}
      twitterPageURL={props.data.graphCmsCompanyInfo[0].twitterPageUrl}
      pages={props.data.gcms.routes}
    >
      <Helmet>
        {getMetaBasicTags()}
        {getMetadataOpenGraphWebsiteTags({
          type: OPEN_GRAPH_TYPE.WEBSITE,
          title: `${props.data.gcms.pages[0]?.title}`,
          url: `${props.data.site?.siteMetadata?.siteUrl}${props.data.gcms.pages[0]?.route}`,
          description: `${props.data.gcms.pages[0]?.description}`,
          image: `${props.data.gcms.pages[0]?.bannerImages[0]?.url}`,
          site_name: `${props.data.graphCmsCompanyInfo[0].metadataSiteName}`,
          lang: 'fr',
          locale: 'fr_CA',
          localeAlternate: 'en_CA',
        })}
        {getMetadataTwitterTags({
          card: 'summary',
          creator: `${props.data.graphCmsCompanyInfo[0].metadataTwitterCreator}`,
          site: `${props.data.graphCmsCompanyInfo[0].metadataTwitter}`,
        })}
      </Helmet>
      <About {...props} />
    </Layout>
  );
};

export default AboutPage;
