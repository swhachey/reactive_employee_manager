import React, { Component } from 'react'
import Table from "../Table/table"
import API from "../../utils/API"
import Search from "../Search/search"

export default class Container extends Component {
    state = {
        result: [],
        search: ""
    };

    componentDidMount() {
        this.getEmployees(10)
    };

    getEmployees = (query) => {
         API.search(query)
      .then(res => this.setState({result: res.data.results.map((e, i) => ({
        firstName: e.name.first,
        lastName: e.name.last,
        picture: e.picture.large,
        email: e.email,
        phone: e.phone,
        city: e.location.city,
        id: i,
        key: i,
      }))

      }))
      .catch(err => console.log(err));
    };

handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };
handleFormSubmit = event => {
    event.preventDefault();
    this.getEmployees(this.state.search);
  };
    render() {
        return (
        <div className="container">
        <Search 
        value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
        <Table result={[...this.state.result]}/>
        </div>
        )
    };
}
