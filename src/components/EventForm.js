import React from "react";
import { connect } from 'react-redux';
import { submitForm } from '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EventForm = ({ dispatch }) => {
  let nodeObject = {
    first_name: "",
    last_name: "",
    user_email: "",
    event_date: ""
  };

  return (<div className="form-wrapper">
    <h1>Event Form</h1>
    <Form onSubmit={e => {
      e.preventDefault();

      let userData = {
        first_name: "",
        last_name: "",
        user_email: "",
        event_date: ""
      };

      userData.first_name = nodeObject.first_name.value;
      userData.last_name = nodeObject.last_name.value;
      userData.user_email = nodeObject.user_email.value;
      userData.event_date = nodeObject.event_date.value;
      console.log("userData: ", userData);

      if (!nodeObject.first_name.value.trim() && !nodeObject.last_name.value.trim() && !nodeObject.user_email.value.trim() && !nodeObject.event_date.value.trim()) {
        return
      }

      // axios.post('http://localhost:4000/add-user-data', userObject)
      //   .then(res => console.log(res.data));
      dispatch(submitForm(userData));

      console.log("clear input");
      nodeObject.first_name.value = '';
      nodeObject.last_name.value = '';
      nodeObject.user_email.value = '';
      nodeObject.event_date.value = '';
    }}>
      <Form.Group controlId="FirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" ref={node => (nodeObject.first_name = node)} />
      </Form.Group>

      <Form.Group controlId="LastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" ref={node => (nodeObject.last_name = node)} />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" ref={node => (nodeObject.user_email = node)} />
      </Form.Group>

      <Form.Group controlId="EventDate">
        <Form.Label>Event date</Form.Label>
        <Form.Control type="text" ref={node => (nodeObject.event_date = node)} />
      </Form.Group>

      <Button variant="primary" size="lg" block="block" type="submit">
        Submit
      </Button>
    </Form>
  </div>);
}

export default connect()(EventForm)