import { Theme } from 'theme-ui';

const theme: Theme = {
  config: {
    initialColorModeName: 'light',
  },
  fonts: {
    body: '"Nunito Sans", sans-serif',
    heading: '"Nunito Sans", sans-serif',
    monospace: '"Nunito Sans", sans-serif',
  },
  colors: {
    text: '#212121',
    background: '#fff',
    primary: '#8bc34a',
    modes: {
      dark: {
        text: '#fff',
        background: '#212121',
        primary: '#8bc34a',
      },
    },
  },
};

export default theme;
