import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './reducers/formReducer';
import appUIReducer from './reducers/appUiReducer';
import userReducer from './reducers/userReducer';
import trucksReducer from './reducers/trucksReducer';
import trailersReducer from './reducers/trailerReducer';
import auth from './reducers/auth';


const rootReducer = combineReducers({
  user: userReducer,
  trucks: trucksReducer,
  trailers: trailersReducer,
  form: formReducer,
  appUI: appUIReducer,
  auth,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
