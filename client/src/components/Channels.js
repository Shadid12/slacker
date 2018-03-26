import React from 'react';


const channel = ({ id, name }) => <li key={`channel-${id}`}># {name}</li>;

const user = ({ id, name }) => <li key={`user-${id}`}>{name}</li>;

export default ({
    teamName, username, channels, users,
  }) => (
    <div className="main">
        <a className="item active">
            <span className="icon">
                <i class="far fa-address-book"></i>
            </span>
            <span className="name">Channels</span>
        </a>
        <li style={{"list-style-type": "none"}}>
            <ul>
                <li style={{ "padding": "2px" }}>{channels.map(channel)}</li>
            </ul>
        </li>
    </div>
  );