import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from "./Suggestions"
const API_URL = 'https://mobile-staging.gametime.co/v1/search'

class Search extends Component {
  state = {
    query: '',
    results: []
  }
// Fetching the info using the api
  getInfo = () => {
    axios.get(API_URL +'?q='+ this.state.query).then(resp => {
      console.log(resp);
        this.setState({
          results: resp.data.events               
        })
    });
  }
  //triggering the search on change
  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.getInfo()
        }
    })
  }
// rendering the form and results
  render() {
    return (
      <form className="text-left">
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search

