import { createStore } from 'redux';

const quotes = require('../db/quotes.json');
const colors = require('../db/colors.json');

const NEW_QUOTE = 'NEW_QUOTE';

const mapStateToProps = (state) => {
	return [state.quotes[quoteItem], state.colors[colorItem]];
};
const mapDispatchToProps = (dispatch) => {
	return {
		submitNewMessage: (request) => {
			dispatch(sendRequest(request));
		},
	};
};

const quoteItem = Math.floor(Math.random() * 102);
const colorItem = Math.floor(Math.random() * 9);
// const request = { quoteItem, colorItem };

const sendRequest = ({ quoteItem, colorItem }) => ({
	type: NEW_QUOTE,
	quoteItem,
	colorItem,
});

const reducer = (state = { quotes, colors }, action) => {
	switch (action.type) {
		case NEW_QUOTE:
			const { text, author } = state.quotes[action.quoteItem];
			const { value } = state.colors[action.colorItem];

			return {
				quote: { text, author },
				color: value,
			};

		default:
			return state;
	}
};

const store = createStore(reducer);

console.log(store.getState());

export { store, mapStateToProps, mapDispatchToProps };
