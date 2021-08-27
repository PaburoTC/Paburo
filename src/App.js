import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Articles from './components/Articles/Articles';
import Experiences from './components/Experiences/Experiences';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/SCSS/Body.scss';

function App() {
	return (
		<BrowserRouter>
			<Header/>
			<Switch>
				<Route exact path="/articles" component={Articles}/>
				<Route exact path="/experience" component={Experiences}/>
			</Switch>
		</BrowserRouter>
	);
}

export default App;