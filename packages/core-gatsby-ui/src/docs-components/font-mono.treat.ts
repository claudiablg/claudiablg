import { Theme } from '@newrade/core-react-ui/src';
import { getCSSTextStyles } from '@newrade/core-react-ui/src/utilities';
import capsize from 'capsize';
import { style } from 'treat';

export const styles = {
  wrapper: style(({ theme, cssTheme }: Theme) => ({})),

  lettersSansMono: style(({ theme, cssTheme }: Theme) => ({
    ...capsize({
      fontMetrics: theme.typography.fonts.monospace[0].fontMetrics,
      capHeight: 100,
      lineGap: 10,
    }),
    fontFamily: theme.typography.fonts.monospace[0].name,
  })),
  paragraphMono: style(({ theme, cssTheme }: Theme) => ({
    ...getCSSTextStyles(cssTheme.typography.paragraphs.mobile.medium),
    fontFamily: cssTheme.typography.fonts.monospace[0].name,
  })),

  letters: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 400,
  })),
  lettersMedium: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 500,
  })),
  lettersBold: style(({ theme, cssTheme }: Theme) => ({
    fontWeight: 600,
  })),
};
