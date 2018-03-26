import React from 'react';

import Channels from '../components/Channels';

import '../css/view-team.css';

export default () => (

    <aside className="column is-2 aside hero is-fullheight">
        <div>
        <div className="compose has-text-centered">
            <a className="button is-danger is-block is-bold">
            <span className="compose">Compose</span>
            </a>
        </div>
        <Channels
            teamName="Team name"
            username="Username"
            channels={[{ id: 1, name: 'general' }, { id: 2, name: 'random' }]}
            users={[{ id: 1, name: 'slackbot' }, { id: 2, name: 'user1' }]}
        />

        <div className="main">
            <a href="#" className="item active"><span className="icon"><i className="fa fa-inbox"></i></span><span className="name">Inbox</span></a>
            <a href="#" className="item"><span className="icon"><i className="fa fa-star"></i></span><span className="name">Starred</span></a>
            <a href="#" className="item"><span className="icon"><i className="fa fa-envelope-o"></i></span><span className="name">Sent Mail</span></a>
            <a href="#" className="item"><span className="icon"><i className="fa fa-folder-o"></i></span><span className="name">Folders</span></a>
        </div>
        </div>
    </aside>
);