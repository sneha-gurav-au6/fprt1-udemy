import React, { Component } from "react";
import { loginUsers } from "../redux/actions/userAction";
import { connect } from "react-redux";
import axios from "axios";
class Login extends Component {
    async componentDidMount() {}
    handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name,email,password)
        const newUser = {
            email: email,
            password: password,
        };
        const data = {
            newUser: newUser,
            history: this.props.history,
        };
        //dispatch to props
        const rgs = this.props.loginUsers(data);
    };
    render() {
        console.log(this.props.login);
        return (
            <div className="container-fluid">
                <h1>Login </h1>
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name="email"
                        />
                        <small id="emailHelp" className="form-text text-muted">
                            We'll never share your email with anyone else.
                        </small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default connect(null, { loginUsers })(Login);
