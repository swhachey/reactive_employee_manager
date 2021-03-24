import React from 'react'

function Tablerow(props) {
    return (
       <tr className="table-info">
      <th scope="row">{props.id + 1}</th>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
      <td>{props.city}</td>
      <td>{props.phone}</td>
    </tr>
    )
}

export default Tablerow
