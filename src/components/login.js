import React from "react";
import { navigate } from "gatsby";
import styled from "styled-components";
import mq from "../utils/breakpoints";
import AuthContext from "../context/AuthContext";
import { Title } from "../sections/HeroSection";

const Container = styled.div`
  color: #fff;
  position: absolute;
  width: 100%;
  text-align: center;
  top: 50%;
  font-family: "Playfair Display", serif;

  h2 {
    font-weight: normal;
  }

  ${mq.a1200} {
    top: 40%;
  }

  ${mq.a1800} {
    top: 25%;
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

const StyledTitle = styled(Title)`
  position: relative;
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

  handleSubmit = (event, login) => {
    event.preventDefault();
    if (login(this.state.password) !== `08302019`) {
      this.isError();
    }
  };

  isError = () => this.setState({ error: true });

  render() {
    const { error } = this.state;

    return (
      <AuthContext.Consumer>
        {auth => (
          <Container>
            <StyledTitle>THIS IS POSADAS</StyledTitle>

            <h2>Password is wedding date MMDDYYYY</h2>
            <form
              method="post"
              onSubmit={event => {
                this.handleSubmit(event, auth.handleLogin);
                navigate(`/`);
              }}
            >
              <Input
                type="password"
                name="password"
                onChange={this.handleUpdate}
              />
              <Submit type="submit" value="Log In" />
            </form>
            {error && (
              <IncorrectPassword>Password is incorrect</IncorrectPassword>
            )}
          </Container>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
