import React from 'react';

class Table extends React.Component {
    state = {
      // this is your table represented as a 2D array
      table: [
        ["row1", "row2", "row3", "row4", "row5"],
        [1, "text    "    , "text", "text", "text"],
        [2, "text", "text", "text", "text"],
      ]
    }
  
    addRow = row => {
      const table = this.state.table.slice()
      table.push(row)
      this.setState({ table })
    }
  
    render() {
      const headers = this.state.table.slice(0, 1)[0]
      const rows = this.state.table.slice(1)
  
      return (
        <div>
          <table>
            <TableHeaders headers={headers} />
            <tbody>
              {
                rows.map(row => <TableRow row={row}/>)
              }
            </tbody>
          </table>
          <AddRowButton addRow={this.addRow} />
        </div>
      )
    }
  }
  
  const TableHeaders = ({ headers }) =>
    <thead>
      <tr>
        { headers.map(header => <th>{ header }</th>) }
      </tr>
    </thead>
  
  const TableRow = ({ row }) =>
    <tr>
      { row.map(cell => <td>{cell}</td>) }
    </tr>
  
  const AddRowButton = ({ addRow }) =>
    <button onClick={() => addRow(['test','test','test','test','test'])}>
      ADD ROW
    </button>

export default Table;