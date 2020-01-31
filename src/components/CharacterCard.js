import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from 'reactstrap';


export default function CharacterCard(data) {
  return (
    <Col xs="6" md="4" xl="3">
      <Card body outline color="success">
        <CardHeader>Name: {data.name} </CardHeader>
        <CardBody>
          <CardText>Status: {data.status}</CardText>
          <CardText>Species: {data.species}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
