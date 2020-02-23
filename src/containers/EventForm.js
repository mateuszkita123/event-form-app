import React from "react";
import { connect } from "react-redux";
import { submitForm, changeDate } from "../actions";
import Calendar from "../components/Calendar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const mapStateToProps = function(state) {
  console.log("state.formData.event_date: ", state.formData.event_date)
  return {
    event_date: state.formData.event_date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => {
      dispatch(changeDate(date));
    },
    submit: data => {
      dispatch(submitForm(data));
      dispatch(changeDate(null));
    }
  };
};

const EventForm = (props, dispatch) => {
  const nodeObject = {
    first_name: "",
    last_name: "",
    user_email: ""
  };

  const userData = {
    first_name: "",
    last_name: "",
    user_email: "",
    event_date: null
  };

  const validateName = function(name) {
    const letters = new RegExp('^[A-Za-z]+$');
    if (name.match(letters)) {
      return true;
    } else {
      alert("Name and surname may contain only letters.");
      return false;
    }
  };

  const validateEmail = function(email) {
    const mailformat = new RegExp('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$');
    if (email.match(mailformat)) {
      return true;
    } else {
      alert("Invalid email.");
      return false;
    }
  };

  const validateDate = function(date) {
    if (date) {
      return true;
    } else {
      alert("Event date field can't be empty.")
      return false;
    }
  }

  const formValidation = function(dataObj) {
    const name = dataObj.first_name;
    const surname = dataObj.last_name;
    const email = dataObj.user_email;
    const date = dataObj.event_date;
    if (validateName(name)) {
      if (validateName(surname)) {
        if (validateEmail(email)) {
          if (validateDate(date)) {
            return true;
          }
        }
      }
    }
    return false;
  };

  const clearInput = function() {
    nodeObject.first_name.value = "";
    nodeObject.last_name.value = "";
    nodeObject.user_email.value = "";
  };

  const postData = function(dataObj) {
    axios
      .post("http://localhost:4000/users/add-user-data", dataObj)
      .then(res => console.log("res.data: ", res.data))
      .then(props.submit(dataObj))
      .then(clearInput());
  };

  const getData = function() {
    axios
      .get("http://localhost:4000/users/")
      .then(res => {
        console.log("users: ", res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="form-wrapper">
      <h1>Event Form</h1>

      <Form
        onSubmit={e => {
          e.preventDefault();

          if(
            !!nodeObject.first_name.value.trim() &&
            !!nodeObject.last_name.value.trim() &&
            !!nodeObject.user_email.value.trim() &&
            props.event_date !== null
          ) {
            // format data strings
            let first_name_str = nodeObject.first_name.value.trim().toLowerCase();
            first_name_str = first_name_str.charAt(0).toUpperCase() + first_name_str.substring(1);

            let last_name_str = nodeObject.last_name.value.trim().toLowerCase();
            last_name_str = last_name_str.charAt(0).toUpperCase() + last_name_str.substring(1);

            let user_email_str = nodeObject.user_email.value.trim().toLowerCase();

            // set userData to values of nodeObject fields
            userData.first_name = first_name_str;
            userData.last_name = last_name_str;
            userData.user_email = user_email_str;
            userData.event_date = props.event_date;


            // if (
            //   !nodeObject.first_name.value.trim() ||
            //   !nodeObject.last_name.value.trim() ||
            //   !nodeObject.user_email.value.trim() ||
            //   userData.event_date === null
            // ) {
            //   console.log("Submit forbidden - empty form field/s!");
            //   return;
            // } else {
            //   axios
            //     .post("http://localhost:4000/users/add-user-data", userData)
            //     .then(res => console.log("res.data: ", res.data))
            //     .then(props.submit(userData))
            //     .then(clearInput());
            // }

            const isValid = formValidation(userData);

            if(isValid) {
              postData(userData);
            }
          } else {
            alert("Form fields can't be empty.");
          }
        }}
      >
        <Form.Group controlId="FirstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            ref={node => (nodeObject.first_name = node)}
          />
        </Form.Group>

        <Form.Group controlId="LastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            ref={node => (nodeObject.last_name = node)}
          />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            // type="email"
            ref={node => (nodeObject.user_email = node)}
          />
        </Form.Group>

        <Form.Group controlId="EventDate">
          <Form.Label>Event date</Form.Label>
          <Calendar event_date={props.event_date} setDate={props.setDate} />
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit">
          Submit
        </Button>
      </Form>
      <Form
        onSubmit={e => {
          e.preventDefault();
          getData();
        }}
      >
        <Button variant="warning" size="lg" block="block" type="submit">
          Get Data
        </Button>
      </Form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(EventForm);
