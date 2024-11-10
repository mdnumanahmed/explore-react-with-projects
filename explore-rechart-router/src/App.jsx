import "./App.css";
import CustomAreaChart from "./components/CustomChart/CustomAreaChart";
import CustomLineChart from "./components/CustomChart/CustomLineChart";
import CustomNav from "./components/CustomNav/CustomNav";

function App() {
  return (
    <>
      <CustomNav></CustomNav>
      <h1>Explore Rechart & Router</h1>
      <CustomLineChart></CustomLineChart>
      <CustomAreaChart></CustomAreaChart>
    </>
  );
}

export default App;
