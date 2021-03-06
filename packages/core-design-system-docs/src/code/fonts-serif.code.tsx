import React from 'react';

import { FontSerif } from '@newrade/core-gatsby-ui/src/docs-components/font-serif';
import { useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const FontsSerif: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return <FontSerif></FontSerif>;
};
