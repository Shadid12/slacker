import React from 'react';


const channel = ({ id, name }) => <li key={`channel-${id}`}># {name}</li>;

const user = ({ id, name }) => <li key={`user-${id}`}>{name}</li>;

export default ({
    teamName, username, channels, users,
  }) => (
    <div className="main">
        <a className="item active">
            <span className="icon">
                <i className="far fa-address-book"></i>
            </span>
            <span className="name">Channels</span>
        </a>
        <li style={{"listStyleType": "none"}}>
            <ul>
                <div style={{ "padding": "2px" }}>{channels.map(channel)}</div>
            </ul>
        </li>
    </div>
  );