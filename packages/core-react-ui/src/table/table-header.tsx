import React, { HTMLAttributes } from 'react';
import { useStyles } from 'react-treat';

import { PrimitiveProps } from '../primitive/primitive.props';

import * as stylesRef from './table-header.treat';

type Props = PrimitiveProps & HTMLAttributes<HTMLHeadingElement> & {};

const defaultProps: Props = {
  children: 'Thead',
};

/**
 * The HTMLParagraphElement interface provides special properties
 * (beyond those of the regular HTMLElement object interface it inherits) for manipulating <p> elements.
 * @see https://devdocs.io/dom/htmlparagraphelement
 */
export const TableHeader: React.FC<Props> = React.memo(({ className, ...props }) => {
  const { styles: styles } = useStyles(stylesRef);

  const type = 'thead';

  return React.createElement(type, {
    className: `${className || ''} ${styles.thead}`,
    ...props,
  });
});
