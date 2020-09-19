import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import setAuthToken from "./redux/actions/setAuthToken";
import { setCurrentUser } from "./redux/actions/userAction";
class App extends Component {
    componentDidMount() {
        if (localStorage.jwtToken) {
            setAuthToken(localStorage.jwtToken);
            const decode = jwt_decode(localStorage.jwtToken);
            this.props.setCurrentUser(decode);
        }
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/user/register" component={Register} />
                    <Route exact path="/user/login" component={Login} />
                </Switch>
            </div>
        );
    }
}

export default connect(null, { setAuthToken, setCurrentUser })(App);
