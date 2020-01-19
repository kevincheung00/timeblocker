import React, { useState, Fragment } from "react";

import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormCheck from "react-bootstrap/FormCheck";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";
import Modal from "react-bootstrap/Modal";
import ModalTitle from "react-bootstrap/ModalTitle";

import Avatar from "./student.png";
import axios from "axios";

import Item from "./Item.js";

const MainApp = props => {
  const [newInput, setnewInput] = useState([
    {
      class: "CS2214b",
      type: "Exam",
      due: "2020-01-23",
      name: "Assignment 2 - Python"
    },
    { class: "CS2212b", type: "Assignment", due: "2020-01-20", name: "Assignment 3" },
    {
      class: "WRITING2111G",
      type: "Assignment",
      due: "2020-02-01",
      name: "Illiad Essay"
    },
    {
      class: "BUS2257",
      type: "Exam",
      due: "2020-02-03",
      name: "Feasibility Study"
    },
    { class: "CS2214b", type: "Exam", due: "2020-02-04", name: "Midterm" },
    { class: "CS2212b", type: "Exam", due: "2020-02-05", name: "Midterm" },
  ]);

  const [ show, setShow ] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [ _course, setCourse] = useState("CS2209b");
  const [ _type, setType] = useState("Exam");
  const [ _due, setDue] = useState("2020-01-25");
  const [ _name, setName] = useState("");

  const handleChange = (event) => {
      switch (event.target.id)    {
          case "course":
              setCourse(event.target.value)
              break;
          case "type":
              setType(event.target.value)
              break;
          case "due":
              setDue(event.target.value)
              break;
          default:
              setName(event.target.value)
      }
  }

  const handleSubmit = () =>  {
    handleClose()

    const x = [...newInput];
    x.push({ class: _course, type: _type, due: _due, name: _name })

    setnewInput(x);
    console.log(newInput);
  }

  if (props.currStep != 3) return null;
  return (
    <React.Fragment>
      <Container id="container-override">
        <Row>
          <Col sm={2}>
            <div class="side-bar">
              <div class="fitting">
                <Fade left>
                  <Media>
                    <img
                      width={64}
                      height={64}
                      className="mr-3"
                      src={Avatar}
                      alt="Profile Pic"
                    />
                    <Media.Body>
                      <h5>{props.name}</h5>
                      <p>Western University</p>
                    </Media.Body>
                  </Media>
                </Fade>

                <div class="classwork">
                  <Fade left>
                    <h4>
                      Classes
                      <br /> <br />
                    </h4>
                    <p>CS2212b</p>
                    <p>CS2209b</p>
                    <p>WRITING2111G</p>
                    <p>CS2034b</p>
                    <p>BUS2257</p>
                  </Fade>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={10}>
            <div class="app-header">
              <Fade>
                <h2>
                  <b>Welcome back,</b> {props.name}!
                </h2>
              </Fade>
            </div>
            <div class="flex-container">
              {newInput.map(newInputs => (
                <Fade up>
                  <Item
                    name={newInputs.name}
                    class={newInputs.class}
                    due={newInputs.due}
                  />
                </Fade>
              ))}
            </div>

            <div id="add">
              <Button variant="success" onClick={handleShow} size="lg">
                Add To-Do
              </Button>

              <Button variant="info" size="lg">
                Send to Calendar
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter In New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" id="name" placeholder="Name of work" onChange={event => handleChange(event)}/>
            </Form.Group>

            <Form.Group controlId="course">
              <Form.Label>Select the course</Form.Label>
              <Form.Control as="select" id="course" onChange={event => handleChange(event)}>
                <option>CS2209b</option>
                <option>CS2212b</option>
                <option>CS2034b</option>
                <option>BUS2257</option>
                <option>WRITING2111G</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control as="select" id="type" value="2020-03-14" onChange={event => handleChange(event)}>
                <option>Exam</option>
                <option>Assignment</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="due">
              <Form.Label>Due Date</Form.Label>
              <Form.Control type="text" id="due" value="2020-01-25" onChange={event => handleChange(event)}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default MainApp;
