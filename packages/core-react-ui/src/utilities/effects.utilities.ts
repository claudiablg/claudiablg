import { BoxShadow, Color, Effects, Shadows } from '@newrade/core-design-system';
import { getCSSColor } from './colors.utilities';

/**
 * Transform the Effects object into a CSS compatible one.
 */
export function getCSSEffects(options: Effects): Effects<string, string> {
  const keys = Object.keys(options) as (keyof Effects)[];
  return keys.reduce((previous, current) => {
    const shadowsKey = Object.keys(options[current]) as (keyof Shadows)[];
    if (!previous[current]) {
      previous[current] = {} as Shadows<string, string>;
    }
    shadowsKey.forEach((shadow) => {
      previous[current][shadow] = getCSSShadow(options[current][shadow]);
    });
    return previous;
  }, {} as Effects<string, string>);
}

/**
 * Returns a CSS BoxShadow string with HSL color.
 */
export function getCSSShadow(options: BoxShadow<Color>): string {
  return `${options.offsetX}px ${options.offsetY}px ${options.blur}px ${options.spread}px ${getCSSColor(
    options.color
      ? options.color
      : {
          h: 100,
          s: 100,
          l: 100,
          a: 20,
        }
  )}`;
}