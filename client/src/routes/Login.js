import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { gql, graphql } from 'react-apollo';

class Login extends React.Component {
    constructor(props) {
      super(props);

      extendObservable(this, {
        email: '',
        password: '',
        errors: ''
      });
    }

    onSubmit = async () => {
        const { email, password } = this;
        const response = await this.props.mutate({
          variables: { email, password },
        });
        
        const { ok, token, refreshToken, errors } = response.data.login;
        
        if (ok) {
          localStorage.setItem('token', token);
          localStorage.setItem('refreshToken', refreshToken);
          this.props.history.push('/');
        } else {
            const err = {};
            errors.forEach(({ path, message }) => {
                err[`${path}Error`] = message;
              });
        
            this.errors = err;
        }

    };

    onChange = e => {
      const { name, value } = e.target;
      this[name] = value;
    };

    render() {

        const { email, password, errors: { emailError, passwordError } } = this;

        const errorList = [];
    
        if (emailError) {
          errorList.push(emailError);
        }
    
        if (passwordError) {
          errorList.push(passwordError);
        }
    

      return (
        <div className="container">
            <div className="notification">
                <strong>Login</strong>
            </div>
            <div className="columns">
                <div className="column">
                </div>
                <div className="column">
                {/* logic part  */}

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input 
                            className={`input`} 
                            type="email" 
                            placeholder="e.g alex@email.com"
                            name="email"
                            onChange={this.onChange}
                            value={email}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input 
                            className={`input`} 
                            type="password" 
                            placeholder="e.g Super Secrect"
                            name="password"
                            onChange={this.onChange}
                            value={password}
                        />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary" onClick={this.onSubmit}>Login</button>
                </div>
                {/* end */}
                </div>
                <div className="column">
                </div>
            </div>
            {errorList.length ? (
                <article className="message is-danger animated rubberBand">
                    <div className="message-body">
                        {errorList[0]}
                    </div>
                </article>
            ) : null}
        </div>
      );
    }
}

const loginMutation = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      ok
      token
      refreshToken
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(loginMutation)(observer(Login));