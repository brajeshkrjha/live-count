import React, { useState } from "react";
import DataTable from "react-data-table-component";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Employee from "./Employee";
import './App.css';

function App() {
  const [userInput, setUserInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [Result, setResult] = useState("");
  const [searchResults, setSearchResults] = useState(data.slice(0, -1));


  const handleSearchChange = (event) => {
    const { value } = event.target;
    setUserInput(value);

    const newData = value.trim() !== "" ? data.slice(0, -1).filter(row => row.name.toLowerCase().includes(value.toLowerCase())) : data.slice(0, -1);

    setSearchResults(newData);
  };

  const handleCalculate = () => {
    try {
      const userTotal = eval(userInput);
      setResult(userTotal);
    } catch (error) {
      console.error("Error in calculation:", error);
      setResult(null);
    }
  };

  const CalculateCell = ({ row }) => {
    const [localUserInput, setLocalUserInput] = useState("");
    const [localResult, setLocalResult] = useState(null);
  
    const handleLocalCalculate = () => {
      try {
        const userTotal = eval(localUserInput || "0");
        setLocalResult(userTotal);
      } catch (error) {
        console.error("Error in calculation:", error);
        setLocalResult(null);
      }
    };

    return (
      <div className="calc">
        <input
          type="text"
          value={localUserInput}
          onChange={(e) => setLocalUserInput(e.target.value)}
        />
        <button onClick={handleLocalCalculate}>Calculate</button>
        {localResult !== null && <p>Result: {localResult}</p>}
      </div>
    );
  };

  const handleSubmit = () => {
    console.log("Form submitted!");
    console.log("Search Term:", userInput);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Search Results:", searchResults);
  };

  const handleReset = () => {
    setUserInput("");
    setStartDate(new Date());
    setEndDate(new Date());
    setSearchResults(data.slice(0, -1));
    console.log("Form reset!");
  };


  const columns = [
    {
      name: "Supervisor Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name:"New Profile",
      selector: row => row.profile,
      sortable: true
    },
    {
      name:"Updated Count",
      selector: row => row.update,
      sortable: true
    },
    {
      name:"Live In Count",
      selector: row => row.live,
      sortable: true
    },
    {
      name:"Photo Available",
      selector: row => row.photo,
      sortable: true
    },
    {
      name:"Candidates Added",
      selector: row => row.added,
      sortable: true
    },
    {
      name:"Candidates Hired",
      selector: row => row.hired,
      sortable: true
    },
    {
      name: "Calculate",
      cell: CalculateCell,
      sortable: true
    }
  ];


  // const modifiedData = data.slice(0, -1);
 return (
    <div className="seek">
      <h1>Seeker Statistics 2023-12-07 to 2023-12-11</h1>
      <input
        type="text"
        placeholder="Search..."
        value={userInput}
        onChange={handleSearchChange}
        style={{ height: '20px' }}
      />
      <div className="date">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          style={{ height: '30px', marginLeft: 'auto'}}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          style={{ height: '30px', marginLeft: 'auto'}}
        />
        <button onClick={handleSubmit} style={{ height: '30px', width: '50px', marginLeft: 'auto' }}>Submit</button>
        <button onClick={handleReset} style={{ height: '30px',  width: '50px', marginLeft: 'auto'}}>Reset</button>
      </div>

      <DataTable
        columns={columns}
        data={searchResults}
        pagination
      />
  <Employee />
    </div>
  );
}

const data = [
  {
  id: 1,
  name: "Kaveri",
  profile: 50,
  update: 102,
  live: 7,
  photo:22,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 2,
  name: "Sameer Tandale",
  profile: 28,
  update: 57,
  live: 4,
  photo:19,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 3,
  name: "Admin",
  profile: 0,
  update: 0,
  live: 0,
  photo:0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 4,
  name: "Darshana Ambatkar",
  profile: 1,
  update: 9,
  live: 0,
  photo:0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 5,
  name: "Sonali",
  profile: 0,
  update: 0,
  live: 0,
  photo:0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 6,
  name: "Deepa Umesh Prasad",
  profile: 0,
  update: 56,
  live: 0,
  photo:0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 7,
  name: "Seeker",
  profile: 0,
  update: 0,
  live: 0,
  photo: 0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 8,
  name: "Admin",
  profile: 0,
  update: 0,
  live: 0,
  photo:0,
  added: 0,
  hired: 0,
  // calulate: calculateTotal
  },
  {
  id: 9,
  name: "Total",
  profile: 79,
  update: 224,
  live: 11,
  photo:41,
  added: 0,
  hired: 0
  },
  {
  id: 9,
  name: "Total",
  profile: 79,
  update: 224,
  live: 11,
  photo:41,
  added: 0,
  hired: 0
  }
];

export default App;



