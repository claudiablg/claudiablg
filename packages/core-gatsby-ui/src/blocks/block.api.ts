import { BlockVariant } from './block.props';

export type BlockAPI = {
  name?: string | null;
  variant?: BlockVariant | null | string;
  text?: {
    text?: string | null;
    childMdx: {
      body: string | null;
    };
  };
};
