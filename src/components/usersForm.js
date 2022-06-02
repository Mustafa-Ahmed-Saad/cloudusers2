import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Prompt } from 'react-router-dom';
import { schema } from '../validation/usersFormValidation';

const UsersForm = ({ onSubmit, values }) => {
  return (
    <Formik enableReinitialize={true} initialValues={values} onSubmit={onSubmit} validationSchema={schema}>
      {(props) => {
        return (
          <Form className="form" autoComplete="off">
            {props.values.id ? null : <Prompt when={props.dirty} message={'are you want to leave this page without add user'} />}
            <div className="input-container ic1">
              <Field name="name" id="firstname" className="input" placeholder=" " />
              <div className="cut cut-short"></div>
              <label htmlFor="firstname" className="placeholder">
                Name
              </label>
              <ErrorMessage name="name" />
            </div>
            <hr />

            <div className="input-container ic2">
              <Field name="email" id="lastname" className="input" placeholder=" " />
              <div className="cut cut-short"></div>
              <label htmlFor="lastname" className="placeholder">
                Email
              </label>
              <ErrorMessage name="email" />
            </div>
            <hr />

            <div className="input-container ic2">
              <Field name="username" id="email" className="input" placeholder=" " />
              <div className="cut"></div>
              <label htmlFor="email" className="placeholder">
                user name
              </label>
              <ErrorMessage name="username" />
            </div>

            <button type="submit" className="submit btn btn-primary">
              {props.values.id ? 'Edit' : 'Add'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default UsersForm;
