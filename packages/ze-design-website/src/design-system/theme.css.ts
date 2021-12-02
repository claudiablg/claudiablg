import { createGlobalTheme } from '@vanilla-extract/css';

import {
  CSSRuntimeThemeConfig,
  CSSThemeProviderConfig,
} from '@newrade/core-react-ui/src/design-system/css-theme-config';
import {
  colorVars,
  effectsVars,
  layoutVars,
  sizingVars,
  typographyVars,
} from '@newrade/core-react-ui/theme';
import {
  darkCssTheme,
  darkCssThemeV2,
  lightCssTheme,
  lightCssThemeV2,
} from '@newrade/ze-design-system/src/design-system/theme';

/**
 *
 * Light theme
 *
 */

const lightThemeConfig: CSSRuntimeThemeConfig = {
  name: lightCssTheme.name,
  colorScheme: lightCssTheme.colorScheme,
  default: true,
  classNames: {},
};

// @ts-expect-error
createGlobalTheme(':root', colorVars, lightCssThemeV2.colors);
createGlobalTheme(':root', {
  myColor: 'hsl(100, 100%, 50%)',
  myColorhsl: 'hsl(222 50% 50%)',
});
// @ts-expect-error
createGlobalTheme(':root', effectsVars, lightCssThemeV2.effects);
// @ts-expect-error
createGlobalTheme(':root', sizingVars, lightCssThemeV2.sizing);
// @ts-expect-error
createGlobalTheme(':root', layoutVars, lightCssThemeV2.layout);
// @ts-expect-error
createGlobalTheme(':root', typographyVars, lightCssThemeV2.typography);
// createGlobalTheme(':root', buttonsVars, lightCssThemeV2.components);

/**
 *
 * Dark theme
 *
 */

const darkThemeConfig: CSSRuntimeThemeConfig = {
  name: darkCssTheme.name,
  colorScheme: darkCssTheme.colorScheme,
  default: false,
  classNames: {
    colors: `global-theme-colors-${darkCssTheme.name}`,
  },
};

// @ts-expect-error
createGlobalTheme(`.${darkThemeConfig.classNames.colors}`, colorVars, darkCssThemeV2.colors);

/**
 *
 * CSS Theme provider config
 *
 */

export const cssThemeConfig: CSSThemeProviderConfig = {
  autoDetect: true,
  themes: [lightThemeConfig, darkThemeConfig],
};
