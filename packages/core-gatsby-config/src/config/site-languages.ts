/**
 * The locale these tags are marked up in. Of the format language_TERRITORY. Default is en_US.
 */
export enum SITE_LANGUAGES {
  EN = 'en_CA',
  FR = 'fr_CA',
}

export interface GatsbySiteLanguages {
  langs: SITE_LANGUAGES[];
  defaultLangKey: SITE_LANGUAGES;
}