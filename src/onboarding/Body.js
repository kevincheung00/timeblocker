import React from 'react';
import Fade from 'react-reveal/Fade';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Body extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            regStep: 1,
        }
    }


    render() {
        if (this.props.currStep != 2)
            return null
        return(
            <React.Fragment>
            <div class="main">
                <div class="form-item">
                    <h1>Sign Up</h1>
                    <p><i>All settings can be changed later</i></p>

                        <Fade up>
                        <Form>
                            <div class="item-padding">
                            <Row>
                                <Col>
                                    <label>First Name</label>
                                    <Form.Control
                                        placeholder="Justin"
                                        default="Justin"
                                    />
                                </Col>
                                <Col>
                                    <label>Last Name</label>
                                    <Form.Control
                                        placeholder="Zhang"
                                        default="Zhang"
                                    />
                                </Col>
                            </Row>
                            </div>

                            <div class="item-padding">
                            <h4>Active Hours</h4>
                            <Row>
                                <Col>
                                    <label>Start Time</label>
                                    <Form.Control
                                        placeholder="Justin"
                                        default="Justin"
                                    />
                                </Col>
                                <Col>
                                    <label>End Time</label>
                                    <Form.Control
                                        placeholder="Zhang"
                                        default="Zhang"
                                    />
                                </Col>
                            </Row>
                            </div>
                        </Form>
                        </Fade>
                    </div>
                </div>


            </div>
            </React.Fragment>
        );
    }
}
