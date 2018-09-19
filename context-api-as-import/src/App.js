import React, { Component } from "react";
import Comp4 from "./Comp4";
import FooContext from "./FooContext";
import logo from "./logo.svg";
import "./App.css";

class Comp3 extends Component {
  render() {
    return (
      <section>
        <span>Component3</span>
        <Comp4 />
      </section>
    );
  }
}

class Comp2 extends Component {
  render() {
    return (
      <section>
        <span>Component2</span>
        <div>{this.props.foo}</div>
        <Comp3 />
      </section>
    );
  }
}

class Comp1 extends Component {
  render() {
    return (
      <section>
        <span>Component1</span>
        <div />
        <Comp2 />
      </section>
    );
  }
}

class App extends Component {
  state = { foo: 123, bar: "abc" };

  update (val) {
    this.setState({foo: val});
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <FooContext.Provider
            value={{
              state: this.state,
              update: val => this.update(val)
            }}
          >
            <Comp1 />
          </FooContext.Provider>

          <FooContext.Provider
            value={{
              state: { foo: "YIPPIE!", bar: 777 },
              update: val => this.update(val)
            }}
          >
            <Comp1 />
          </FooContext.Provider>
        </p>
      </div>
    );
  }
}

export default App;
