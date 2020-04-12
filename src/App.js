import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

import './App.css';
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      items: [],
      item: ''
    }
  }

  render() {
    return (
      <Router>
        <div className="">
          {/* <Route path = "/" exact component={Header} />
          <Route path = "/Main" exact component={Main} />
          <Route path = "/Footer" exact component={Footer} /> */}
          <Header  />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
