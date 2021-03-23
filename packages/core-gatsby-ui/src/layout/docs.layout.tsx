import {
  ButtonIcon,
  ButtonSize,
  HEADING,
  LABEL_SIZE,
  TEXT_STYLE,
  Variant,
  VIEWPORT,
} from '@newrade/core-design-system';
import { GatsbyLink, NavbarStartup } from '@newrade/core-gatsby-ui/src';
import {
  BoxV2,
  Button,
  Cluster,
  DesktopSideBar,
  Heading,
  Label,
  Link,
  Main,
  MainWrapper,
  MobileSideBar,
  NavItem,
  NavItemGroup,
  Stack,
  useIsSSR,
  useTreatTheme,
  useViewportBreakpoint,
} from '@newrade/core-react-ui';
import { IoClose } from '@react-icons/all-files/io5/IoClose';
import { title } from 'case';
import { PageProps } from 'gatsby';
import React, { ReactNode, useEffect, useState } from 'react';
import { Navigation } from '../api/navigation.model';

export type LayoutDocsProps = Partial<Omit<PageProps, 'children'> & { children: ReactNode }> & {
  navigation?: Navigation;
  MobileSvgLogo?: React.ReactNode;
  DesktopSvgLogo?: React.ReactNode;
};

export const LayoutDocs = React.memo<LayoutDocsProps>(({ navigation, MobileSvgLogo, DesktopSvgLogo, ...props }) => {
  const isSSR = useIsSSR();
  const { cssTheme } = useTreatTheme();

  /**
   * Handle sidebar events
   */
  const { viewport } = useViewportBreakpoint();
  const [mobileSidebarOpened, setMobileSidebarOpened] = useState<boolean>(false);
  useEffect(() => {
    let timeout: number;
    if (viewport === VIEWPORT.desktop) {
      timeout = window.setTimeout(() => {
        setMobileSidebarOpened(false);
      }, 300);
    }
    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout);
      }
    };
  }, [viewport]);

  function handleClickMenuButton(event: React.MouseEvent) {
    setMobileSidebarOpened(!mobileSidebarOpened);
  }

  return (
    <MainWrapper>
      <NavbarStartup
        DesktopSvgLogo={DesktopSvgLogo}
        MobileSvgLogo={MobileSvgLogo}
        maxWidth={'100%'}
        MenuLinks={
          <>
            <Link AsElement={<GatsbyLink to={'/design-system'} />}>Design System</Link>
          </>
        }
      ></NavbarStartup>

      {!isSSR ? (
        <React.Suspense fallback={<div />}>
          <MobileSideBar
            sidebarOpened={mobileSidebarOpened}
            disableBodyScroll={true}
            onClickBackdrop={handleClickMenuButton}
            style={{ backgroundColor: cssTheme.colors.colors.grey[800] }}
          >
            <Stack>
              <BoxV2
                style={{ flexDirection: 'column' }}
                alignItems={['stretch']}
                padding={[
                  cssTheme.sizing.var.x2,
                  cssTheme.sizing.var.x1,
                  cssTheme.sizing.var.x3,
                  cssTheme.layout.var.contentMargins,
                ]}
              >
                <Cluster>
                  {DesktopSvgLogo}

                  <Button
                    aria-label={'Menu'}
                    size={ButtonSize.large}
                    collapsePadding={'left'}
                    variant={Variant.tertiary}
                    icon={ButtonIcon.icon}
                    Icon={<IoClose fill={'white'} />}
                    onClick={handleClickMenuButton}
                  ></Button>
                </Cluster>
              </BoxV2>

              <BoxV2
                style={{ flexDirection: 'column' }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
                padding={[0, cssTheme.layout.var.contentMargins, cssTheme.sizing.var.x5]}
              >
                <Stack gap={[cssTheme.sizing.var.x5]}>
                  <Stack gap={[cssTheme.sizing.var.x3]}>
                    <Heading variant={HEADING.h4} variantLevel={Variant.primaryReversed}>
                      Docs
                    </Heading>
                    <Label
                      variant={LABEL_SIZE.xSmall}
                      variantStyle={TEXT_STYLE.boldUppercase}
                      variantLevel={Variant.primaryReversed}
                    >
                      Label
                    </Label>
                  </Stack>
                </Stack>
              </BoxV2>

              <BoxV2
                padding={[cssTheme.sizing.var.x5, 0, cssTheme.sizing.var.x6]}
                style={{ flexDirection: 'column', backgroundColor: cssTheme.colors.colors.grey[0] }}
                justifyContent={['flex-start']}
                alignItems={['stretch']}
              >
                <Stack gap={[cssTheme.sizing.var.x4]}>
                  {navigation
                    ? navigation.items.map((item, index) => {
                        return (
                          <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                            {item.items?.length ? (
                              <NavItemGroup>{title(item.displayName || item.name || 'Home')}</NavItemGroup>
                            ) : (
                              <NavItem
                                active={item.path === props.location?.pathname}
                                AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                              >
                                {item.name || item.displayName}
                              </NavItem>
                            )}
                            {item.items?.length ? (
                              <Stack>
                                {item.items?.map((item, itemIndex) => {
                                  return (
                                    <NavItem
                                      key={itemIndex}
                                      active={item.path === props.location?.pathname}
                                      AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                                    >
                                      {item.name || item.displayName}
                                    </NavItem>
                                  );
                                })}
                              </Stack>
                            ) : null}
                          </Stack>
                        );
                      })
                    : null}
                </Stack>
              </BoxV2>
            </Stack>
          </MobileSideBar>
        </React.Suspense>
      ) : null}

      {!isSSR ? (
        <React.Suspense fallback={<div />}>
          <DesktopSideBar>
            <BoxV2
              style={{ flexDirection: 'column' }}
              padding={[cssTheme.sizing.var.x4, 0, cssTheme.sizing.var.x7]}
              justifyContent={['flex-start']}
              alignItems={['stretch']}
            >
              <Stack gap={[cssTheme.sizing.var.x5]}>
                {navigation
                  ? navigation.items.map((item, index) => {
                      return (
                        <Stack key={index} gap={[`calc(2 * ${cssTheme.sizing.var.x1})`]}>
                          {item.items?.length ? (
                            <NavItemGroup>{title(item.displayName || item.name || 'Design System')}</NavItemGroup>
                          ) : (
                            <NavItem
                              active={item.path === props.location?.pathname}
                              AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                            >
                              {item.displayName || item.name}
                            </NavItem>
                          )}
                          {item.items?.length ? (
                            <Stack>
                              {item.items?.map((item, itemIndex) => {
                                return (
                                  <NavItem
                                    key={itemIndex}
                                    active={item.path === props.location?.pathname}
                                    AsElement={<GatsbyLink to={item.path} noStyles={true} />}
                                  >
                                    {item.displayName || item.name}
                                  </NavItem>
                                );
                              })}
                            </Stack>
                          ) : null}
                        </Stack>
                      );
                    })
                  : null}
              </Stack>
            </BoxV2>
          </DesktopSideBar>
        </React.Suspense>
      ) : null}

      <Main navbarPadding={true} minHeight={true}>
        {props.children}
      </Main>
    </MainWrapper>
  );
});
