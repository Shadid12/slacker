import React from 'react';

import Channels from '../components/Channels';
import Sidebar from '../containers/Sidebar';

import '../css/view-team.css';

export default () => (

    <aside className="column is-2 aside hero is-fullheight">
        <div>
        <div className="compose has-text-centered">
            <a className="button is-danger is-block is-bold">
            <span className="compose">Compose</span>
            </a>
        </div>
        <Sidebar currentTeamId={7}/>
        </div>
    </aside>
);