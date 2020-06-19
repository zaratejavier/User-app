import React from "react";
import { Card } from "semantic-ui-react";
import {UserConsumer} from "../providers/UserProvider"

//the use component has all the info about the user. we send this info to userProfile
const User = () => (
  <UserConsumer>
    {value => (
      <Card>
        <Card.Content>
          <Card.Header>{value.firstName} {value.lastName}</Card.Header>
          <Card.Meta>Postion: {value.position}</Card.Meta>
        </Card.Content>

        <Card.Content>
          <h5>Company: {value.company}</h5>
          <p>Experience: {value.experience}</p>
        </Card.Content>
      </Card>
  )}
  </UserConsumer>
)

export default User