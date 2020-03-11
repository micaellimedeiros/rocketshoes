import { combineReducers } from 'redux';

import cart from './cart/reducer';
import updating from './cart/updating/reducer';

export default combineReducers({
  cart,
  updating,
});
