import React from "react";
import { setUser } from "../services/auth";

const defaultState = {
  isAuth: true,
  handleLogin: () => {},
};

const AuthContext = React.createContext(defaultState);

class AuthProvider extends React.Component {
  state = {
    isAuth: true,
  };

  handleLogin = pw => {
    if (pw === `08302019`) {
      this.setState({ isAuth: true });
      setUser({ isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  };

  componentDidMount() {
    // Getting auth value from localStorage
    console.log(`User is auth: ${this.state.isAuth}`);
    const lsAuth = JSON.parse(window.localStorage.getItem("gatsbyUser"));
    if (lsAuth) {
      this.setState({ isAuth: true });
    } else {
      this.setState({ isAuth: false });
    }
  }

  render() {
    const { children } = this.props;
    const { isAuth } = this.state;
    return (
      <AuthContext.Provider
        value={{
          isAuth,
          handleLogin: pw => this.handleLogin(pw),
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContext;

export { AuthProvider };
