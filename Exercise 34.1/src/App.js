
import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './Exercise/Home';
import About from './Exercise/About';
import Contact from './Exercise/Contact';
import './App.css';

class App extends Component {
render() {
	return (
	<Router>
		<div className="App">
			
		<Routes>
	<Route  path='/Home' element={< Home />}></Route>
	<Route  path='/About' element={< About />}></Route>
	<Route  path='/Contact' element={< Contact />}></Route>
		</Routes>
		</div>
	</Router>
);
}
}

export default App;
