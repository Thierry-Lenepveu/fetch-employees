import { useState } from 'react';
import './App.css'
import EmployeeCard from './components/EmployeeCard'

function App() {
  const sampleEmployee = {
    name: {
      first: "Charlie",
      last: "Thompson",
    },
    email: "charlie.thompson@example.com",
    picture: {
      large: "https://randomuser.me/api/portraits/men/40.jpg",
    },
  };
  
  const getEmployee = () => {
    // Send the request
    fetch("http://localhost:3310/api/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployee(data.results[0]);
      });
  };
  const [employee, setEmployee] = useState(sampleEmployee);
  return (
    <>
      <EmployeeCard employee={employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
