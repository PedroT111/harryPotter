import React from "react";
import Characters from "./Screens/Characters";
import Features from "./Screens/Features";
import './App.css'
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';
import Header from "./App/header";
import Footer from "./App/footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Characters}/>
          <Route exact path="/:id" component={Features}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
