import React from 'react';

import { LinkVariant, Variant } from '@newrade/core-design-system';
import { Link, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const LinksLevel: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.primary}></Link>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.secondary}></Link>
      <Link href={'#'} variant={LinkVariant.underline} variantLevel={Variant.tertiary}></Link>
    </>
  );
};
