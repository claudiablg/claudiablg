import React from 'react';
import { useStyles } from 'react-treat';
import * as styleRefs from './cluster.treat';
import { CommonComponentProps } from '../../props/component-common-props';
import {
  TextAlignProperty,
  AlignItemsProperty,
  JustifyContentProperty,
  AlignContentProperty,
  JustifyItemsProperty,
} from 'csstype';
import { SIZE } from '@newrade/core-design-system';

type OwnProps = CommonComponentProps &
  Partial<{
    gap: string | SIZE;
    alignItems: AlignItemsProperty;
    justifyContent: [JustifyContentProperty, JustifyContentProperty, JustifyContentProperty];
    alignContent: AlignContentProperty;
    justifyItems: JustifyItemsProperty;
    maxWidth: string;
    minWidth: string;
  }>;

export const Cluster: React.FC<OwnProps> = ({
  as,
  className = '',
  gap = '',
  style = {},
  justifyContent = [],
  justifyItems,
  maxWidth,
  minWidth,
  ...props
} = {}) => {
  const { styles } = useStyles(styleRefs);
  const [mobileJustifyContent, tabletJustifyContent, desktopJustifyContent] = justifyContent;

  return React.createElement(as || 'div', {
    className: `${className || ''} ${styles.wrapper}`,
    style: {
      ...style,
      gap,
      maxWidth,
      minWidth,
      justifyItems,
      // @ts-ignore
      '--mobileTextAlign': mobileJustifyContent,
      '--tabletTextAlign': tabletJustifyContent,
      '--desktopTextAlign': desktopJustifyContent,
    },
    ...props,
  });
};