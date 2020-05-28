import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <h4>Dashboard!</h4>
                <div className="fixed-action-btn">
                    <Link to="/surveys/new" className="btn-floating btn-large blue">
                        <i className="material-icons" style={{ fontSize: '27px' }}>add</i>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;