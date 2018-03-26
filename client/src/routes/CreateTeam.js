import React from 'react';
import { extendObservable } from 'mobx';
import { observer } from 'mobx-react';
import { gql, graphql } from 'react-apollo';

class CreateTeam extends React.Component {
  constructor(props) {
    super(props);

    extendObservable(this, {
      name: '',
      errors: {},
    });
  }

  onSubmit = async () => {
    const { name } = this;
    const response = await this.props.mutate({
      variables: { name },
    });

    console.log(response);

    const { ok, errors, team } = response.data.createTeam;

    if (ok) {
      this.props.history.push(`/view-team/${team.id}`);
    } else {
      const err = {};
      errors.forEach(({ path, message }) => {
        err[`${path}Error`] = message;
      });

      this.errors = err;
    }
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this[name] = value;
  };

  render() {
    const { name, errors: { nameError } } = this;

    const errorList = [];

    if (nameError) {
      errorList.push(nameError);
    }

    return (
        <div className="container">
            <div className="notification">
                <strong>Create Your Team</strong>
            </div>
            <div className="columns">
                <div className="column">
                </div>
                <div className="column">
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className={`input`} 
                            type="text" 
                            placeholder="e.g spongebob's team"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                </div>
                <div className="control">
                    <button className="button is-primary" onClick={this.onSubmit}>Create</button>
                </div>
                </div>
                <div className="column">
                </div>
            </div>
        </div>
    );
  }
}

const createTeamMutation = gql`
  mutation($name: String!) {
    createTeam(name: $name) {
      ok
      team {
        id
      }
      errors {
        path
        message
      }
    }
  }
`;

export default graphql(createTeamMutation)(observer(CreateTeam));