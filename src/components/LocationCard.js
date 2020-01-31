import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from 'reactstrap';

export default function LocationCard(data) {
  return (
    <Col xs="6" md="4" xl="3">
      <Card body outline color="success">
        <CardHeader>Name: {data.name} </CardHeader>
        <CardBody>
          <CardText>Dimension: {data.dimension}</CardText>
          <CardText>Type: {data.type}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};