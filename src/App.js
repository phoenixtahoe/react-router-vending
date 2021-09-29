import React from 'react'
import Drink from './Drink'
import Food from './Food'
import Sardine from './Sardine'
import Landing from './Landing'
import { BrowserRouter, Route } from "react-router-dom";
import './App.css'


function App() {
    return (
      <div className="App">
          <BrowserRouter>
                <Route exact path="/">
                  <Landing/>
                </Route>
                <Route exact path="/soda">
                  <Drink />
                </Route>
                <Route exact path="/chips">
                  <Food />
                </Route>
                <Route exact path="/sardine">
                  <Sardine />
                </Route>
          </BrowserRouter>
      </div>
    )
}

export default App