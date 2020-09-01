import { graphql } from 'gatsby';
import React from 'react';
import { TreatProvider, useStyles } from 'react-treat';
import { IndexPageQuery } from '../../types/graphql-types';
import { Banner } from '../components/banner';
import { BlogPreviewSection } from '../components/blog-preview/blog-preview-section';
import { Footer } from '../components/footer';
import { InfoSectionType1Group } from '../components/info-section/info-section-type-1-group';
import { InfoSectionType2 } from '../components/info-section/info-section-type-2';
import { InfoSectionType3 } from '../components/info-section/info-section-type-3';
import { InfoSectionType4 } from '../components/info-section/info-section-type-4';
import { NavBar } from '../components/nav-bar';
import { Newsletter } from '../components/newsletter/newsletter';
import { ViewportProvider } from '../context/viewport.context';
import { useViewportBreakpoint, useViewportValues, viewportContext } from '../hooks/use-viewport.hook';
import '../styles/font-faces.styles.css';
import * as stylesRef from '../styles/index.treat';
import { light } from '../themes/mir-theme.treat';

export const query = graphql`
  query indexPage {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
        logo {
          url
        }
      }
      assets(where: { fileName: "Office1.jpg" }) {
        url
      }
      pageIndices(first: 1) {
        id
        employeeEmployerSections {
          title
          titleHighlight
          titleTab
          type
          text
          showTabs
          actionText
          infoTiles {
            icon
            title
            text
          }
          childs {
            showTabs
            title
            titleHighlight
            titleTab
            type
            text
            actionText
          }
          image {
            url
          }
        }
      }
    }
  }
`;

export interface PageProps {
  data: IndexPageQuery;
  location: Location;
}

export const Root: React.FC<{}> = (props) => {
  return (
    <ViewportProvider context={viewportContext}>
      <TreatProvider theme={light}>{props.children}</TreatProvider>
    </ViewportProvider>
  );
};

const IndexPage: React.FC<PageProps> = (props) => {
  return (
    <Root>
      <Index {...props} />
    </Root>
  );
};

const Index: React.FC<PageProps> = ({ data, location }) => {
  const styles = useStyles(stylesRef);
  const { width } = useViewportValues();
  const { viewport } = useViewportBreakpoint();

  return (
    <div className={`${styles.wrapper}`}>
      <NavBar></NavBar>

      <Banner variant="primary"></Banner>

      {data.gcms.pageIndices[0].employeeEmployerSections.map((section, index) => {
        switch (section.type) {
          case 'type1group': {
            return <InfoSectionType1Group key={index} {...section} />;
          }
          case 'type2': {
            return <InfoSectionType2 key={index} align="AlignContentLeft" {...section} />;
            // return <InfoSectionType5 key={index} align="AlignContentLeft" {...section} />;
          }
          case 'type3': {
            return <InfoSectionType3 key={index} align="AlignContentRight" {...section} />;
          }
          case 'type4': {
            return <InfoSectionType4 key={index} {...section} />;
          }
          default: {
            return null;
          }
        }
      })}

      <BlogPreviewSection
        imageUrl={data.gcms.assets[0].url}
        paragraphContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit Nulla chronocrator accumsan, metus ultrices eleifend gravi."
        headingContent="Les dernières nouvelles"
      ></BlogPreviewSection>

      <Newsletter id="newsletter"></Newsletter>

      <Footer></Footer>
    </div>
  );
};

export default IndexPage;
