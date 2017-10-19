import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <DayTime date={new Date()} /> */}
        <DayTime />
      </div>
    );
  }
}

// const DayTime = () => {
//   const d = new Date();

//   return (
//     <div>
//       Today is {d.getDate()}/{d.getMonth() + 1}<br/>
//       The time is: {d.toLocaleTimeString()}
//     </div>
//   )
// }

class DayTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => { return this.tick() },
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const d = this.state.date;

    return (
      <div>
        Today is {d.getDate()}/{d.getMonth() + 1}<br/>
        The time is: {d.toLocaleTimeString()}
        {/* <button id="update-time" onClick={this.tick}>Update Time</button> */}
      </div>
    )
  }
}