import React from 'react';

import { Placeholder } from '@newrade/core-gatsby-ui/src/docs-components/placeholder';
import { Stack, useTreatTheme } from '@newrade/core-react-ui';
import { sizeVars } from '@newrade/core-react-ui/theme';
type Props = {};

export const LayoutStack: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Stack gap={[sizeVars.x3]}>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
        <Placeholder></Placeholder>
      </Stack>
    </>
  );
};
