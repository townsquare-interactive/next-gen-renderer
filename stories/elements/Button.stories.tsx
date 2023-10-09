import { StoryFn, Meta } from '@storybook/react';
import Button from '../../components/practice/ProtoButton';
import { themeStyles } from 'storydefaults';

export default {
  title: 'PracticeElements/Button',
  component: Button,
  argTypes: {
    btnType: {
      options: ['normal', 'accent', 'alt', 'alt2', 'accent2'],
      control: { type: 'radio' },
    },
    align: {
      options: ['left', 'right', 'center'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Button>;

export const Plain = {
  args: {
    text: 'CONTACT',
    btnType: 'normal',
    linkUrl: '/',
    themeStyles: themeStyles,
  },
};

export const Accent = {
  args: {
    ...Plain.args,
    btnType: 'accent',
  },
};

export const Alt = {
  args: {
    ...Plain.args,
    btnType: 'alt',
  },
};

export const Alt2 = {
  args: {
    ...Plain.args,
    btnType: 'alt2',
  },
};

export const Accent2 = {
  args: {
    ...Plain.args,
    btnType: 'accent2',
  },
};
