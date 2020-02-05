import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import EventForm from "./components/event-form";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <EventForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
