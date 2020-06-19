import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from "./components/UserProfile"
import Navbar from "./components/Navbar"

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
