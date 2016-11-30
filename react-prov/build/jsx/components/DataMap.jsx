import React from "react";

export default class Layout extends React.Component {
  componentDidMount () {
    this.props.mapDidMount();
  }

  render () {
    return (
      <div id={this.props.mapDivId} class="shadow"></div>
    );
  }
}
