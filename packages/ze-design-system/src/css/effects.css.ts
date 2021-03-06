import { createGlobalTheme } from '@vanilla-extract/css';

import { effectsVars } from '@newrade/core-react-ui/theme';

import { lightCssThemeV2 } from '../design-system/theme';

/**
 *
 * Light theme
 *
 */

createGlobalTheme(':root', effectsVars, lightCssThemeV2.effects);
