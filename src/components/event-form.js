import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EventForm extends Component {
    constructor(props) {
      super(props)

      // Setting up functions
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
      this.onChangeEventDate = this.onChangeEventDate.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      // Setting up state
      this.state = {
        first_name: '',
        last_name: '',
        user_email: '',
        event_date: ''
      }
    }

    onChangeFirstName(e) {
      this.setState({ first_name: e.target.value })
    }

    onChangeLastName(e) {
        this.setState({ last_name: e.target.value })
      }

    onChangeUserEmail(e) {
      this.setState({ user_email: e.target.value })
    }

    onChangeEventDate(e) {
      this.setState({ event_date: e.target.value })
    }

    onSubmit(e) {
      e.preventDefault()

      const userObject = {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        user_email: this.state.user_email,
        event_date: this.state.event_date
      };
      axios.post('http://localhost:4000/', userObject)
        .then(res => console.log(res.data));

      this.setState({ first_name: '', last_name: '', user_email: '', event_date: '' })
    }

    render() {
    return (<div className="form-wrapper">
    <Form onSubmit={this.onSubmit}>
      <Form.Group controlId="FirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" value={this.state.first_name} onChange={this.onChangeFirstName} />
      </Form.Group>

      <Form.Group controlId="LastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" value={this.state.last_name} onChange={this.onChangeLastName} />
      </Form.Group>

      <Form.Group controlId="Email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" value={this.state.user_email} onChange={this.onChangeUserEmail} />
      </Form.Group>

      <Form.Group controlId="EventDate">
        <Form.Label>Event date</Form.Label>
        <Form.Control type="text" value={this.state.event_date} onChange={this.onChangeEventDate} />
      </Form.Group>

      <Button variant="primary" size="lg" block="block" type="submit">
        Submit
      </Button>
    </Form>
  </div>);
  }
}