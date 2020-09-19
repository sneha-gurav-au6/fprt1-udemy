import setAuthToken from "./setAuthToken";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { LoginUser, RegisterUser } from "./userType";

export const RegisterUsers = (data1) => async (dispatch) => {
    console.log(data1);

    await axios
        .post("/user/register", data1.newUser)
        .then((res) => {
            if (res.status === 200) {
                data1.history.push("/user/login");

                dispatch({ type: RegisterUser, payload: res.data.user });
            }
        })
        .catch((err) => {
            console.log(err.message);
        });
};

//login user action
export const loginUsers = (data) => async (dispatch) => {
    console.log(data.newUser);
    await axios
        .post("/user/login", data.newUser)
        .then((data1) => {
            if (data1.status === 200) {
                setToken(data1.data.token, dispatch);
                data.history.push("/");
            }
            console.log(data1.data);
        })
        .catch((err) => {
            console.log(err.response.data);
            console.log(err.message);
        });
};

const setToken = (res, dispatch) => {
    // Save token to local storage
    const token = res;
    // Set token to ls
    localStorage.setItem("jwtToken", token);
    // Set token to Auth header
    setAuthToken(token);
    // Decode jwt token
    const decode = jwt_decode(token);
    // Set current user
    dispatch(setCurrentUser(decode));
};

//setcurrent user
export const setCurrentUser = (decode) => {
    return { type: LoginUser, payload: decode };
};

//logout
export const logoutUser = () => (dispatch) => {
    // Remove token from localStorage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future request
    setAuthToken(false);
    // Set current user to {} and isAuthenticator to false
    dispatch(setCurrentUser({}));
};
