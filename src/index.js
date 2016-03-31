import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';

import ToolBox from './components/tool_box';
import SkyCam from './components/sky_cam';

class App extends Component {
	render() {
		return (
			<div>
				<ToolBox />
				<SkyCam />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
