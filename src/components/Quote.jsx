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
			</div>
		);
	}
}

export default Quote;
