import React from "react";
import { Card } from "semantic-ui-react";

//the use component has all the info about the user. we send this info to userProfile
const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>FirstName LastName</Card.Header>
      <Card.Meta>Postion: Software Engineer</Card.Meta>
    </Card.Content>

    <Card.Content>
      <h5>Company: Apple</h5>
      <p>Experience: 5 years</p>
    </Card.Content>
  </Card>
)

export default User