import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

export default createStoreWithMiddleware(rootReducer);
