import React from 'react'
import Tablerow from "../TableRow/tablerow"

function Table() {
    return (
        <div className="container">
            <table className="table">
  <thead>
    <tr className="table-primary">
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <Tablerow/>
  </tbody>
</table>
        </div>
    )
}

export default Table
