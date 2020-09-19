import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/userAction";
import { withRouter } from "react-router-dom";
class Navbar extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
    };

    render() {
        const { isAuthenticated } = this.props.user.user;
        console.log(this.props.user.user.user.image);
        const registerLogin = (
            <>
                <li className="nav-item">
                    <a className="nav-link" href="/user/register">
                        <i className="fas fa-user-plus fa-3x fa-fw"></i>
                        Register
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/user/login">
                        <i className="fas fa-sign-in-alt fa-3x fa-fw"></i>
                        Login
                    </a>
                </li>
            </>
        );
        const Logout = (
            <>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        href="#/"
                        onClick={this.userDashboard}
                    >
                        <img
                            src={this.props.user.user.user.image}
                            alt={this.props.user.user.user.image}
                            style={{
                                height: "50px",
                                width: "50px",
                                "border-radius": "50%",
                            }}
                        />

                        {/* <p>Profile</p> */}
                        <span className="spa"> Profile</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/addPost">
                        <i className="fas fa-plus-circle fa-3x fa-fw"></i>
                        Add New Post
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        className="nav-link"
                        onClick={this.handleLogout.bind(this)}
                        href="/login"
                    >
                        <i className="fas fa-sign-out-alt fa-3x fa-fw"></i>
                        Logout
                    </a>
                </li>
            </>
        );
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">
                        Navbar
                    </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div
                        class="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/user/register">
                                    <i className="fas fa-user-plus fa-3x fa-fw"></i>
                                    Become An Instructor
                                </a>
                            </li>
                            <ul className="navbar-nav mr-0 my-2 my-lg-0">
                                {" "}
                                {isAuthenticated === false
                                    ? registerLogin
                                    : Logout}
                            </ul>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state,
    };
};

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
