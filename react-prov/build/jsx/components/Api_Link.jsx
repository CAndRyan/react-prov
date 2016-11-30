import React from "react";

export default class Api_Link extends React.Component {
  updateTimestamp(dateStr) {
    var date = new Date(dateStr);

    return date.toLocaleString();
  }

  updateData(dat) {
    var rows = [];

    for (var i = 0; i < dat.length; i++) {
      dat[i].reported_date = this.updateTimestamp(dat[i].reported_date)
      rows.push(dat[i]);
    }

    this.props.update(rows);
  }

  getApi() {
    // var statute = {
    //   limit: 5,
    //   idCondition: 0,
    //   table: "prov_statute"
    // }
    var crime = {
      limit: 10
    }

    var callback = function () {
      var DONE = 4; // readyState 4 means the request is done.
      var OK = 200; // status 200 is a successful return.
      if (xhr.readyState === DONE) {
        if (xhr.status === OK) {
          //console.log(xhr.responseText); // 'This is the returned text.'
          this.updateData(JSON.parse(xhr.response))
        } else {
          console.log('Error: ' + xhr.status); // An error occurred during the request.
        }
      }
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/api', true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.onreadystatechange = callback.bind(this);
    xhr.send(JSON.stringify(crime));
  }

  render() {
    return (
      <span>
        <a id="testBtn" onClick={this.getApi.bind(this)}>API</a>
      </span>
    );
  }
}
