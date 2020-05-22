import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
            <header>
                <div className="ui container">
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className="left brand-logo"
                    >
                        FeedbackMail
                    </Link>
                    <input id="nav" type="checkbox" />
                    <label htmlFor="nav"></label>
                    <nav style={{ backgroundColor: 'transparent' }}>
                        <ul>
                            {this.renderContent()}
                            <li><a href="https://xscotophilic.ml/">MY PORTFOLIO</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps)(Header);