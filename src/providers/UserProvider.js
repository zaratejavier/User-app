import React from "react"

//this will set up the initial context
const UserContext = React.createContext();

//this will create an exportable consumer that can be used in other components
export const UserConsumer = UserContext.Consumer;

//creating the provider using a traditional React.Component class
class UserProvider extends React.Component {
  state = { 
    firstName: "Javier",
    lastName:"Zarate", 
    position:"Software Developer", 
    company:"Adobe",
    experience:"Junior",
  }

  render(){
    return(
      <UserContext.Provider value={this.state}>
        {/*we render all of the children of this component via props. */}
        {this.props.children} 
      </UserContext.Provider>
    )
  }
}

export default UserProvider