import { Component } from 'react';

import styles from './Quote.module.css';

class Quote extends Component {
	constructor(props) {
		super(props);

		this.requestNewQuote = this.requestNewQuote.bind(this);
	}

	requestNewQuote(quoteItem, colorItem) {
		return this.props.send(quoteItem, colorItem);
	}

	render() {
		const { quotes, colors } = this.props.data;
		const quoteItem = Math.floor(Math.random() * 102);
		const colorItem = Math.floor(Math.random() * 8);

		return (
			<div className={styles.quote} style={{ backgroundColor: colors[colorItem].value }}>
				<h1>{quotes[quoteItem].text}</h1>
				<p>-{quotes[quoteItem].author}</p>
				<ul>
					<li>
						<button>Twitter</button>
						<button>Instagram</button>
						<button onClick={() => this.requestNewQuote(quoteItem, colorItem)}>New quote</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Quote;
