import React from 'react';
import { Link } from 'react-router-dom';


const team = ({ id, name }) => {
    return(
        <Link key={`team-${id}`} to={`/view-team/${id}`}>
            <div key={`team-${id}`} className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book"></i>
                </span>
                {name}
            </div>
        </Link>
    )
}

export default ({ teams, currentTeam }) => (
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