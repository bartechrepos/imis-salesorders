import { Progress } from 'antd';
import React, { FC, useState, useEffect } from 'react';

interface progressCircleProps {
  percent: number | undefined;
  width: number | undefined;
}
const ProgressCircle: React.FC<progressCircleProps> = (props) => {
  const [statusState, setStatusState] = useState<
    'active' | 'success' | 'normal' | 'exception' | undefined
  >('active');
  const [formatState, setFormatState] = useState<string>('');
  useEffect(() => {
    // console.log(props.percent);
    // console.log(statusState);
    // console.log(formatState);
    changeStateHandler();
  }, []);
  const changeStateHandler = () => {
    if (props.percent! <= 50) {
      setStatusState('exception');
      setFormatState(`${props.percent} %`);
    } else if (props.percent === 100) {
      setStatusState('success');
      setFormatState('Done');
    } else if (props.percent! < 100 && props.percent! > 50) {
      setStatusState('active');
      setFormatState(`${props.percent} %`);
    }
  };
  return (
    <>
      <Progress
        type="circle"
        percent={props.percent}
        status={statusState}
        format={() => formatState}
        width={props.width}
      />
    </>
  );
};
export default ProgressCircle;
