import React from 'react';
import '../css/view-team.css';

export default () => (
    
    <div >
        <section className="main-content columns is-fullheight">
        <aside className="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
            <p className="menu-label is-hidden-touch">Username</p>
            <ul className="menu-list">
            <li>
                <a className="">
                <span className="icon"><i className="fa fa-home"></i></span> Home
                </a>
            </li>
            <li>
                <a  className="is-active">
                <span className="icon"><i className="fa fa-table"></i></span> Channels
                </a>

                <ul>
                <li>
                    <a>
                    <span className="icon is-small"><i className="fa fa-link"></i></span> Link1
                    </a>
                </li>
                <li>
                    <a>
                    <span className="icon is-small"><i className="fa fa-link"></i></span> Link2
                    </a>
                </li>
                </ul>
            </li>
            <li>
                <a className="">
                <span className="icon"><i className="fa fa-info"></i></span> About
                </a>
            </li>
            </ul>
        </aside>
        </section>
    </div>
);