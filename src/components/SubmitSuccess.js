import React from "react";
import { connect } from 'react-redux';
import { toggleStatus } from '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RestartForm = ({ name, dispatch }) => {
  return (<div className="">
    <h1>
      Thank you for submitting the form {name}
    </h1>

    <Form onSubmit={e => {
      e.preventDefault();
      console.log("e: ", e);

      dispatch(toggleStatus());
    }}>
    <Button variant="primary" size="lg" block="block" type="submit">
      Fill another form
    </Button>
    </Form>
  </div>);
}

export default connect()(RestartForm)