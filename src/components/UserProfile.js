import React from "react"
import User from "./User"
import UserForm from "./UserForm"

//We call our compenent User and UserForm to display on screen

const UserProfile = () => (
  <>
    <User/>
    {/* this will get passed to the userForm to use */}
    <UserForm formLabel={"User From"}/> 

  </>
)

export default UserProfile