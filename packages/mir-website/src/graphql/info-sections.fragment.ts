import { graphql } from 'gatsby';

export const query = graphql`
  fragment InfoSections on GraphCMS_InfoSection {
    title
    titleHighlight
    titleTab
    type
    text
    showTabs
    actionText
    infoTiles {
      illustration
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
      url(transformation: { image: { resize: { width: 900, fit: max } } })
    }
  }
`;