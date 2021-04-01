import { pascal } from 'case';
import * as Migration from 'contentful-migration';
import { COMMON_CONTENT_TYPE } from '../common-type/common-content-types';
import { COMMON_FIELD } from '../common-type/common-fields';

export const createBlogAuthor: Migration.MigrationFunction = function (migration) {
  const content = migration.createContentType(COMMON_CONTENT_TYPE.BLOG_AUTHOR, {
    name: pascal(COMMON_CONTENT_TYPE.BLOG_AUTHOR),
    displayField: COMMON_FIELD.FIRST_NAME,
  });

  content.createField(COMMON_FIELD.FIRST_NAME, {
    name: pascal(COMMON_FIELD.FIRST_NAME),
    type: 'Symbol',
    required: true,
  });

  content.createField(COMMON_FIELD.LAST_NAME, {
    name: pascal(COMMON_FIELD.LAST_NAME),
    type: 'Symbol',
  });

  content.createField(COMMON_FIELD.PROFILE_PICTURE, {
    name: pascal(COMMON_FIELD.PROFILE_PICTURE),
    type: 'Link',
    linkType: 'Asset',
  });
};