import React,{ Component }  from "react";

import PropTypes from "prop-types";
import key from "weak-key";

class Table extends Component {
    render (){
    return(<div className="column">
      <h2 className="subtitle">
        Showing <strong>{this.props.stt.data.length} items</strong> <button type="button" onClick={this.props.deleteRecord} className="btn btn-danger">Delete</button>
      </h2>
      <table className="table is-striped">
        <thead>
          <tr>

              {/*{this.props.data[0].map(ele=>(<th></th>))}*/}
              {Object.entries(this.props.stt.data[0]).map(el => <th>{el[0]}</th>)}
          </tr>
        </thead>
        <tbody>
          {this.props.stt.data.map(el => (
            <tr key={el.id}>
              {Object.entries(el).map(el => <td >{el[1]}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );}}



export default Table;
