import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SurveyList from '../Surveys/SurveyList';

class Dashboard extends Component {
    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <SurveyList />
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