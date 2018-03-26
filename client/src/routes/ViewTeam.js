import React from 'react';

import Channels from '../components/Channels';
import Sidebar from '../containers/Sidebar';

import '../css/view-team.css';

const ViewTeam = ({ match: { params } }) => (

    <aside className="column is-2 aside hero is-fullheight">
        <div>
        <div className="compose has-text-centered">
            <a className="button is-danger is-block is-bold" href="/create-team">
                <span className="compose">Compose</span>
            </a>
        </div>
        <Sidebar currentTeamId={params.teamId}/>
        </div>
    </aside>
);

export default ViewTeam;