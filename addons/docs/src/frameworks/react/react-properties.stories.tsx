import React from 'react';
import { storiesOf } from '@storybook/react';
import { PropsTable } from '@storybook/components';
import { extractProps } from './extractProps';

const fixtures = [
  'js-class-component',
  'ts-function-component',
  '9399-js-proptypes-shape',
  '8663-js-styled-components',
  '9626-js-default-values',
  '9668-js-proptypes-no-jsdoc',
  '8143-ts-react-fc-generics',
  '8143-ts-imported-types',
];

const stories = storiesOf('Properties/React', module);

fixtures.forEach(fixture => {
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const { component } = require(`./__testfixtures__/${fixture}/input`);
  const props = extractProps(component);
  stories.add(fixture, () => <PropsTable {...props} />);
});
