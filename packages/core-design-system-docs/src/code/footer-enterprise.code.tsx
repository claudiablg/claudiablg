import React from 'react';

import { FooterEnterprise } from '@newrade/core-gatsby-ui/src';
import { useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const FootersEnterprise: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <FooterEnterprise
        Copyright={<>© 2020 All Right Reserved - Company Inc.</>}
      ></FooterEnterprise>
    </>
  );
};
