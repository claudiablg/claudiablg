import { style } from 'treat';

import { Theme } from '@newrade/core-react-ui';

export const left = style(({ theme, cssTheme }: Theme) => ({
  justifyItems: 'flex-start',
  textAlign: 'left',
}));

export const right = style(({ theme, cssTheme }: Theme) => ({
  justifyItems: 'flex-end',
  textAlign: 'right',
}));

export const center = style(({ theme, cssTheme }: Theme) => ({
  justifyItems: 'center',
  textAlign: 'center',
}));
