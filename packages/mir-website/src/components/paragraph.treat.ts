import { DesignSystem, PARAGRAPH } from 'core-design-system';
import { style, CSSProperties } from 'treat';

type Styles = { [key in keyof typeof PARAGRAPH]: string };

const base: CSSProperties = {
  display: 'block',
};

export const large = style((theme: DesignSystem) => ({
  ...base,
  ...theme.typography.paragraphs.mobile.large.capsizeRem,
  fontFamily: theme.typography.paragraphs.mobile.large.fontFamily,
  fontWeight: theme.typography.paragraphs.mobile.large.fontWeight,
  textTransform: theme.typography.paragraphs.mobile.large.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.paragraphs.tablet.large.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.paragraphs.desktop.large.capsizeRem,
    },
  },
}));

export const medium = style((theme: DesignSystem) => ({
  ...base,
  ...theme.typography.paragraphs.mobile.medium.capsizeRem,
  fontFamily: theme.typography.paragraphs.mobile.medium.fontFamily,
  fontWeight: theme.typography.paragraphs.mobile.medium.fontWeight,
  textTransform: theme.typography.paragraphs.mobile.medium.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.paragraphs.tablet.medium.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.paragraphs.desktop.medium.capsizeRem,
    },
  },
}));

export const small = style((theme: DesignSystem) => ({
  ...base,
  ...theme.typography.paragraphs.mobile.small.capsizeRem,
  fontFamily: theme.typography.paragraphs.mobile.small.fontFamily,
  fontWeight: theme.typography.paragraphs.mobile.small.fontWeight,
  textTransform: theme.typography.paragraphs.mobile.small.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.paragraphs.tablet.small.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.paragraphs.desktop.small.capsizeRem,
    },
  },
}));

export const xSmall = style((theme: DesignSystem) => ({
  ...base,
  ...theme.typography.paragraphs.mobile.xSmall.capsizeRem,
  fontFamily: theme.typography.paragraphs.mobile.xSmall.fontFamily,
  fontWeight: theme.typography.paragraphs.mobile.xSmall.fontWeight,
  textTransform: theme.typography.paragraphs.mobile.xSmall.textTransform,
  '@media': {
    [`screen and (min-width: ${theme.layout.breakpoints.tabletPortrait})`]: {
      ...theme.typography.paragraphs.tablet.xSmall.capsizeRem,
    },
    [`screen and (min-width: ${theme.layout.breakpoints.desktopSmall})`]: {
      ...theme.typography.paragraphs.desktop.xSmall.capsizeRem,
    },
  },
}));

const styles: Styles = {
  large,
  medium,
  small,
  xSmall,
};
