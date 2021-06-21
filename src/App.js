import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles/Articles';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/SCSS/Body.scss';

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route path="/articles" component={Articles}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;