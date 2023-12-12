import React, { useState } from "react";
import DataTable from "react-data-table-component";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function Employee() {
  const [userInput, setUserInput] = useState("");
  const [localUserInput, setLocalUserInput] = useState(""); // Added this line
  const [localResult, setLocalResult] = useState(null); // Added this line
  const [searchResults, setSearchResults] = useState(data.slice(0, -1));

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setUserInput(value);

    const newData = value.trim() !== "" ? data.slice(0, -1).filter(row => row.name.toLowerCase().includes(value.toLowerCase())) : data.slice(0, -1);

    setSearchResults(newData);
  };

  const columns = [
    {
      name: "Sr.",
      selector: row => row.id,
      sortable: true
    },
    {
      name: "Supervisor Name",
      selector: row => row.name,
      sortable: true
    },
    {
      name: "Employers Contacted",
      selector: row => row.contact,
      sortable: true
    },
    {
      name: "Buy Package",
      selector: row => row.pack,
      sortable: true
    },
    {
      name: "Refund Taken",
      selector: row => row.take,
      sortable: true
    }
  ];

  return (
    <div className="seek">
      <h1>Employer Statistics 2023-12-08 to 2023-12-12</h1>
      <input
        type="text"
        placeholder="Search..."
        value={userInput}
        onChange={handleSearchChange}
        style={{ height: '20px' }}
      />
      <div className="calc">
      </div>
      <DataTable
        columns={columns}
        data={searchResults}
        pagination
      />
    </div>
  );
}

const data = [
  {
    id: 1,
    name: "Sameer Tandle",
    contact: 2,
    pack: 0,
    take: 0
  },
  {
    id: 2,
    name: "Admin",
    contact: 1,
    pack: 0,
    take: 0
  },
  {
    id: 3,
    name: "Darshana Ambatkar",
    contact: 150,
    pack: 4,
    take: 0
  },
  {
    id: 4,
    name: "Sonali",
    contact: 0,
    pack: 0,
    take: 0
  },
  {
    id: 5,
    name: "Total",
    contact: 153,
    pack: 4,
    take: 0
  },
  {
    id: 6, // Added an ID for "Kaveri"
    name: "Kaveri",
    contact: 2,
    pack: 0,
    take: 0
  },
];

export default Employee;
