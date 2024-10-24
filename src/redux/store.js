import { createStore } from 'redux';

const quotes = require('../db/quotes.json');
const colors = require('../db/colors.json');

const NEW_QUOTE = 'NEW_QUOTE';

const mapStateToProps = (state) => {
	return { data: state };
};

const mapDispatchToProps = (dispatch) => {
	return {
		send: () => {
			dispatch(sendRequest());
		},
		// generateItems,
	};
};

const sendRequest = () => ({
	type: NEW_QUOTE,
});

const reducer = (state = { quotes, colors }, action) => {
	// console.table(state);
	// console.log(action.quoteItem);

	switch (action.type) {
		case NEW_QUOTE:
			return { ...state };

		default:
			return state;
	}
};

const store = createStore(reducer);

export { store, mapStateToProps, mapDispatchToProps };
