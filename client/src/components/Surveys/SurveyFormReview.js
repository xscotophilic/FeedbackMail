import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

class SurveyFormReview extends Component {

    state = {
        loading: false
    };

    renderLoding = () => {
        if (this.state.loading) {
            return (
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            );
        }
        return;
    };

    renderFields = () => {
        return _.map(formFields, ({ lable, name }) => {
            return (
                <div key={name} style={{ marginBottom: '8px' }}>
                    <label style={{ fontSize: '16px' }}>{lable}</label>
                    <div style={{ fontSize: '18px' }}>{this.props.formValues[name]}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h5>Please confirm entries</h5>
                <br />
                {this.renderFields()}
                <br />
                <button
                    className="btn-flat left yellow darken-3 white-text"
                    onClick={this.props.onCancel}
                >
                    <i className="material-icons left">arrow_back</i>
                    Back
                </button>
                <button
                    className="btn-flat right green white-text"
                    onClick={
                        () => {
                            this.setState({ loading: true });
                            (this.props.submitSurvey(this.props.formValues, this.props.history));
                        }
                    }
                >
                    Send
                    <i className="material-icons right">email</i>
                </button>
                <br />
                <br />
                <br />
                {this.renderLoding()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { formValues: state.form.surveyForm.values };
};

export default connect(
    mapStateToProps,
    actions
)(withRouter(SurveyFormReview));