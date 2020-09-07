import { DesignSystem, createShadow } from 'core-design-system';
import { globalStyle, style } from 'treat';

export const wrapper = style((theme: DesignSystem) => ({
  backgroundColor: theme.colors.greyscale100,
}));
export const container = style((theme: DesignSystem) => ({
  margin: '0 auto',
  maxWidth: '1200px',
  padding: `${theme.sizing.sizes.x5}`,

  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {},
  },
}));
export const title = style((theme: DesignSystem) => ({
  textAlign: 'center',
  marginRight: 'auto',
  marginLeft: 'auto',
  maxWidth: '474px',
  padding: ` ${theme.sizing.sizes.x5} 0`,

  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {},
  },
}));
export const content = style((theme: DesignSystem) => ({
  display: 'grid',
  gridColumn: '1',
  gridTemplateColumns: '1fr',
  gridGap: `0 ${theme.sizing.sizes.x4}`,

  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {
      gridColumn: '1',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: `0 ${theme.sizing.sizes.x4}`,
    },
  },
}));
export const tileComment = style((theme: DesignSystem) => ({
  maxWidth: '350px',
  margin: '0 auto',
  paddingBottom: `${theme.sizing.sizes.x4}`,

  '@media': {
    [theme.layout.media.tablet]: { maxWidth: '450px' },

    [theme.layout.media.desktop]: {},
  },
}));
export const blocContent = style((theme: DesignSystem) => ({
  position: 'relative',
  padding: `${theme.sizing.sizes.x4}`,
  boxShadow: createShadow({
    ...theme.effects.shadows.medium,
    offsetX: 6,
    offsetY: 6,
  }).css,
  borderRadius: '30px 30px 30px 0px',
  marginBottom: '25px',

  backgroundColor: theme.colors.greyscale0,

  '@media': {
    [theme.layout.media.tablet]: {},

    [theme.layout.media.desktop]: {},
  },
}));
export const triangle = style((theme: DesignSystem) => ({
  position: 'absolute',
  width: '0',
  height: '0',
  borderTop: '0px solid transparent',
  borderLeft: `25px solid ${theme.colors.greyscale0}`,
  borderBottom: '25px solid transparent',
  bottom: '-25px',
  left: '0',
}));
export const author = style((theme: DesignSystem) => ({
  paddingTop: `${theme.sizing.sizes.x4}`,
  display: 'grid',
  gridGap: `${theme.sizing.sizes.x2}`,
}));
export const name = style((theme: DesignSystem) => ({}));
export const job = style((theme: DesignSystem) => ({
  color: theme.colors.primary500,
}));
