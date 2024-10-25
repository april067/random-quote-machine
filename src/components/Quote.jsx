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
			<div
				className={styles.quote}
				style={{ backgroundColor: colors[colorItem], color: colors[colorItem] }}
			>
				<div id="quote-box" className={styles.wrap}>
					<h1 id="text" className={styles.text}>
						<i className="fas fa-quote-left"></i>
						<i> </i>
						{quotes[quoteItem].text}
					</h1>
					<p id="author" className={styles.author}>
						-{quotes[quoteItem].author}
					</p>
					<div className={styles.cover}>
						<ul>
							<li>
								<a
									id="tweet-quote"
									href="twitter.com/intent/tweet"
									target="_top"
									className={styles.link}
									style={{ backgroundColor: colors[colorItem] }}
								>
									<i class="fab fa-twitter"></i>
								</a>
							</li>
							<li>
								<a href="/" className={styles.link} style={{ backgroundColor: colors[colorItem] }}>
									<i className="fab fa-facebook-f"></i>
								</a>
							</li>
						</ul>

						<button
							id="new-quote"
							className={styles.button}
							style={{ backgroundColor: colors[colorItem] }}
							onClick={this.requestNewQuote}
						>
							New quote
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Quote;
