import _ from "lodash";
import React from "react";
import fib from "../lib/fib"

const Fibonacci = React.createClass({
  propTypes: {
    length: React.PropTypes.number.isRequired
  },

  render: function () {
    const sol = fib.getFibArray(this.props.length);
    return (
      <div>
    { sol.map(function(current,index) {
      return <div key={index}>{current}</div>
    }) }
      </div>)
  }
});

export default Fibonacci;
