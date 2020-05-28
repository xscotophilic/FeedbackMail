import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import formFields from './formFields';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {

    renderFields() {
        return _.map(formFields, ({ lable, name }) => {
            return (
                <div key={name}>
                    <Field
                        component={SurveyField}
                        type="text"
                        lable={lable}
                        name={name}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div style={{ paddingTop: '20px' }}>
                <h5>Fill in the details of feedback you want to take</h5>
                <br />
                <form autoComplete="off" onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="btn-flat red white-text">
                        <i className="material-icons left">close</i>
                        Cancel
                    </Link>
                    <button
                        className="btn-flat right blue white-text"
                        type="submit"
                    >
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

const validate = (values) => {
    const errors = {};

    _.each(formFields, ({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}.`;
        }
    });

    errors.recipients = validateEmails(values.recipients || '');

    return errors;
};

export default reduxForm({
    form: 'surveyForm',
    validate,
    destroyOnUnmount: false
})(SurveyForm);