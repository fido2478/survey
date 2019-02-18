// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
  renderFields() {
    // take out each element from formFields and apply <Field
    return _.map(formFields, ({ label, name }) => {
      return (
        // type, component, name are essential and name is used to track a form
        // key is required in Field and its value should be unique
        <Field
          key={name}
          component={SurveyField} 
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        {/* whenever submitting a form, it automatically pass in the func defined */}
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          {/* when Cancel is clicked, all data should be dumped out =>
          destroyOnUnmount: true */}
          <Link to="/surveys" className="red btn-flat white-text">
            Cancel
          </Link>
          <button type="submit" className="teal btn-flat right white-text">
            Next
            <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

// make sure recipients are separated by comma
// make sure it has email format
function validate(values) {
  // values include all fields
  const errors = {};

  errors.recipients = validateEmails(values.recipients || '');

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });

  // if there is anything invalid, return it
  return errors;
}

export default reduxForm({
  validate,
  // tell Redux form to handle an object named surveyForm
  form: 'surveyForm',
  // tell Redux not to dump the values out when getting out the page
  destroyOnUnmount: false
})(SurveyForm);
