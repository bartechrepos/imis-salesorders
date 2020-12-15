import React from 'react';
import { Statistic, Row, Col } from 'antd';
const { Countdown } = Statistic;

interface timerCountDownProps {
  deadline: string | number | undefined;
}
const TimerCountDown: React.FC<timerCountDownProps> = (props) => {
  function onFinish() {
    console.log('Project Time is Up, better be done !');
  }

  return (
    <Countdown
      title="باقي من الزمن"
      value={props.deadline}
      onFinish={onFinish}
      format="DD HH"
      className="projectCountDown"
      valueStyle={{ textAlign: 'center' }}
    />
  );
};

export default TimerCountDown;
