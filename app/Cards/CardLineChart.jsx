import React from "react";

const CardLineChart = () => {
  const data = [
    { x: 0, y: 100 },
    { x: 1, y: 80 },
    { x: 2, y: 120 },
    { x: 3, y: 90 },
    { x: 4, y: 110 },
  ];
  return (
    <div className="bg-white p-6 rounded-lg shadow w-full col-span-2">
      <h2 className="text-lg font-semibold mb-4">Line Chart</h2>
      <div className="overflow-hidden rounded-lg border border-gray-200 relative">
        <svg viewBox="0 0 400 200" className="w-full h-full">
          {/* x-axis */}
          <line
            x1="50"
            y1="150"
            x2="350"
            y2="150"
            stroke="#CBD5E0"
            strokeWidth="1"
          />
          <text x="30" y="165" className="text-gray-600 text-xs">
            0
          </text>
          <text x="350" y="165" className="text-gray-600 text-xs">
            100
          </text>
          {/* y-axis */}
          <line
            x1="50"
            y1="150"
            x2="50"
            y2="50"
            stroke="#CBD5E0"
            strokeWidth="1"
          />
          <text x="40" y="160" className="text-gray-600 text-xs">
            100
          </text>
          <text x="40" y="50" className="text-gray-600 text-xs">
            0
          </text>
          {/* data points */}
          {data.map((point, index) => (
            <circle
              key={index}
              cx={50 + point.x * 75}
              cy={150 - (point.y / 100) * 100}
              r="4"
              fill="#3182CE"
              className="data-point"
            />
          ))}
          {/* connecting lines */}
          <polyline
            points={data
              .map(
                (point) => `${50 + point.x * 75},${150 - (point.y / 100) * 100}`
              )
              .join(" ")}
            fill="none"
            stroke="#3182CE"
            strokeWidth="2"
          />
        </svg>
        {/* tooltip */}
        {data.map((point, index) => (
          <div
            key={index}
            className="tooltip absolute bg-white shadow rounded p-2 text-xs hidden"
            style={{
              left: `${50 + point.x * 75}px`,
              top: `${150 - (point.y / 100) * 100 - 30}px`,
            }}
          >
            Value: {point.y}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLineChart;
