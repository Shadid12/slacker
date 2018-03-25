import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';

export default observer(
  class Login extends React.Component {
    constructor(props) {
      super(props);

      extendObservable(this, {
        email: '',
        password: '',
      });
    }

    onSubmit = () => {
      const { email, password } = this;
      console.log(email);
      console.log(password);
    };

    onChange = e => {
      const { name, value } = e.target;
      this[name] = value;
    };

    render() {
      const { email, password } = this;

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
        </div>
      );
    }
  },
);