import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const CustomLineChart = () => {
  const studentsMarksData = [
    { id: 1, name: "Alice", math: 85, science: 90, english: 78 },
    { id: 2, name: "Bob", math: 76, science: 82, english: 88 },
    { id: 3, name: "Charlie", math: 92, science: 89, english: 94 },
    { id: 4, name: "David", math: 67, science: 72, english: 80 },
    { id: 5, name: "Eve", math: 88, science: 85, english: 91 },
  ];

  return (
    <div>
      <LineChart width={600} height={300} data={studentsMarksData}>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
        <Line dataKey={"math"} stroke="red" />
        <Line dataKey={"science"} stroke="blue" />
        <Line dataKey={"english"} stroke="black" />
      </LineChart>
    </div>
  );
};

export default CustomLineChart;
