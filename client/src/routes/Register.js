import React from 'react';
import { gql, graphql } from 'react-apollo';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    usernameError: '',
    emailError: '',
    passwordError: '',
    passRed: '',
    nameRed: '',
    emailRed: ''
  };

  onSubmit = async () => {
    this.setState({
      usernameError: '',
      emailError: '',
      passwordError: '',
      passRed: '',
      nameRed: '',
      emailRed: ''
    })
    const response = await this.props.mutate({
      variables: this.state,
    });

    const { ok, errors } = response.data.register;

    if (ok) {
      this.props.history.push('/login');
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        // err['passwordError'] = 'too long..';
        err[`${path}Error`] = message;
      });

      this.setState(err);
    }

    if(this.state.emailError) {
      this.setState({emailRed: 'animated is-danger shake'});
    }else{
      this.setState({emailRed: 'is-success'});
    }

    if(this.state.usernameError) {
      this.setState({nameRed: 'animated is-danger shake'});
    }else{
      this.setState({nameRed: 'is-success'});
    }

    if(this.state.passwordError) {
      this.setState({passRed: 'animated is-danger shake'});
    }else{
      this.setState({passRed: 'is-success'});
    }

    console.log(response);

  };

  onChange = e => {
    const { name, value } = e.target;
    // name = "email";
    this.setState({ [name]: value });
  };

  render() {
    const { username, email, password } = this.state;

    return (
      <div className="container">
        <div className="notification">
          Welcome to <strong>Code Chat</strong> on the web.
        </div>

        <div className="columns">
          <div className="column">
            
          </div>
          <div className="column">
            {/* logic part  */}
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.nameRed}`} 
                    type="text" 
                    placeholder="e.g Alex Smith"
                    name="username"
                    onChange={this.onChange}
                    value={username}/>
                </div>
              </div>

              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.emailRed}`} 
                    type="email" 
                    placeholder="e.g alex@email.com"
                    name="email"
                    onChange={this.onChange}
                    value={email}/>
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input 
                    className={`input ${this.state.passRed}`} 
                    type="password" 
                    placeholder="e.g Super Secrect"
                    name="password"
                    onChange={this.onChange}
                    value={password}/>
                </div>
              </div>

              <div className="control">
                <button className="button is-primary" onClick={this.onSubmit}>Submit</button>
              </div>
            {/* end  */}
          </div>
          <div className="column">
          </div>
        </div>

      </div>
    );
  }
}

const registerMutation = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      ok
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(registerMutation)(Register);