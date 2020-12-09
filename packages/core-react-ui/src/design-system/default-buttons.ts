import { Buttons } from '@newrade/core-design-system';
import { defaultColorIntents } from './default-colors';

export const defaultButtons: Buttons = {
  sizes: {
    large: {
      padding: {
        default: 2,
      },
    },
    medium: {
      padding: {
        default: 2,
      },
    },
    small: {
      padding: {
        default: 2,
      },
    },
  },
  variants: {
    primary: {
      textColor: defaultColorIntents.primaryText,
    },
    primaryReversed: {
      textColor: defaultColorIntents.primaryText,
    },
    secondary: {
      textColor: defaultColorIntents.primaryText,
    },
    secondaryReversed: {
      textColor: defaultColorIntents.primaryText,
    },
    tertiary: {
      textColor: defaultColorIntents.primaryText,
    },
    tertiaryReversed: {
      textColor: defaultColorIntents.primaryText,
    },
  },
};