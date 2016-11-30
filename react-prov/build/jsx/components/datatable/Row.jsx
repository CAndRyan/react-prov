import React from "react";

export default class Row extends React.Component {
  render() {
    //{title: "Date", class: "col-xs-2"},
    //{title: "Offense", class: "col-xs-3"},
    //{title: "Address", class: "col-xs-3"},
    //{title: "Statute", class: "col-xs-1"},
    //{title: "Counts", class: "col-xs-1"}
    const {item, RowClass} = this.props;
    const {id, reported_date, offense_desc, formatted_address, latitude, longitude, statute_code, statute_desc, counts} = item;
    const coord = {
      lat: latitude,
      lng: longitude
    };
    const popupDetails = "<b>" + formatted_address + "</b></br>" + offense_desc;

    var mapit = function () {
      this.props.mapLocation(coord, id, popupDetails);
    }

    return (
      <tr class={RowClass}>
        <td>{reported_date}</td>
        <td><a onClick={mapit.bind(this)}>{formatted_address}</a></td>
        <td>{offense_desc}</td>
        <td data-toggle="tooltip" data-placement="bottom" title={statute_desc}>{statute_code}</td>
        <td class="large-text">{counts}</td>
      </tr>
    );
  }
}
