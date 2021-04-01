import { graphql, useStaticQuery } from 'gatsby';
import { Navigation } from '../navigation/navigation.model';
import { getNavigationFromPageNodes } from '../utilities/navigation.utilities';

const query = graphql`
  query DocsLayout {
    pages: allSitePage(filter: { path: { glob: "**/docs/{**,*}" } }) {
      totalCount
      nodes {
        id
        path
        context {
          siteMetadata {
            description
            languages {
              defaultLangKey
              langs
            }
            siteEnv
            siteUrl
            title
          }
          id
          name
          locale
          layout
          template
        }
      }
    }
  }
`;

export function useDocsNavigation(): Navigation {
  const data = useStaticQuery(query);

  return getNavigationFromPageNodes({
    name: 'docs navigation',
    pageNodes: data.pages.nodes,
  });
}

export function useDocsPageNodes() {
  const data = useStaticQuery(query);
  return data.pages.nodes;
}