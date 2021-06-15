import { PartialOrNull } from '../utilities';
import { BlockAPI, BlockType } from './block.api';
import { MediaAPI } from './media.api';

export type BlockImageAPI = BlockAPI &
  PartialOrNull<{
    /**
     * Type of the block should be image
     */
    type: BlockType.image | string;
    /**
     * A single media
     */
    media: MediaAPI;
  }>;
