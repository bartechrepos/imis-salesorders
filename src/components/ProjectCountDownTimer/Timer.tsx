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
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

  return (
    <Countdown
      title="Countdown"
      value={props.deadline}
      onFinish={onFinish}
      format="DD HH:mm:ss"
      // format="D 天 H 时 m 分 s 秒"
      //   loading={true}
    />
  );
};

export default TimerCountDown;
