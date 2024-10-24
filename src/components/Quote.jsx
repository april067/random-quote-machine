import { Component } from 'react';

import styles from './Quote.module.css';

class Quote extends Component {
	// constructor(props) {
	// 	super(props);

	// 	state: [];
	// }

	render() {
		return (
			<div className={styles.quote}>
				<h1>Remember that not getting what you want is sometimes a wonderful stroke of luck</h1>
				<p>-Dalai Lama</p>
				<ul>
					<li>
						<button>Twitter</button>
						<button>Instagram</button>
						<button>New quote</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default Quote;
