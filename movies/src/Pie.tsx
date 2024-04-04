import React from 'react';

interface PieProps {
  percentage: number;
  colour: string;
}

const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Pie: React.FC<PieProps> = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <svg width={200} height={200}>
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="transparent"
        stroke="lightgrey"
        strokeWidth={r * 2}
      ></circle>
      <circle
        r={r}
        cx={100}
        cy={100}
        fill="transparent"
        stroke={colour}
        strokeWidth={r * 2}
        strokeDasharray={circ}
        strokeDashoffset={strokePct}
        transform={`rotate(-90 100 100)`}
      ></circle>
      <text
        x="50%"
        y="50%"
        dominantBaseline="central"
        textAnchor="middle"
        fontSize="1.5em"
      >
        {percentage.toFixed(0)}%
      </text>
    </svg>
  );
};

export default Pie;