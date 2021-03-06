import React from 'react';

import { PARAGRAPH_SIZE, TEXT_STYLE } from '@newrade/core-design-system';
import { lorenipsum } from '@newrade/core-gatsby-ui/src/docs-components/loren-ipsum';
import { Paragraph, Stack, useTreatTheme } from '@newrade/core-react-ui';
import { keys } from '@newrade/core-react-ui/utilities';

type Props = {};

export const Paragraphs: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Stack gap={[cssTheme.sizing.var.x3]}>
      {keys(PARAGRAPH_SIZE).map((variant, index) => (
        <Paragraph key={index} variant={PARAGRAPH_SIZE[variant]}>
          {lorenipsum}
        </Paragraph>
      ))}

      {keys(TEXT_STYLE)
        .filter((style) => cssTheme.typography.paragraphs.styles[style])
        .map((variant, index) => (
          <Paragraph key={index} variantStyle={TEXT_STYLE[variant]}>
            {lorenipsum}
          </Paragraph>
        ))}
    </Stack>
  );
};
