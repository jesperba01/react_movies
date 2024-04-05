import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface PieProps {
  percentage: number;
  textSize?: string; // Add a prop for specifying the text size
  circleSize?: number; // Add a prop for specifying the size of the CircularProgressbar
  className?: string; // Add className prop
}

const Pie: React.FC<PieProps> = ({ percentage, textSize = "2em", circleSize = 50, className }) => {
  const roundedPercentage = Math.round(percentage); // Round the percentage to the nearest whole number

  let pathColor = "white"; // Default color
  if (percentage <= 35) {
    pathColor = "red"; // Change color to red when percentage is 35% or less
  } else if (percentage > 35 && percentage <= 70) {
    pathColor = "yellow"; // Change color to yellow when percentage is between 35% and 70%
  } else if (percentage > 70 && percentage <= 100) {
    pathColor = "#0BDA51"; // Change color to orange when percentage is between 70% and 100%
  }

  return (
    <div className={className} style={{ width: circleSize, height: circleSize, borderRadius: '50%' }}>
      <CircularProgressbar
        value={percentage}
        text={`${roundedPercentage}%`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: '#141414',
          textColor: "#fff",
          pathColor: pathColor,
          trailColor: "rgba(0, 0, 0, 0.5)",
          textSize: "1.5rem"
        })}
      />
    </div>
  );
};

export default Pie;