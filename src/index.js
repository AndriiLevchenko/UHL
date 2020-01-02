import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/redux-store';

let rerenderEntireTree =(state)=>{
	console.log(state);
	ReactDOM.render(
		<Provider store={store}>
		  	<BrowserRouter>
					<App state={store.getState()} dispatch ={store.dispatch.bind(store)} />
			</BrowserRouter>
		</Provider>, document.getElementById('root')
	);
}

rerenderEntireTree(store.getState());

store.subscribe(()=>{
	let state =store.getState();
	rerenderEntireTree(state);
});

