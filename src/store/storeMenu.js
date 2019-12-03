import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import formReducer from './reducers/formReducer';
import appUIReducer from './reducers/appUiReducer';


const rootReducer = combineReducers({
  form: formReducer,
  appUI: appUIReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store };
