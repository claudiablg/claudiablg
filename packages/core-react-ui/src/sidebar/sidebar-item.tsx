import React, { AnchorHTMLAttributes, useRef } from 'react';
import { useStyles } from 'react-treat';

import { LABEL_SIZE, LinkProps } from '@newrade/core-design-system';

import { useCommonProps } from '../hooks/use-common-props.hook';
import { usePreventPinchZoom } from '../hooks/use-prevent-pinch-zoom';
import { PrimitiveProps } from '../primitive/primitive.props';
import { Label } from '../text/label';

import * as styleRefs from './sidebar-item.treat';

type Props = PrimitiveProps &
  AnchorHTMLAttributes<any> &
  Pick<LinkProps, 'role' | 'variant' | 'variantIcon' | 'variantSize' | 'variantLevel'> & {
    disabled?: boolean;
    active?: boolean;
  };

export const SidebarItem: React.FC<Props> = ({
  id,
  style,
  className,
  active,
  disabled,
  AsElement,
  ...props
}) => {
  const { styles } = useStyles(styleRefs);
  const ref = useRef<HTMLButtonElement>(null);
  const commonProps = useCommonProps({
    id,
    style,
    className,
    classNames: [styles.wrapper, active && styles.active, disabled && styles.disabled],
  });

  usePreventPinchZoom(ref.current);

  const WrapperElement = AsElement
    ? React.cloneElement(
        AsElement as React.ReactElement,
        {
          id,
          ...props,
        },
        <div {...commonProps}>
          <Label style={{ color: 'inherit' }} variant={LABEL_SIZE.medium}>
            {props.children}
          </Label>
        </div>
      )
    : null;

  if (WrapperElement) {
    return WrapperElement;
  }

  return (
    <div {...commonProps}>
      <Label style={{ color: 'inherit' }} variant={LABEL_SIZE.medium}>
        {props.children}
      </Label>
    </div>
  );
};
