import { addParameters } from '@storybook/vue';

const globalParameter = 'globalParameter';
const chapterParameter = 'chapterParameter';
const storyParameter = 'storyParameter';

addParameters({ globalParameter });

export default {
  title: 'Core/Parameters',
  parameters: {
    chapterParameter,
  },
};

export const PassedToStory = ({ parameters: { fileName, ...parameters } }) => ({
  template: `<div>Parameters are <pre>${JSON.stringify(parameters, null, 2)}</pre></div>`,
});

PassedToStory.story = {
  name: 'passed to story',

  parameters: {
    storyParameter,
  },
};
