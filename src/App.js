import "./App.css";
import InputWithImage from "./components/inputWithImage";
import SearchNormal from "./svgs/searchNormal";
import Calender from "./svgs/calendar";
import SelectDropdown from "./components/selectComponent";
import Input from "./components/input";
import ModeOfExport from "./svgs/modeOfExport";
import ModeOfExportTwo from "./svgs/modeOfExportTwo";
import ModeOfExportThree from "./svgs/modeOfExportThree";
import Button from "./components/button";
import { data } from "./components/pie";
import { Pie } from "react-chartjs-2";
import { dataTwo } from "./components/pieTwo";
import TableComponent from "./components/tableComponent";

function App() {
  const datas = [
    {
      department: "Section, Cure &",
      vacantPositions: 25,
      allocation: 4360.654637,
      percentage: 25,
    },
    {
      department: "Recreation, Culture & Reign",
      vacantPositions: 25,
      allocation: 4560.654637,
      percentage: 23,
    },
    {
      department: "Section, Citure &",
      vacantPositions: 25,
      allocation: 4960654637,
      percentage: 23,
    },
    {
      department: "Section Culture & Reg",
      vacantPositions: 25,
      allocation: 4960654637,
      percentage: 25,
    },
    {
      department: "Rection, Cure &",
      vacantPositions: 25,
      allocation: 4960654637,
      percentage: 25,
    },
    {
      department: "Recreation, Culture & Reg",
      vacantPositions: 25,
      allocation: 496065437,
      percentage: 21,
    },
    {
      department: "Section Culture & Re",
      vacantPositions: 25,
      allocation: 4960654637,
      percentage: 25,
    },
    {
      department: "Recreation & eligi",
      vacantPositions: 25,
      allocation: 100,
      percentage: 100,
    },
  ];
  return (
    <div className="App">
      <h1 className="header">Report</h1>
      <p className="subHeader">Report Overview</p>
      <div className="topWrapper">
        <h2>Generate Report</h2>
        <div className="generateReportWrapper">
          <div>
            <h7>Search Budget ID/Description</h7>
            <InputWithImage children={<SearchNormal />} />
          </div>
          <div>
            <h7>Report Type</h7>
            <SelectDropdown />
          </div>
          <div>
            <h7>Start Date</h7>
            <InputWithImage children={<Calender />} />
          </div>
          <div>
            <h7>End Date</h7>
            <InputWithImage children={<Calender />} />
          </div>
          <div>
            <h7>Budget Item Code</h7>
            <Input />
          </div>
          <div>
            <h7>Budget Item Code</h7>
            <Input />
          </div>
        </div>
        <div>
          <h7 className="head">export as</h7>
          <div className="exportAs">
            <div className="modeOfExportWrapper">
              <ModeOfExport />
            </div>
            <div className="modeOfExportWrapper">
              <ModeOfExportTwo />
            </div>
            <div className="modeOfExportWrapper">
              <ModeOfExportThree />
            </div>
          </div>
        </div>
        <div className="horizontalLine"></div>
        <div className="buttonWrapper">
          <Button />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="pieWrapper">
          <h3>2022 Actual (Jan-June) % Allocation by Main Function</h3>
          <div className="pie">
            <Pie data={data} />
          </div>
          <div className="textWrapper">
            {data.datasets[0].data.map((percentage, index) => (
              <div
                key={index}
                style={{
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: data.datasets[0].backgroundColor[index],
                    marginRight: "5px",
                    borderRadius: "10px",
                  }}
                />
                <div style={{ width: "180px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {data.datasets[0].text[index]}
                  </span>
                </div>
                <text>{`${percentage}%`}</text>
              </div>
            ))}
          </div>
        </div>
        <div className="pieWrapper">
          <h3>2022 Revised Budget % Allocation by Main Function</h3>
          <div className="pie">
            <Pie data={dataTwo} />
          </div>
          <div className="textWrapper">
            {dataTwo.datasets[0].data.map((percentage, index) => (
              <div
                key={index}
                style={{
                  marginTop: "10px",
                }}
              >
                <div
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: dataTwo.datasets[0].backgroundColor[index],
                    marginRight: "5px",
                    borderRadius: "10px",
                  }}
                />
                <div style={{ width: "180px" }}>
                  <span
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {dataTwo.datasets[0].text[index]}
                  </span>
                </div>
                <text>{`${percentage}%`}</text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="tablewrapper">
        <TableComponent data={datas} />
      </div>
    </div>
  );
}

export default App;
