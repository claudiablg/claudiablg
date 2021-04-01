import React from 'react';
import { useStyles } from 'react-treat';
import { useTreatTheme } from '../hooks/use-treat-theme';
import { Cluster } from '../layout/cluster';
import { CommonComponentProps } from '../props/component-common.props';
import { Label } from '../text/label';
import * as styleRefs from './online-indicator.treat';

type Props = CommonComponentProps & {
  status?: 'online' | 'offline' | 'loading';
};

export const OnlineIndicator: React.FC<Props> = ({ id, style, className, status = 'loading', children, ...props }) => {
  const { styles } = useStyles(styleRefs);
  const { theme, cssTheme } = useTreatTheme();

  return (
    <Cluster
      justifyContent={['flex-start']}
      className={`${styles.status} ${status === 'online' ? styles.statusOnline : styles.statusOffline}`}
      gap={[cssTheme.sizing.var.x2]}
    >
      <div className={styles.statusDot}></div>
      <Label>{children || status}</Label>
    </Cluster>
  );
};