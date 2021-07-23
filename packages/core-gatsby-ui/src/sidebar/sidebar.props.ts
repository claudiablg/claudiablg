import { PrimitiveProps } from '@newrade/core-react-ui/src';
import { SidebarAPI, SidebarLayout } from '@newrade/core-website-api';
import { CustomBlockVariantComponents } from '../blocks/block.props';

/**
 * Minimal props for a Sidebar component
 */
export type SidebarProps = PrimitiveProps<'nav'> & {
  /**
   * Sidebar API data
   */
  sidebar?: SidebarAPI;
  /**
   * State of the sidebar
   */
  sidebarOpened?: boolean;
  /**
   * active route
   */
  activePathname?: string;
  /**
   * Inject a link around the logo
   * @example
   *  <Sidebar ... HomeLink={<GatsbyLink to={'/'} />} />
   */
  HomeLink?: React.ReactNode;
  /**
   * Handle the menu button event
   */
  onClickMenuButton?: (event: React.MouseEvent) => void;
  /**
   * Handle event on the backdrop
   */
  onClickBackdrop?: (event: React.MouseEvent) => void;
};

/**
 * Defines a component for each custom layout
 */
export type CustomSidebarLayoutComponents<CustomSidebarLayouts extends string> = {
  [key in CustomSidebarLayouts | SidebarLayout]?: (
    props: SidebarProps
  ) => React.ReactElement | null;
};

/**
 * Define the API of the SidebarRenderer component
 */
export type SidebarRendererProps<
  CustomSidebarLayouts extends string = '',
  CustomBlockVariants extends string = ''
> = SidebarProps & {
  sidebarComponents?: CustomSidebarLayoutComponents<CustomSidebarLayouts>;
  blockComponents?: CustomBlockVariantComponents<CustomBlockVariants>;
};
