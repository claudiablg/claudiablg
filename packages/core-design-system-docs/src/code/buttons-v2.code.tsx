import React from 'react';

import { Variant } from '@newrade/core-design-system';
import { ButtonV2, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const ButtonsV2: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <ButtonV2 variant={Variant.primary}></ButtonV2>
    </>
  );
};
