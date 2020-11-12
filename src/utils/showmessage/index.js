import {showMessage} from 'react-native-flash-message';
import {colors} from '../../utils';

export const showError = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.warning,
    color: colors.white,
  });
};

export const showSucces = message => {
  showMessage({
    message: message,
    type: 'default',
    backgroundColor: colors.primary,
    color: colors.white,
  });
};