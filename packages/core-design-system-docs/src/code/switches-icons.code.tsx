import React from 'react';
import { IoCheckmarkOutline, IoCloseOutline, IoMoon, IoSunny } from 'react-icons/io5';

import { Switch, useTreatTheme } from '@newrade/core-react-ui';

type Props = {};

export const SwitchesIcons: React.FC<Props> = (props) => {
  const { theme, cssTheme } = useTreatTheme();

  return (
    <>
      <Switch
        value={'on'}
        IconOff={<IoMoon />}
        colorOff={cssTheme.colors.colors.grey[100]}
        IconOn={<IoSunny />}
        colorOn={cssTheme.colors.colors.grey[100]}
      ></Switch>
      <Switch
        value={'on'}
        IconOff={<IoCloseOutline />}
        colorOff={cssTheme.colors.colorIntents.backgroundDisabled}
        IconOn={<IoCheckmarkOutline />}
        colorOn={cssTheme.colors.colorIntents.successAction}
      ></Switch>
    </>
  );
};
