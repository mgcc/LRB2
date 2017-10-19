import React, { Component } from 'react';

import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <DayTime date={new Date()} /> */}
        <DayTime />
        <LifecyleExample />
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

    // this.tick = this.tick.bind(this)
  }

  tick() {
    console.log('tick!');
    this.setState({
      date: new Date(),
      text: 'some text'
    })
  }

  // componentDidMount() {
  //   this.timerID = setInterval(
  //     () => { return this.tick() },
  //     1000
  //   )
  // }

  // componentWillUnmount() {
  //   clearInterval(this.timerID);
  // }

  render() {
    const d = this.state.date;

    return (
      <div>
        {this.state.text}
        Today is {d.getDate()}/{d.getMonth() + 1}<br/>
        The time is: {d.toLocaleTimeString()}
        <button id="update-time" onClick={this.tick}>Update Time</button>
      </div>
    )
  }
}

class LifecyleExample extends Component {
  constructor() {
    super()
    console.log('Constructor')
    this.state = {
      text: 'Lifecycle'
    }
  }

  componentWillMount() {
    console.log('Will mount')
  }

  componentDidMount() {
    console.log('Did mount')
  }

  shouldComponentUpdate() {
    console.log('Should component update')
  }

  componentWillUpdate() {
    console.log('Will udpate')
  }

  componentDidUpdate() {
    console.log('Did update')
  }

  componentWillUnmount() {
    console.log('Will unmount')
  }

  render() {
    console.log('Render')
    return (
      <div>
        {this.state.text}
        <button id="remove">Remove</button>
      </div>
    )
  }
}