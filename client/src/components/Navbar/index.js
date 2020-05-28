import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../Payments';
import './Navbar.css';

class Header extends Component {

    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/google">Login With Google</a></li>;
            default:
                return [
                    <li key="asdf0"><Link to='/surveys' style={{ marginRight: '20px' }}>Dashboard</Link></li>,
                    <li key="asdf1" ><Payments /></li>,
                    <li key="asdf2" className="liwithouta">Credits: {this.props.auth.credits}</li>,
                    <li key="asdf3"><a href="/api/logout">Logout</a></li>
                ];
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
                    <div className="navbar" style={{ backgroundColor: 'transparent' }}>
                        <ul>
                            {this.renderContent()}
                            <li><a href="https://xscotophilic.ml/">MY PORTFOLIO</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
};

export default connect(mapStateToProps)(Header);