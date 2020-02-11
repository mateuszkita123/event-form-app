// import React from "react";
// import { connect } from 'react-redux';
// import { submitForm, changeDate } from '../actions';
// import EventForm from "../components/EventForm";

// import axios from 'axios';

// const mapStateToProps = function(state) {
//   console.log("state: ", state);
//   return {
//     event_date: state.formData.event_date
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setDate: (date) => {
//       let dateString = parseDate(date);
//       dispatch(changeDate(dateString));
//     },
//     formSubmit: (e) => {
//       e.preventDefault();

//       let nodeObject = {
//         first_name: "",
//         last_name: "",
//         user_email: ""
//       };
    
//       let userData = {
//         first_name: "",
//         last_name: "",
//         user_email: "",
//         event_date: ""
//       };

//       userData.first_name = nodeObject.first_name.value;
//       userData.last_name = nodeObject.last_name.value;
//       userData.user_email = nodeObject.user_email.value;
//       // userData.event_date = nodeObject.event_date.value;
//       console.log("userData: ", userData);

//       if (!nodeObject.first_name.value.trim() && !nodeObject.last_name.value.trim() && !nodeObject.user_email.value.trim()) {
//         return
//       }

//       // axios.post('http://localhost:4000/add-user-data', userObject)
//       //   .then(res => console.log(res.data));

//       dispatch(submitForm(userData));

//       console.log("clearing input");
//       nodeObject.first_name.value = '';
//       nodeObject.last_name.value = '';
//       nodeObject.user_email.value = '';
//       // dispatch(changeDate(null));
//     }
//   }
// }

// const parseDate = function(date) {
//   let str = "";

//   //parse date parameters
//   let year = date.getFullYear();
//   let month = date.getMonth() + 1;
//   let day = date.getDate();

//   //converting to strings
//   year = year.toString(10);
//   month = month.toString(10);
//   day = day.toString(10);

//   //checking if "0" prefix is needed
//   if (month.length === 1) {
//       month = "0" + month;
//   }
//   if (day.length === 1) {
//       day = "0" + day;
//   }
  
//   //concat date string
//   str = year + "-" + month + "-" + day;
  
//   console.log("getDate: ", str);
//   return str;
// }

// const HandleForm = (props) => {
//   // return (<EventForm event_date={props.event_date} />)
//   let nodeObject = {
//     first_name: "",
//     last_name: "",
//     user_email: ""
//   };

//   let userData = {
//     first_name: "",
//     last_name: "",
//     user_email: "",
//     event_date: ""
//   };

//   let setDate = function(date) {
//     // nodeObject.event_date.value = date;
//     // console.log("dateObj1: ", dateObj);
//     // dateObj = date;
    
//     // console.log("dateObj1: ", dateObj);
//     // nodeObject.event_date.value = parseDate(dateObj);
//     // console.log("parseDate(dateObj): ", parseDate(dateObj));
//     // console.log("typeof parseDate(dateObj): ", typeof parseDate(dateObj));
//     let dateString = parseDate(date);

//     dispatch(changeDate(dateString));
//   };

//   return (<div className="form-wrapper">
//     <h1>Event Form</h1>
//     <Form onSubmit={e => {
//       e.preventDefault();

//       userData.first_name = nodeObject.first_name.value;
//       userData.last_name = nodeObject.last_name.value;
//       userData.user_email = nodeObject.user_email.value;
//       // userData.event_date = nodeObject.event_date.value;
//       console.log("userData: ", userData);

//       if (!nodeObject.first_name.value.trim() && !nodeObject.last_name.value.trim() && !nodeObject.user_email.value.trim()) {
//         return
//       }

//       // axios.post('http://localhost:4000/add-user-data', userObject)
//       //   .then(res => console.log(res.data));

//       dispatch(submitForm(userData));

//       console.log("clearing input");
//       nodeObject.first_name.value = '';
//       nodeObject.last_name.value = '';
//       nodeObject.user_email.value = '';
//       // dispatch(changeDate(null));
//     }}>
//       <Form.Group controlId="FirstName">
//         <Form.Label>First name</Form.Label>
//         <Form.Control type="text" ref={node => (nodeObject.first_name = node)} />
//       </Form.Group>

//       <Form.Group controlId="LastName">
//         <Form.Label>Last name</Form.Label>
//         <Form.Control type="text" ref={node => (nodeObject.last_name = node)} />
//       </Form.Group>

//       <Form.Group controlId="Email">
//         <Form.Label>Email</Form.Label>
//         <Form.Control type="email" ref={node => (nodeObject.user_email = node)} />
//       </Form.Group>

//       <Form.Group controlId="EventDate">
//         <Form.Label>Event date</Form.Label>
//         <DatePicker
//           selected={props.event_date}
//           onChange={date => this.props.setDate(date)}
//           minDate={new Date()}
//           placeholderText="Select an event date"
//           name="startDate"
//           dateFormat="yyyy-MM-dd"
//         />
//         {/* <Form.Control type="text" ref={node => (nodeObject.event_date = node)} /> */}
//       </Form.Group>

//       <Button variant="primary" size="lg" block="block" type="submit">
//         Submit
//       </Button>
//     </Form>
//   </div>);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(HandleForm);
