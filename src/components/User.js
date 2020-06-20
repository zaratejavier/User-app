import React, { useContext } from "react";
import { Card } from "semantic-ui-react";
import { UserContext } from "../providers/UserProvider"

//the use component has all the info about the user. we send this info to userProfile
const User = () => {
  const user = useContext(UserContext);

  return(
      <Card>
        <Card.Content>
          <Card.Header>{user.firstName} {user.lastName}</Card.Header>
          <Card.Meta>Postion: {user.position}</Card.Meta>
        </Card.Content>

        <Card.Content>
          <h5>Company: {user.company}</h5>
          <p>Experience: {user.experience}</p>
        </Card.Content>
      </Card>
    )
  }

export default User