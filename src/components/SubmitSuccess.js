import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const RestartForm = ({ name, onSubmit }) => {
  return (<div id="header" className="header">
    <h1>
      Thank you for submitting the form {name}
    </h1>

    <Form onSubmit={onSubmit}>
    <Button variant="primary" size="lg" block="block" type="submit">
      Fill another form
    </Button>
    </Form>
  </div>);
}

RestartForm.propTypes = {
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default connect()(RestartForm)