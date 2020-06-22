import {color} from 'react-native-reanimated';

const mainColors = {
  green1: '#0BCAD4',
  green2 : '#CBFCFF',
  dark1: '#112340',
  dark3: '#112340',
  dark2: '#495a75',
  grey1: '#7d8797',
  grey2: '#e9e9e9'
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  text: {
    primary: mainColors.dark3,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors. green1,
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
};
