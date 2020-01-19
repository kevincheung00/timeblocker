import React from 'react';

import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheck';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Button from 'react-bootstrap/Button';

const Name = (props) => {


    if (props.regStep != 1)
        return null
    return(
        <React.Fragment>
        <Form>
        <Row>
            <Col>
                <Form.Control placeholder="First name" inputRef={ref => { this.firstName = ref; }} />
            </Col>
            <Col>
                <Form.Control placeholder="Last name" inputRef={ref => { this.lastName = ref; }}/>
            </Col>
        </Row>
        </Form>
        <span class="form-nav">
            <Button variant="outline-secondary" onClick={() => props.prevStep()}>Previous</Button>
        </span>
        <span class="form-nav">
            <Button variant="primary" onClick={() => this.nextStep()}>Next</Button>
        </span>

        </React.Fragment>
    );
}

export default Name;
