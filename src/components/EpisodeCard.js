import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardText,
  Col
} from 'reactstrap';

export default function EpisodeCard(data) {
  return (
    <Col xs="6" md="4" xl="3">
      <Card body outline color="success">
        <CardHeader>Name: {data.name} </CardHeader>
        <CardBody>
          <CardText>Air Date: {data.ari_date}</CardText>
          <CardText>Episode: {data.episode}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};