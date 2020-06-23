import {color} from 'react-native-reanimated';

const mainColors = {
  green1: '#0BCAD4',
  green2 : '#CBFCFF',
  dark1: '#112340',
  dark3: '#8092af',
  dark2: '#495a75',
  grey1: '#7d8797',
  grey2: '#e9e9e9',
  grey3: '#edeef0',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0,0.5)',
  red1: '#e06379'
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: mainColors.black1,

  disable: mainColors.grey3,
  tertiary: mainColors.blue1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors. green1,
    subTitle : mainColors.dark3,
  },
  button: {
    primary: {
       background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  cardColor : mainColors.green2,

  border: mainColors.grey2,
  loadingBackground : mainColors.black2,
  warning : mainColors.red1,
};
