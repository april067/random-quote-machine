// import { connect } from 'react-redux';

// import './App.css';
// import Quote from './components/Quote.jsx';
// import { mapStateToProps, mapDispatchToProps } from './redux/store.js';

// function App() {
// 	return (
// 		<div className="App">
// 			<ConnectedComponent />
// 		</div>
// 	);
// }

// const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Quote);

// export default App;

import './App.css';
import Quote from './components/Quote.jsx';

function App() {
	return (
		<div className="App">
			<Quote />
		</div>
	);
}

export default App;
