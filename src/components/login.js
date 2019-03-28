import React from "react";
import { navigate } from "gatsby";
import { handleLogin } from "../services/auth";
import styled from "styled-components";
import mq from "../utils/breakpoints";

const Container = styled.div`
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  font-family: "Playfair Display", serif;

  ${mq.a1200} {
    top: 40%;
  }

  ${mq.a1800} {
    top: 25%;
  }

  h1 {
    font-size: 30px;
  }

  form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    padding: 0 30px;
    height: 100%;

    input {
      border: none;
      outline: none;
    }
  }
`;

const Input = styled.input`
  width: 70%;
  padding: 10px;
`;

const Submit = styled.input`
  width: 30%;
  font-size: 16px;
  background: #000;
  color: #fff;
  cursor: pointer;
`;

const IncorrectPassword = styled.p`
  color: red;
  font-weight: bold;
  font-size: 24px;
  margin-top: 20px;
`;

class Login extends React.Component {
  state = {
    password: ``,
    error: false,
  };

  handleUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (handleLogin(this.state) === false) {
      this.isError();
    }
  };

  isError = () => this.setState({ error: true });

  render() {
    // if (isLoggedIn()) {
    //   navigate(`/`);
    // }
    const { error } = this.state;

    return (
      <Container>
        <h1>Password is wedding date MMDDYYYY</h1>
        <form
          method="post"
          onSubmit={event => {
            this.handleSubmit(event);
            navigate(`/`);
          }}
        >
          <Input type="password" name="password" onChange={this.handleUpdate} />
          <Submit type="submit" value="Log In" />
        </form>
        {error && <IncorrectPassword>Password is incorrect</IncorrectPassword>}
      </Container>
    );
  }
}

export default Login;
