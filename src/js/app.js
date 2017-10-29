import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

import keenImage from '../assets/commanderkeen.png';

export default class Hello extends Component {
	render() {
		return(
			<div>
			Snowfall Analysis
			</div>
			);
	}

}

render(<Hello />, document.getElementById('app'))