import React, { useState, Fragment } from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Media from "react-bootstrap/Media";

const Item = (props) => {
  return (
    <div class="task-item">
      <h5>{props.class}</h5>
      <h4>{props.name}</h4>

      <p>{props.due}</p>
    </div>
  );
};

export default Item;
