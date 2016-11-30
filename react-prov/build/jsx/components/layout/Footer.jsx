import React from "react"

export default class Footer extends React.Component {
  render() {
    return (
      <footer>
        <hr />
        <div class="row">
          <div>
            <p class="col-sm-12">
              Copyright &copy; {this.props.copyright}

              <a class="float-right" href="https://github.com/CAndRyan/react-prov" target="_blank">GitHub</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
