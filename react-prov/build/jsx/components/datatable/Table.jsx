import React from "react";

import Row from "./Row.jsx";
import Header from "./Header.jsx";
import Api_Link from "../Api_Link.jsx";

export default class Table extends React.Component {
  constructor() {
    super();

    this.heads = [
      {title: "Date", class: "col-xs-2"},
      {title: "Address", class: "col-xs-3"},
      {title: "Offense", class: "col-xs-3"},
      {title: "Statute", class: "col-xs-1"},
      {title: "Counts", class: "col-xs-1"}
    ]

    this.state = {
      Rows: []
    }
  }

  updateData(dataRows) {
    this.setState({
      Rows:  dataRows.map((item, i) => <Row key={i} item={item} mapLocation={this.props.mapLocation}/> )
    });
  }

  render() {
    const dataTime = new Date();
    const dataTimeString = dataTime.toLocaleString();

    return (
      <div id="DataTable">
        <em>Data from: {dataTimeString}</em>
        <Api_Link update={this.updateData.bind(this)}></Api_Link>
        <table>
          <Header heads={this.heads}/>
          <tbody>{this.state.Rows}</tbody>
        </table>
      </div>
    );
  }
}
