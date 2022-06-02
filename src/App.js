import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import UsersPage from './pages/userspage';
import UserPage from './pages/userpage';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';
import EditUserPage from './pages/EditUserPage';
import CreateUser from './pages/createUserPage';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';
import './App.css';

const App = () => (
  <div className="App">
    <HashRouter hashType="noslash">
      <NavBar />
      <Switch>
        <Route path="/cloudusers2" exact component={HomePage} />
        <Route path="/cloudusers2/users/" exact component={UsersPage} />
        <Route path="/cloudusers2/about/" component={AboutPage} />
        <Route path={'/cloudusers2/users/create/'} exact component={CreateUser} />
        <Route path={'/cloudusers2/users/:userId'} exact component={UserPage} />
        <Route path={'/cloudusers2/users/edit/:userId'} exact component={EditUserPage} />
        <Route path={'/'} component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
