import React, { Component } from "react";
import FooContext from "./FooContext";

class Comp4 extends Component {
  render() {
    return (
      <section>
        <span>Component4</span>
        <FooContext.Consumer>
          {({state, update}) => (
            <div>
              <div>{state.foo}</div>
              <div>{state.bar}</div>
              <button onClick={() => update('HI!')}>Update!</button>
            </div>
          )}
        </FooContext.Consumer>
      </section>
    );
  }
}

export default Comp4;