import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

const CustomAreaChart = () => {
  //   const studentsMarksData = [
  //     { id: 1, name: "Alice", marks: { math: 85, science: 90, english: 78 } },
  //     { id: 2, name: "Bob", marks: { math: 76, science: 82, english: 88 } },
  //     { id: 3, name: "Charlie", marks: { math: 92, science: 89, english: 94 } },
  //     { id: 4, name: "David", marks: { math: 67, science: 72, english: 80 } },
  //     { id: 5, name: "Eve", marks: { math: 88, science: 85, english: 91 } },
  //   ];

  const studentsMarksData = [
    { id: 1, name: "Alice", math: 85, science: 90, english: 78 },
    { id: 2, name: "Bob", math: 76, science: 82, english: 88 },
    { id: 3, name: "Charlie", math: 92, science: 89, english: 94 },
    { id: 4, name: "David", math: 67, science: 72, english: 80 },
    { id: 5, name: "Eve", math: 88, science: 85, english: 91 },
  ];
  return (
    <div>
      <AreaChart width={600} height={300} data={studentsMarksData}>
        <Area dataKey={"math"} stroke="red" fill="lightblue" />
        <Area dataKey={"science"} stroke="purple" fill="lightpink" />
        <Area dataKey={"english"} stroke="black" fill="lightgreen" />
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <Legend></Legend>
      </AreaChart>
    </div>
  );
};

export default CustomAreaChart;
