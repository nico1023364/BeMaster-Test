import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import ContentCategory from './components/ContentCategory';
import ContentDetails from './components/ContentDetails';
import Profile from './components/Profile';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/category/:categoryId" exact component={ContentCategory} />
                <Route path="/video/:videoId" component={ContentDetails} />
                <Route path="/profile">
                    <Profile email="admin@gmail.com" password="admin123" />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
