import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }

  // replaces the menu collapsing without .js dependecies
  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  // replaces the menu collapsing without .js dependecies

  render() {
    const { collapsed } = this.state;

    const navClass = collapsed ? "collapse" : "";

    return (
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
          <div class="navbar-header">
            <IndexLink to="/" id="mainLogoLink">
              {/*<img src="./images/.png" alt="CAR Logo" />*/}
            </IndexLink>
            <button type="button" class="navbar-toggle" onClick={this.toggleCollapse.bind(this)} >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div class={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li activeClassName="active" onlyActiveOnIndex={true}>
                <Link to="/" onClick={this.toggleCollapse.bind(this)}>Home</Link>
              </li>
              {/*<LI>
                <LINK TO="/DATATABLE" ONCLICK={THIS.TOGGLECOLLAPSE.BIND(THIS)}>API</LINK>
              </LI>*/}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
