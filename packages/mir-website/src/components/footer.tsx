import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FooterQuery } from '../../types/graphql-types';
import { Label } from '../components/label';
import { Logo } from '../components/logo';
import { Paragraph } from '../components/paragraph';
import styles from './footer.module.scss';
import { AnchorLink } from './anchor-link';

export const query = graphql`
  query footer {
    gcms {
      companyMedias {
        logoFooter {
          url
        }
      }
      companyAddresses {
        addressLine1
        addressLine2
        city
        provinceState
        postalCode
        country
        websiteUrl
        phone
        phoneNoFees
        email
      }
    }
  }
`;

type OwnProps = {};

export const Footer: React.FC<OwnProps> = (props) => {
  const data = useStaticQuery<FooterQuery>(query);

  return (
    <footer className={styles.wrapper}>
      <div>
        <Label className={styles.title} size="small" variant="uppercase">
          Contactez-nous
        </Label>
        <Paragraph className={styles.infoText} variant="small">
          Téléphone :
          <AnchorLink variant="reversed" href={`tel:${data.gcms.companyAddresses[0].phone}`}>
            {data.gcms.companyAddresses[0].phone}
          </AnchorLink>
        </Paragraph>
        <Paragraph className={styles.infoText} variant="small">
          Sans frais :
          <AnchorLink variant="reversed" href={`tel:${data.gcms.companyAddresses[0].phoneNoFees}`}>
            {data.gcms.companyAddresses[0].phoneNoFees}
          </AnchorLink>
        </Paragraph>
        <Paragraph className={styles.infoText} variant="small">
          Courriel :{' '}
          <AnchorLink variant="reversed" href={`mailto:${data.gcms.companyAddresses[0].email}`}>
            {data.gcms.companyAddresses[0].email}
          </AnchorLink>
        </Paragraph>
      </div>

      <div>
        <Label className={styles.title} size="small" variant="uppercase">
          Visitez-nous
        </Label>
        <Paragraph className={styles.infoText} variant="small">
          {data.gcms.companyAddresses[0].addressLine1}
        </Paragraph>
        <Paragraph className={styles.infoText} variant="small">
          {data.gcms.companyAddresses[0].addressLine2}
        </Paragraph>
        <Paragraph className={styles.infoText} variant="small">
          {data.gcms.companyAddresses[0].city}, {data.gcms.companyAddresses[0].provinceState},{' '}
          {data.gcms.companyAddresses[0].postalCode}
        </Paragraph>
        <Paragraph className={styles.infoText} variant="small">
          {data.gcms.companyAddresses[0].country}
        </Paragraph>
      </div>

      <Logo type="framed-text" variant="reversed" src={`${data.gcms.companyMedias[0].logoFooter.url}`}></Logo>

      <Paragraph variant="small">© {new Date().getFullYear()} Tous droits réservés MIR. </Paragraph>
    </footer>
  );
};
