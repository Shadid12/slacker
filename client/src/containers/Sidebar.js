import React from 'react';
import { gql, graphql } from 'react-apollo';
import _ from 'lodash';
import decode from 'jwt-decode';

import Channels from '../components/Channels';
import Teams from '../components/Teams';

const Sidebar = ({ data: { loading, allTeams }, currentTeamId }) => {
  if (loading) {
    return null;
  }

  
  const teamIdx = currentTeamId ? _.findIndex(allTeams, ['id', parseInt(currentTeamId, 10)]) : 0;
  const team = allTeams[teamIdx];
  console.log(team);
  let username = '';
  try {
    const token = localStorage.getItem('token');
    const { user } = decode(token);
    // eslint-disable-next-line prefer-destructuring
    username = user.username;
  } catch (err) {}

  return [
    <Teams 
      key="team-sidebar"
      teams={allTeams}
      currentTeam={team}
    />,
    <Channels
      key="channels-sidebar"
      teamName="Team name"
      username="Username"
      channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
      users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
    />
  ];
};

const allTeamsQuery = gql`
  {
    allTeams {
      id
      name
      channels {
        id
        name
      }
    }
  }
`;

export default graphql(allTeamsQuery)(Sidebar);