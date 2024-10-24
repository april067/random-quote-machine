import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// import { createStore } from 'redux';

// const quotes = require('./db/quotes.json');
// const colors = require('./db/colors.json');

// const NEW_QUOTE = 'NEW_QUOTE';

// const quoteItem = Math.floor(Math.random() * 102);
// const colorItem = Math.floor(Math.random() * 9);

// const sendRequest = ({ quoteItem, colorItem }) => ({
// 	type: NEW_QUOTE,
// 	quoteItem,
// 	colorItem,
// });

// const reducer = (state = { quotes, colors }, action) => {
// 	switch (action.type) {
// 		case NEW_QUOTE:
// 			const { text, author } = state.quotes[action.quoteItem];
// 			const { value } = state.colors[action.colorItem];

// 			return {
// 				quote: { text, author },
// 				color: value,
// 			};

// 		default:
// 			return state;
// 	}
// };

// const store = createStore(reducer);

// store.dispatch(sendRequest({ quoteItem, colorItem }));

// console.log(quoteItem);
// console.log(colorItem);
// console.log(store.getState());
