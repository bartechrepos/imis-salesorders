import React, { Component } from 'react';
import { Button } from 'antd';
import moment from 'moment';
class Timer extends React.Component {
  state = {
    timer: moment(0, 'seconds').format('HH:mm:ss'),
    updatedStartTime: {},
    startTime: null,
    endTime: null,
    timeInterval: 0,
  };

  handleStartTimer = () => {
    if (!this.state.startTime) {
      const startTime = moment().format('L LTS');
      this.setState({
        startTime: startTime,
      });
    }
    if (this.state.timer === moment(0, 'seconds').format('HH:mm:ss')) {
      this.setState({
        timerInterval: setInterval(this.handleRunningTimer, 1000),
      });
    }
  };

  handleRunningTimer = () => {
    if (this.state.startTime && !this.state.endTime) {
      const startTime = this.state.startTime;
      const currentTime = moment().format('L LTS');
      const duration: number = moment(currentTime, 'L LTS').diff(
        moment(startTime, 'L LTS'),
        'seconds'
      );
      this.setState({
        timer: moment(duration, 'seconds').format('HH:mm:ss'),
      });
    }
  };

  // handleStartTimeOnChange = (event: any) => {
  //   if (event.target.value) {
  //     let updatedStartTime = { ...this.state.updatedStartTime };
  //     updatedStartTime = event.target.value;
  //     this.setState({
  //       updatedStartTime: updatedStartTime
  //     });
  //   }
  // };

  // handleStartTimeUpdate = () => {
  //   if (this.state.updatedStartTime) {
  //     const updatedStartTime = moment(this.state.updatedStartTime).format("L LTS");
  //     clearInterval(this.state.timeInterval);
  //     this.setState({
  //       startTime: updatedStartTime,
  //       updatedStartTime: null,
  //       showStartTimeInput: false,
  //       timerInterval: setInterval(this.handleRunningTimer, 1000)
  //     });
  //   }
  //   this.setState({
  //     updatedStartTime: null,
  //     showStartTimeInput: false
  //   });
  // };

  handleStopTimer = () => {
    if (!this.state.endTime) {
      const startTime = this.state.startTime;
      const endTime = moment().format('L LTS');
      const timer = this.state.timer;
      this.setState({
        timer: moment(0, 'seconds').format('HH:mm:ss'),
        endTime: endTime,
        showStartTimeInput: false,
      });

      clearInterval(this.state.timeInterval);
    }
  };

  handleResetTimer = () => {
    this.setState({
      timer: moment(0, 'seconds').format('HH:mm:ss'),
      startTime: null,
      endTime: null,
      updatedStartTime: null,
      showStartTimeInput: false,
    });
    clearInterval(this.state.timeInterval);
  };

  render() {
    const timer = this.state.timer;
    const startTime = this.state.startTime;
    const endTime = this.state.endTime;
    return (
      <div>
        <div>
          <h1>{timer}</h1>
          <h4>Start Time: {startTime}</h4>
          <h4>End Time: {endTime}</h4>
          <div>
            <Button
              style={{ margin: '5px 8px' }}
              onClick={this.handleStartTimer}
            >
              Start
            </Button>
            <Button
              style={{ margin: '5px 8px' }}
              onClick={this.handleStopTimer}
            >
              Stop
            </Button>
            <Button
              style={{ margin: '5px 8px' }}
              onClick={this.handleResetTimer}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
