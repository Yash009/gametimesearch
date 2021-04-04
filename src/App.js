import React, { Component } from 'react'
import Logo from "./components/Logo"
import Search from "./components/Search"
import "./App.css"


class App extends Component {
    render() {
        return (
          <div className="App">
            <Logo/>
            <Search/>
          </div>
        )
      }
  }
export default App