import React from 'react';


const team = ({ id, name }) => (
    <a key={`team-${id}`} className="panel-block is-active">
         <span className="panel-icon">
            <i className="fas fa-book"></i>
         </span>
        {name}
    </a>
);

export default ({ teams }) => (
    <div className="main">
        <nav className="panel">
            <p className="panel-heading">
                Teams
            </p>
            <div className="panel-block">
                <p className="control has-icons-left">
                <input className="input is-small" type="text" placeholder="search" />
                </p>
            </div>
            <div>
                {teams.map(team)}
            </div>
        </nav>
    </div>
);