import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"
import {UserConsumer} from "../providers/UserProvider"

// when we click on a name in the navbar it will take us to the certain page
const Navbar = () => (
  <UserConsumer>
    {value => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>

    <NavLink to="/user/profile">
      <Menu.Item >
        {/* Will replaced with the actual username */}
        {value.firstName}
      </Menu.Item>
    </NavLink>
  </Menu>
  )}
  </UserConsumer>
)

export default Navbar