import { GatsbyLink } from '@newrade/core-gatsby-ui';
import {
  Main,
  MainWrapper,
  NavBar,
  NavItem,
  NavItemGroup,
  SideBar,
  Stack,
  useTreatTheme,
} from '@newrade/core-react-ui';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode } from 'react';
import { useStyles } from 'react-treat';
import { useDesignSystemNavItems } from '../hooks/use-design-system-nav-items.hook';
import Logo from '../images/logo.svg';
import MobileLogo from '../images/logo-symbol.svg';
import * as styleRefs from './design-system.layout.treat';

type LayoutProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }>;

export const LayoutDesignSystem = React.memo<LayoutProps>((props) => {
  const { styles } = useStyles(styleRefs);
  const { cssTheme } = useTreatTheme();
  const navItems = useDesignSystemNavItems();
  const navItemsByDirName = new Set(navItems.map((item) => item.dirName));
  return (
    <MainWrapper>
      <NavBar
        DesktopSvgLogo={<Logo height={'20'} fill={cssTheme.colors.colorIntents.primary} />}
        MobileSvgLogo={<MobileLogo height={'29'} fill={cssTheme.colors.colorIntents.primary} />}
        maxWidth={'100%'}
      ></NavBar>

      {navItems ? (
        <SideBar>
          <Stack gap={[cssTheme.sizing.var.x4]}>
            {[...navItemsByDirName].map((dirName, index) => {
              return (
                <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                  {dirName === '' ? (
                    <NavItemGroup>Docs</NavItemGroup>
                  ) : (
                    <NavItemGroup>{title(dirName || '')}</NavItemGroup>
                  )}
                  <Stack>
                    {navItems
                      .filter((item) => item.dirName === dirName)
                      .map((item, itemIndex) => {
                        return (
                          <NavItem
                            key={itemIndex}
                            active={item.path === props.location?.pathname}
                            AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                          >
                            {item.name}
                          </NavItem>
                        );
                      })}
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </SideBar>
      ) : null}

      <Main navbarPadding={true}>{props.children}</Main>
    </MainWrapper>
  );
});
