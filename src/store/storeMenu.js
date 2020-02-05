import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './reducers/formReducer';
import appUIReducer from './reducers/appUiReducer';
import userReducer from './reducers/userReducer';
import trucksReducer from './reducers/trucksReducer';
import trailersReducer from './reducers/trailerReducer';
import companyReducer from './reducers/companyReducer';
import reportReducer from './reducers/reportReducer';
import auth from './reducers/auth';


const rootReducer = combineReducers({
  user: userReducer,
  trucks: trucksReducer,
  trailers: trailersReducer,
  form: formReducer,
  appUI: appUIReducer,
  company: companyReducer,
  report: reportReducer,
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
