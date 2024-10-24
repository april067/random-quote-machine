// import { Component } from 'react';

// import styles from './Quote.module.css';

// class Quote extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.requestNewQuote = this.requestNewQuote.bind(this);
// 	}

// 	requestNewQuote() {
// 		return this.props.send();
// 	}

// 	render() {
// 		const { quotes, colors } = this.props.data;
// 		const quoteItem = Math.floor(Math.random() * 102);
// 		const colorItem = Math.floor(Math.random() * 8);

// 		return (
// 			<div className={styles.quote} style={{ backgroundColor: colors[colorItem].value }}>
// 				<h1>{quotes[quoteItem].text}</h1>
// 				<p>-{quotes[quoteItem].author}</p>
// 				<ul>
// 					<li>
// 						<button>Twitter</button>
// 						<button>Instagram</button>
// 						<button onClick={this.requestNewQuote}>New quote</button>
// 					</li>
// 				</ul>
// 			</div>
// 		);
// 	}
// }

// export default Quote;

import { Component } from 'react';

import styles from './Quote.module.css';
const quotes = require('../db/quotes.json');
const colors = require('../db/colors.json');

class Quote extends Component {
	constructor(props) {
		super(props);

		this.state = { quotes, colors };

		this.requestNewQuote = this.requestNewQuote.bind(this);
	}

	requestNewQuote() {
		this.setState((state) => state);
	}

	render() {
		const { quotes, colors } = this.state;
		const quoteItem = Math.floor(Math.random() * quotes.length);
		const colorItem = Math.floor(Math.random() * colors.length);

		return (
			<div className={styles.quote} style={{ backgroundColor: colors[colorItem].value }}>
				<h1>{quotes[quoteItem].text}</h1>
				<p>-{quotes[quoteItem].author}</p>
				<ul>
					<li>
						<button>Twitter</button>
						<button>Instagram</button>
						<button onClick={this.requestNewQuote}>New quote</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Quote;
