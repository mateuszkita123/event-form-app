import React from 'react';
import EventForm from "../containers/EventForm";
import SubmitSuccess from "./SubmitSuccess";
import { connect } from "react-redux";
import { toggleStatus } from '../actions';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

// store.subscribe(() => {
//   // When state will be updated(in our case, when items will be fetched), 
//   // we will update local component state and force component to rerender 
//   // with new data.

//   this.setState({
//     items: store.getState().items;
//   });
// });

const mapStateToProps = function(state){
  console.log("state: ", state);
  return {
    submitted: state.submitted,
    name: state.formData.first_name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formSubmit: e => {
      e.preventDefault();
      console.log("e: ", e);
      dispatch(toggleStatus());
    }
  }
}

const App = function(props) {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              { props.submitted ? <SubmitSuccess name={props.name} onSubmit={props.formSubmit} /> : <EventForm /> }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
