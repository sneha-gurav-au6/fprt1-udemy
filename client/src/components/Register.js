import React, { Component } from "react";
import { RegisterUsers } from "../redux/actions/userAction";
import { connect } from "react-redux";
import axios from "axios";

class Register extends Component {
    async componentDidMount() {}

    handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        const newUser = {
            name: name,
            email: email,
            password: password,
        };
        const dataa = {
            newUser: newUser,
            history: this.props.history,
        };

        const rgs = this.props.RegisterUsers(dataa);
    };
    render() {
        console.log(this.props.user);

        return (
            <div className="container-fluid">
                <h1>Register </h1>
                <form onSubmit={this.handleRegister}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Your Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                        />
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

export default connect(null, { RegisterUsers })(Register);
