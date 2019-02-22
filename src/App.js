import React, {Component} from 'react';
import {connect} from 'react-redux';

import {testAction} from './actions/testAction';

class App extends Component {


  render() {
    return (
      <div className="App">
        <p className="testText">React Lite </p>
        <p>{this.props.test ? this.props.test.toString() : null}</p>
        <button onClick={() => this.props.changeTest("Working!")}>Test Button</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    test: state.test.test
  }
}
const mapDispatchToProps = dispatch => {
  return {
    changeTest: (a) => dispatch(testAction(a))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);