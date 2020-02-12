import React from "react";
import { connect } from "react-redux";
import { submitForm, changeDate } from '../actions';
import Calendar from '../components/Calendar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import axios from 'axios';

const mapStateToProps = function(state) {
  console.log("state: ", state);
  return {
    event_date: state.formData.event_date
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setDate: (date) => {
      dispatch(changeDate(date));
    },
    submit: (data) => {
      dispatch(submitForm(data));
      dispatch(changeDate(null));
    }
  };
}

const EventForm = (props, dispatch) => {
  console.log("dispatch: ", dispatch);
  console.log("props: ", props);
  let nodeObject = {
    first_name: "",
    last_name: "",
    user_email: ""
  };

  let userData = {
    first_name: "",
    last_name: "",
    user_email: "",
    event_date: {}
  };

  let clearInput = function() {
    console.log("clearing input");
    nodeObject.first_name.value = '';
    nodeObject.last_name.value = '';
    nodeObject.user_email.value = '';
  };

  let getData = function() {
    axios.get('http://localhost:4000/users/')
    .then(res => {
      console.log("users: ", res);
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (<div className="form-wrapper">
    <h1>Event Form</h1>
    
    <Form onSubmit={(e) => {
      e.preventDefault();

      userData.first_name = nodeObject.first_name.value;
      userData.last_name = nodeObject.last_name.value;
      userData.user_email = nodeObject.user_email.value;
      userData.event_date = props.event_date;

      if (!nodeObject.first_name.value.trim() || !nodeObject.last_name.value.trim() || !nodeObject.user_email.value.trim() || userData.event_date === null) {
        console.log("Submit forbidden");
        return
      } else {
        axios.post('http://localhost:4000/users/add-user-data', userData)
          .then(res => console.log("res.data: ", res.data))
          .then(props.submit(userData))
          .then(clearInput())
      }
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
        <Calendar event_date={props.event_date} setDate={props.setDate} />
      </Form.Group>

      <Button variant="primary" size="lg" block="block" type="submit">
        Submit
      </Button>
    </Form>
    <Form onSubmit={(e) => {
      e.preventDefault();

      getData();
    }}>
      <Button variant="warning" size="lg" block="block" type="submit">
        Get Data
      </Button>
    </Form>
  </div>);
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);