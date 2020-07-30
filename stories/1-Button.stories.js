import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Button1 = () => <Button onClick={action('clicked')}>Button1</Button>;

export const Button2= () => (
  <Button colour="red" onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
     Button2
    </span>
  </Button>
);
