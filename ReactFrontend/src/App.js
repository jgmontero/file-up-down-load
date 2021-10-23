import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Button from './components/Button';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Aboutus from './components/pages/Aboutus';
import SignUp from './components/pages/SignUp';
import Services from './components/pages/Services';
import Login from './components/Authcomponent/login.component';
import Register from './components/Authcomponent/register.component'
import AuthService from "../src/components/services/auth.service";
import EventBus from "../src/components/common/EventBus";
import FAQ from './components/pages/FAQ';
import { Nav } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: null,
      isLogged: false,
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        isLogged: true,
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: null,
      isLogged: false
    });
  }

  render() {
    const currentUser = this.state.currentUser;
    const isLogged = this.state.isLogged;
    console.log(isLogged);
    
    return (
      <div>

        {isLogged &&
          <button className="btn" type="button" onClick={(e) => this.logOut()}>LogOut {currentUser.username}</button>
        }
        <ul><Login></Login></ul>
        <ul> <Register></Register></ul>
       
        {/*!isLogged &&
          (<Router>
            <Navbar></Navbar>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/services' component={Login} />
              <Route path='/about-us' component={Aboutus} />
              <Route path='/faq' component={FAQ} />
            </Switch>
          </Router>)
        */}
        {isLogged &&
          (<Router>
            <Navbar></Navbar>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/services' component={Services} />
            </Switch>
          </Router>)}

      </div>
    );
  }
}

export default App;
