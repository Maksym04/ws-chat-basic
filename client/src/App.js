import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useLayoutEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import { bindActionCreators } from 'redux';
import './App.css';
import * as chatActionCreators from './actions/actionCreators';

function App () {
  const { messages, isFetching, error } = useSelector(state => state.chat);
  const dispatch = useDispatch();
  const { getMessagesAction, createMessageAction } = bindActionCreators(
    chatActionCreators,
    dispatch
  );

  // экшн на получение сообщения
  useEffect(() => {
    getMessagesAction();
  }, []);

  return (
    <>
      <ul>
        {messages.map(m => (
          <li>
            {m.author} {m.body} {m.createdAt}
          </li>
        ))}
      </ul>
      {error && <div>ERROR</div>}
      {isFetching && <div>Loading...</div>}
      <Formik
        initialValues={{ author: '', body: '' }}
        onSubmit={(values, formikBag) => {
          // экшн на создание сообщения
          createMessageAction(values);
          formikBag.resetForm();
        }}
      >
        {formik => (
          <Form>
            <Field name='author'></Field>
            <Field name='body'></Field>
            <button type='submit'>Send</button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default App;
