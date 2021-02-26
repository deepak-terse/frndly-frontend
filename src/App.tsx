import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

//Components
import Home from './containers/Home'
import UserList from './containers/UserList'
import UserDetails from './containers/UserDetails'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/userList" component={UserList} />
				<Route path="/userDetails" component={UserDetails} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
