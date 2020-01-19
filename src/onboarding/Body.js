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

const Body = props => {
  const [inputFields, setInputFields] = useState([
    {
      firstName: "Justin",
      lastName: "Zhang",
      email: "uofthacks@uofthacks.com",
      password: "qwertyuiop",
      startTime: 8,
      endTime: 18
    }
  ]);

  const updateState = () => {

  };

  if (props.currStep != 2) return null;
  return (
    <React.Fragment>
      <div class="main">
        <div class="form-item">
          <h1>Sign Up</h1>
          <p>
            <i>All settings can be changed later</i>
          </p>
          <Form onSubmit={() => updateState()}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" value={inputFields.firstName} />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Next
            </Button>
          </Form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Body;
