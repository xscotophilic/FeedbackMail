import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    calculatePercentage(yes, no) {
        if (parseInt(yes) === 0) {
            return (
                <div style={{ fontWeight: '500', color: '#7e57c2' }}>
                    0 Responses!
                </div>
            );
        }
        return (
            <div style={{ textTransform: 'uppercase', fontWeight: '500', color: '#7e57c2' }}>
                {((yes / (yes + no)) * 100).toFixed(2)} % Yes &nbsp; &nbsp; &nbsp;
                {100 - ((yes / (yes + no)) * 100).toFixed(2)}% NO
            </div>
        );
    }

    renderSurveys = () => {
        return this.props.fetchedSurveys.reverse().map(survey => {
            return (
                <div key={survey._id} className="card darken-1">
                    <div className="card-content">
                        <span className="card-title">{survey.title}</span>
                        <p>{survey.body}</p>
                        <p className="right">Sent on: {new Date(survey.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <div style={{ textTransform: 'uppercase', fontWeight: '500', color: '#7e57c2' }}>Yes: {survey.yes} &nbsp; &nbsp; &nbsp; No: {survey.no}</div>
                        <br />
                        <div className="progress" style={{ backgroundColor: '#ffcc80' }}>
                            <div
                                className="determinate"
                                style={{ width: `${(survey.yes / (survey.yes + survey.no)) * 100}%`, backgroundColor: '#ef6c00' }}
                            >
                            </div>
                        </div>
                        {this.calculatePercentage(survey.yes, survey.no)}
                    </div>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

const mapStateToProps = ({ fetchedSurveys }) => {
    return { fetchedSurveys }
};

export default connect(
    mapStateToProps,
    {
        fetchSurveys
    }
)(SurveyList);