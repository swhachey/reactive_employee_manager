import React, { Component } from 'react'
import Table from "../Table/table"
import API from "../../utils/API"

export default class Container extends Component {
    state = {
        result: [],
    };

    componentDidMount() {
        this.getEmployees()
    };

    getEmployees = () => {
         API.search()
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

    render() {
        return (
        <div className="container">
        <Table result={[...this.state.result]}/>
        </div>
        )
    };
}
