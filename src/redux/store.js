// import { createStore } from 'redux';

// const quotes = require('../db/quotes.json');
// const colors = require('../db/colors.json');

// const NEW_QUOTE = 'NEW_QUOTE';

// const mapStateToProps = (state) => {
// 	return { data: state };
// };

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		send: () => {
// 			dispatch(sendRequest());
// 		},
// 	};
// };

// const sendRequest = () => ({
// 	type: NEW_QUOTE,
// });

// // const reducer = (state = { quotes, colors }, action) => {
// // 	switch (action.type) {
// // 		case NEW_QUOTE:
// // 			return { ...state };

// // 		default:
// // 			return state;
// // 	}
// // };

// const reducer = (state = { quotes, colors }, action) => ({ ...state });

// const store = createStore(reducer);

// export { store, mapStateToProps, mapDispatchToProps };
