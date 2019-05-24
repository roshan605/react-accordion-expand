import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Example from "./Example";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preOpen: [],
      show: true,
      items: [1, 2, 3, 10]
    };
    this.openAll = this.openAll.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.showMe = this.showMe.bind(this);
  }
  openAll(e) {
    e.preventDefault();

    const self = this;
    self.setState({ show: !self.state.show }, () => {
      self.setState({ preOpen: [1, 2, 3, 10], show: true });
    });
  }
  closeAll(e) {
    e.preventDefault();
    const self = this;
    self.setState({ show: !self.state.show }, () => {
      self.setState({ preOpen: [], show: true });
    });
  }
  showMe(e) {
    this.setState({ show: !this.state.show });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.openAll}>Open </button>
        <button onClick={this.closeAll}>Close </button>
        <button onClick={this.showMe}>show/hide </button>
        {this.state.show && (
          <Example openedArrays={this.state.preOpen} items={this.state.items} />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Test />, rootElement);
