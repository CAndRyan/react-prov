import React from "react";

export default class Header extends React.Component {
  render() {
    const {heads} = this.props;
    const headers = heads.map((head, i) => <th key={i} class={head.class}>{head.title}</th>);

    return (
      <thead>
        <tr>{headers}</tr>
      </thead>
    );
  }
}
