import React from "react";
import {Link} from "react-router";

import Footer from "../components/layout/Footer.jsx";
import Nav from "../components/layout/Nav.jsx";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

  render() {
		const appDetails = {
			title: "Providence Data",
			author: "Chris Ryan",
			date: new Date().getFullYear()
		};

		const copyright = appDetails.author + " - " + appDetails.date;

    return (
      <div>

        <Nav />

        <div id="BodyContent" class="container">
          <div class="row">
            <div class="col-sm-12">
							<div>
	              <h1>{appDetails.title}</h1>

	              {this.props.children}
							</div>
            </div>
          </div>
          <Footer title={appDetails.title} copyright={copyright}/>
        </div>
      </div>

    );
  }
}
