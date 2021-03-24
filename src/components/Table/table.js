import React from 'react'
import Tablerow from "../TableRow/tablerow"

function Table(props) {
    return (
       
            <table className="table">
  <thead>
    <tr className="table-primary">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  <tbody>
     {props.result.map((guy)=> (<Tablerow 
     first={guy.firstName}
     last={guy.lastName}
     email={guy.email}
     phone={guy.phone}
     city={guy.city}
     photo={guy.picture}
     id={guy.id}
     key={guy.key}
     />))}
  </tbody>
</table>
      
    )
}

export default Table
