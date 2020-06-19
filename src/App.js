import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from "./components/UserProfile"
import Navbar from "./components/Navbar"


// this page allows us to click on the link and take us to the certain path
//we give it the path and then the component we want it to go to
function App() {
  return (
    <>  
      <Navbar/>
      <Container>
        <Switch>
          <Route exact path='/' render={() => <div>Home</div> }/>
          <Route exact path="/user/profile" component={UserProfile}/> 
        </Switch>
      </Container>
    </>
  
  );
}

export default App;
