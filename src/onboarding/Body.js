import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "react-bootstrap/Button";

import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

const Body = (props) =>  {
  const updateState = () => {
    props.start(this._firstName, this._lastName, this._Email, this._startTime, this._endTime, this._assignmentDays, this._examDays)
  }
    if (props.currStep != 2) return null;
    return (
      <React.Fragment>
        <div class="main">
          <div class="form-item logo-header">
            <h1>
              <b>
                Time Block <br />
                Your Life
              </b>
            </h1>
          </div>

          <div class="form-item">
            <h1>Sign Up</h1>
            <p>
              <i>All settings can be changed later</i>
            </p>

            <Form onSubmit={() => this.updateState()}>
              <Fade>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder={props.firstName} inputRef={(ref) => { this._firstName = ref }}/>
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" value={props.lastName} inputRef={(ref) => { this._lastName = ref }}/>
                  </Form.Group>
                </Form.Row>
              </Fade>

              <Fade>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" value={props.email} inputRef={(ref) => { this._Email = ref }}/>
                </Form.Group>
              </Fade>

              <Fade>
                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={props.password} inputRef={(ref) => { this._Password = ref }}/>
                </Form.Group>
              </Fade>

              <Fade>
                <p>
                  <br />
                  Tell us when you want us to schedule your tasks! (24 hour
                  time)
                </p>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridStartTime">
                    <Form.Label>Start Time</Form.Label>
                      <Form.Label>For Assignments?</Form.Label>
                      <Form.Control type="number" step="1" value={props.startTime} inputRef={(ref) => { this._startTime = ref }}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEndTime">
                    <Form.Label>Ending Time</Form.Label>
                      <Form.Label>For Assignments?</Form.Label>
                      <Form.Control type="number" step="1" value={props.endTime} inputRef={(ref) => { this._endTime = ref }}/>
                  </Form.Group>
                </Form.Row>
              </Fade>

              <Fade>
                <p>
                  <br />
                  How many <b>days</b> in advance do you want to start tasks?
                  <br />
                  <i>This can be adjusted on a case-by-case basis</i>
                </p>
                <Form.Row>
                  <Form.Group as={Col} controlId="advanceAssignments">
                    <Form.Label>For Assignments?</Form.Label>
                    <Form.Control type="number" step="1" value={props.assignmentDays} inputRef={(ref) => { this._assignmentDays = ref }}/>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridExamTime">
                    <Form.Label>For Exams?</Form.Label>
                    <Form.Control type="number" step="1" value={props.examDays} inputRef={(ref) => { this._examDays = ref }}/>
                  </Form.Group>
                </Form.Row>
              </Fade>

              <Fade up>
                <Button variant="success" type="submit" size="lg">
                  Start Blocking!
                </Button>
              </Fade>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
}

export default Body;
