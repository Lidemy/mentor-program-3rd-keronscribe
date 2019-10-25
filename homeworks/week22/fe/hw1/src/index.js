import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<BrowserRouter>
	<Switch>
		<App />
	</Switch>
</BrowserRouter>,
document.getElementById('root'));
serviceWorker.unregister();
