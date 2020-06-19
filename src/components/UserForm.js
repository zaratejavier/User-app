import React from "react"
import { Form } from "semantic-ui-react"

class UserForm extends React.Component{
  state = {firstName: "", lastName:"", position:"", company:"", experience:""}

  handleChange = (e, {name, value}) => {
  this.setState({[name]: value}) //this will pass the info we put in to the state to store it
  }

  handleSubmit= (e) => {
    e.preventdefault();
  }

  render() {
    const {firstName, lastName, position, experience, company} = this.state //this just destructs the items from the state
    return(
      <>
      <h1>{this.props.formLabel}</h1>
      <Form onSubmit={this.handleSubmit}>
        <Form.Input 
          label="First Name"
          type="text"
          name="firstName"
          value={firstName}
          onChange={this.handleChange}
        />

        <Form.Input 
          label="Last Name"
          type="text"
          name="lastName"
          value={lastName}
          onChange={this.handleChange}
        />

        <Form.Input 
          label="Position"
          type="text"
          name="position"
          value={position}
          onChange={this.handleChange}
        />

        <Form.Input 
          label="Experience"
          type="text"
          name="experience"
          value={experience}
          onChange={this.handleChange}
        />

        <Form.Input 
          label="Company"
          type="text"
          name="conpany"
          value={company}
          onChange={this.handleChange}
        />
        <Form.Button color="color">Save</Form.Button>
      </Form>
      </>
    )
  }
}

export default UserForm