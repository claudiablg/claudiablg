import { style } from 'treat';

import { Theme } from '../design-system';

/**
 * Base
 */
export const base = style(({ theme, cssTheme }: Theme) => ({
  width: 'fit-content',
  borderRadius: '.25em',
  overflow: 'hidden',
  height: `auto`,
  margin: '0',
  padding: '0',
  border: '0',
  backgroundColor: '#555555',
  textTransform: 'lowercase',
  fontSize: 12,
  lineHeight: 1.25,
  fontWeight: 400,
  fontFamily: 'Verdana,Geneva,DejaVu Sans,sans-serif',
  textShadow: '0px .1em 0px rgba(0, 0, 0, 0.5)',
  color: 'white',

  background: 'linear-gradient(180deg, rgba(187, 187, 187, .1) 0%, rgba(0, 0, 0, .1) 100%)',
}));

export const name = style(({ theme, cssTheme }: Theme) => ({
  borderTopLeftRadius: '.25em',
  borderBottomLeftRadius: '.25em',
}));

export const nameSpan = style(({ theme, cssTheme }: Theme) => ({
  display: 'inline-block',
  padding: '.35em .5em',
  backgroundColor: `rgb(85, 85, 85)`,
}));

export const status = style(({ theme, cssTheme }: Theme) => ({
  borderTopRightRadius: '.25em',
  borderBottomRightRadius: '.25em',
  background: '#cccccc',
}));

export const statusSpan = style(({ theme, cssTheme }: Theme) => ({
  padding: '.35em .5em',
  display: 'inline-block',
}));

/**
 *
 * Variants
 *
 */

export const neutral = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: '#a7a7a7',
}));

export const success = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.successAction,
}));

export const warning = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.warningAction,
}));

export const error = style(({ theme, cssTheme }: Theme) => ({
  backgroundColor: cssTheme.colors.colorIntents.dangerAction,
}));
