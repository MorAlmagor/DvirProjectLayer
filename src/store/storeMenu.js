import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './reducers/formReducer';
import appUIReducer from './reducers/appUiReducer';
import auth from './reducers/auth';


const rootReducer = combineReducers({
  form: formReducer,
  appUI: appUIReducer,
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
