import React from 'react';
import {Oval} from 'react-loader-spinner';

export interface LoadSpinnerProps {
  type: 'Oval';
  color?: string;
  height?: number;
  width?: number;
}

const LoadSpinner = ({
  type,
  color = '#0C3B4D',
  height = 30,
  width = 30,
}: LoadSpinnerProps): JSX.Element => {
  return <Oval color={color} height={height} width={width} />;
};

export default LoadSpinner;
