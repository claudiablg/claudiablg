import { HEADING, TEXT_LEVEL } from '@newrade/core-design-system';
import { pascal, kebab } from 'case';
import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';
import { CommonComponentProps } from '../../props/component-common-props';
import * as stylesRef from './heading.treat';
import { formatAnchorId } from '../../utilities/text.utilities';

type Props = CommonComponentProps &
  HTMLAttributes<HTMLHeadingElement> & {
    variant?: HEADING;
    variantLevel?: TEXT_LEVEL;
  };

const defaultProps: Props = {
  variant: HEADING.h1,
  variantLevel: TEXT_LEVEL.primary,
  children: 'Heading',
};

export const Heading: React.FC<Props> = React.memo(({ variant, variantLevel, id, className, children, ...props }) => {
  const { styles } = useStyles(stylesRef);

  let type: keyof React.ReactHTML;

  switch (variant) {
    case HEADING.h1: {
      type = 'h1';
      break;
    }
    case HEADING.h2: {
      type = 'h2';
      break;
    }
    case HEADING.h3: {
      type = 'h3';
      break;
    }
    case HEADING.h4: {
      type = 'h4';
      break;
    }

    default: {
      type = 'h1';
      break;
    }
  }

  const defaultChildrenString = `${defaultProps.children as string} ${pascal(type)}`;
  const variantClass = `${styles[variant ? variant : (defaultProps.variant as HEADING)]}`;
  const variantLevelClass = `${styles[variantLevel ? variantLevel : (defaultProps.variantLevel as TEXT_LEVEL)]}`;
  const mergedClass = `${className || ''}`;

  const child = children ? (
    <div className={`${variantClass} ${variantLevelClass}`}>{children}</div>
  ) : (
    <div className={`${variantClass} ${variantLevelClass}`}>{defaultChildrenString}</div>
  );

  return React.createElement(type, {
    id: id ? id : typeof child === 'string' ? formatAnchorId(child) : formatAnchorId(defaultChildrenString),
    className: `${styles.wrapper} ${mergedClass}`,
    children: child,
    ...props,
  });
});