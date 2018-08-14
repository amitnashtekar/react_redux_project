import { combineReducers } from 'redux';
import {ASYNC_ERROR} from './middleware/errorHandler';
import cust_search from '../features/customer-search/reducer';
import user from '../features/login/reducer';

export default combineReducers({
	cust_search,
	user
});

