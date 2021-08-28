import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Prompt } from 'react-router-dom';

export default function UsersForm(props) {
   const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      username: Yup.string().required(),
   });

   return (
      // this is old way to write formik
      <Formik enableReinitialize={true} initialValues={props.values} onSubmit={props.onSubmit} validationSchema={schema}>
         {(props) => {
            return (
               <Form className="form" autoComplete="off">
                  {props.values.id ? null : ( // <Prompt when={props.values.name === props.initialValues.name && props.values.email === props.initialValues.email && props.values.username === props.initialValues.username} message={'you dont edit any think (there are same name, email and username)'} />
                     <Prompt when={props.dirty} message={'are you want to leave this page without add user'} />
                  )}
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
}
