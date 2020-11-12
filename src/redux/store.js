import {createStore} from 'redux';
import {storeData} from '../utils';

const initialState = {
  loading: false,
  name: 'Adnryana Baros',
};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.value,
    };
  }
  return state;
};

const store = createStore(reducer);

export default store;