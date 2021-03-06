import React from 'react';

import { PARAGRAPH_SIZE, Variant } from '@newrade/core-design-system';
import { MarkdownTemplateQuery } from '@newrade/core-gatsb-config/config';
import { Badge, Cluster, Heading, Hr, Link, Paragraph, Stack, Tag } from '@newrade/core-react-ui';
import { sizingVars } from '@newrade/core-react-ui/theme';

import { useI18next } from '../i18next/use-i18next.hook';

type Props = {
  props: {
    data: MarkdownTemplateQuery;
  };
};

/**
 * Insert document heading, tags and other frontmatter metadata in .md document
 */
export const DocHeader = ({ props }: Props) => {
  const { t } = useI18next();

  const status = props?.data?.file?.childMdx?.frontmatter?.status;
  const subject = props?.data?.file?.childMdx?.frontmatter?.subject;
  const title = props?.data?.file?.childMdx?.frontmatter?.title;
  const description = props?.data?.file?.childMdx?.frontmatter?.description;
  const timeToRead = props?.data?.file?.childMdx?.timeToRead;
  const lastChangedAt = props?.data?.file?.changeTime;
  const tags = props?.data?.file?.childMdx?.frontmatter?.tags;
  const renderTags = tags?.length || status;
  const componentVersion = props?.data?.file?.childMdx?.frontmatter?.componentVersion;
  const componentStatus = props?.data?.file?.childMdx?.frontmatter?.componentStatus;
  const componentTests = props?.data?.file?.childMdx?.frontmatter?.componentTests;
  const renderComponentInfos = componentVersion || componentStatus || componentTests;

  return (
    <Stack gap={[sizingVars.var.x4]}>
      {/* {subject ? (
        <Label
          variant={LABEL_SIZE.small}
          variantStyle={TEXT_STYLE.boldUppercase}
          variantLevel={Variant.tertiary}
        >{`${subject.toUpperCase()}`}</Label>
      ) : null} */}

      <Cluster gap={[sizingVars.var.x2]} justifyContent={['flex-start']} alignItems={['flex-end']}>
        {title ? <Heading>{title}</Heading> : null}{' '}
        {status ? <Tag variant={Variant.secondary}>{`${status.toUpperCase()}`}</Tag> : null}
      </Cluster>

      {description ? (
        <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.large}>
          {description}
        </Paragraph>
      ) : null}

      <Cluster justifyContent={['flex-start']} gap={[sizingVars.var.x0]} wrap={true}>
        {timeToRead ? (
          <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.xSmall}>
            {lastChangedAt} ?? {`${timeToRead} ${t('minutesToRead')}`}
          </Paragraph>
        ) : null}
        {renderTags && tags?.length ? (
          <Paragraph variantLevel={Variant.secondary} variant={PARAGRAPH_SIZE.xSmall}>
            -
          </Paragraph>
        ) : null}
        {renderTags
          ? tags?.map((tag, tagIndex) => (
              <Link
                variantLevel={Variant.primary}
                variantSize={PARAGRAPH_SIZE.xSmall}
                key={tagIndex}
              >
                {tag}
                {tagIndex < tags.length - 1 ? ', ' : null}
              </Link>
            ))
          : null}
      </Cluster>

      {renderComponentInfos ? (
        <Stack gap={[sizingVars.var.x3]}>
          <Hr />

          <Cluster wrap={true} justifyContent={['flex-start']} gap={[sizingVars.var.x1]}>
            {componentVersion ? <Badge name="version" status={componentVersion}></Badge> : null}

            {componentStatus ? (
              <Badge
                name="status"
                status={componentStatus}
                kind={componentStatus === 'wip' ? 'warning' : 'success'}
              ></Badge>
            ) : null}

            {componentTests ? (
              <Badge
                name="tests"
                status={componentTests}
                kind={componentTests === 'missing' ? 'warning' : 'success'}
              ></Badge>
            ) : null}
          </Cluster>

          <Hr />
        </Stack>
      ) : (
        <Hr />
      )}
    </Stack>
  );
};
