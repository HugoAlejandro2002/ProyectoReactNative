import { createStore, combineReducers, applyMiddleware } from 'redux';
import  authReducer  from '../store/reducers/authUserReducer';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer);

export default store;
