import React from "react"
import { NavLink } from "react-router-dom"
import { Menu } from "semantic-ui-react"

// when we click on a name in the navbar it will take us to the certain page
const Navbar = () => (
  <Menu>
    <NavLink to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>

    <NavLink to="/user/profile">
      <Menu.Item >
        {/* Will replaced with the actual username */}
        User 
      </Menu.Item>
    </NavLink>
  </Menu>
)

export default Navbar