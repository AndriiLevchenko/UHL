import {createStore, combineReducers, applyMiddleware} from 'redux';
import quizReducer from './quizReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware    from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';

	let reducers = combineReducers({
		authReducer: authReducer,
		quizReducer: quizReducer,
		appReducer: appReducer,
		form: formReducer
	});

	let store = createStore(reducers, applyMiddleware(thunkMiddleware));

	window.store =store;

export default store;