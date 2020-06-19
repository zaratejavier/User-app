import React from "react";
import { Card } from "semantic-ui-react";


const User = () => (
  <Card>
    <Card.Content>
      <Card.Header>FirstName LastName</Card.Header>
      <Card.Meta>Postion: Software Engineer</Card.Meta>
    </Card.Content>

    <Card.Content>
      <h5>Company: Apple</h5>
      <p>Experience</p>
    </Card.Content>
  </Card>
)

export default User