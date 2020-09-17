import { LABEL } from 'core-design-system';
import { Link as GatsbyLink } from 'gatsby';
import React from 'react';
import { useStyles } from 'react-treat';
import Icon from '../illustrations/Icon/IconBars.svg';
import { NavigationProps } from '../layouts';
import { Link } from '../ui/link';
import { Button } from './button';
import { Label } from './label';
import * as stylesRef from './nav-bar.treat';

type OwnProps = {
  onOpenSideMenu: () => void;
} & NavigationProps;

export const NavBar: React.FC<OwnProps> = (props) => {
  const styles = useStyles(stylesRef);

  const leftToolbarPageNames = ['Home', 'Candidates', 'Employers', 'Blog', 'About'];
  const leftToolbarPages = props.pages
    ?.filter((page) => leftToolbarPageNames.includes(page.name))
    .sort((pageA, pageB) => {
      const indexA = leftToolbarPageNames.indexOf(pageA.name);
      const indexB = leftToolbarPageNames.indexOf(pageB.name);
      return indexA > indexB ? 1 : -1;
    });
  const contactUsPage = props.pages?.filter((page) => page.name === 'Contact');

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.mobileLeftToolbar} onClick={(e) => props.onOpenSideMenu()}>
          <Icon className={styles.icon} />
        </div>

        <div className={styles.desktopLeftToolbar}>
          {leftToolbarPages?.map((page) => {
            return (
              <Link key={page.name} to={page.route}>
                {page.title}
              </Link>
            );
          })}
        </div>

        {props.logoURL ? <img className={styles.logo} src={props.logoURL} /> : null}

        <div className={styles.mobileRightToolbar}>
          <Label variant={LABEL.smallBoldUppercase} className={styles.language}>
            EN
          </Label>
        </div>

        <div className={styles.desktopRightToolbar}>
          <div className={styles.desktopSocialButtons}>
            {props.facebookPageURL ? (
              <GatsbyLink to={props.facebookPageURL} target={'_blank'}>
                <Button type="tertiaryReversed" variant="icon" icon="IconFacebook" size="small"></Button>
              </GatsbyLink>
            ) : null}
            {props.linkedinPageURL ? (
              <GatsbyLink to={props.linkedinPageURL} target={'_blank'}>
                <Button type="tertiaryReversed" variant="icon" icon="IconLinkedin" size="small"></Button>
              </GatsbyLink>
            ) : null}
            {props.instagramPageURL ? (
              <GatsbyLink to={props.instagramPageURL} target={'_blank'}>
                <Button type="tertiaryReversed" variant="icon" icon="IconInstagram" size="small"></Button>
              </GatsbyLink>
            ) : null}
          </div>

          <GatsbyLink to={props.location?.pathname.includes('/en/') ? '/' : '/en/'}>
            <Button type="tertiaryReversed" variant="text" size="small">
              {props.location?.pathname.includes('/en/') ? 'FR' : 'EN'}
            </Button>
          </GatsbyLink>

          {contactUsPage && contactUsPage[0] ? (
            <GatsbyLink to={contactUsPage[0].route}>
              <Button type="secondaryReversed" variant="text" size="small">
                {contactUsPage[0].title}
              </Button>
            </GatsbyLink>
          ) : null}
        </div>
      </div>
    </div>
  );
};
