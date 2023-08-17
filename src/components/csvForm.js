import React, { useState } from 'react';
import Papa from 'papaparse';

function CsvForm() {
  const [data, setData] = useState([]);
  const [csvContent, setCsvContent] = useState('');

  const handleInputChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };

  const handleAddRow = () => {
    setData([...data, { empid:'',name: '', role: '', dob: '', contact: '', Address: '' }]);
  };

  const handleGenerateCsv = () => {
    const csv = Papa.unparse(data);
    setCsvContent(csv);
  };

  return (
    <div className='container'>
      <h2 className='heading' >EMPLOYEE DETAILS ENTRY FORM</h2>
      <table>
        <thead>
          <tr>
            <th>Emp ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>DOB</th>
            <th>Contact</th>
            <th>Adress</th>            
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.empid}
                  onChange={(e) => handleInputChange(index, 'empid', e.target.value)}
                />
              </td>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.name}
                  onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.role}
                  onChange={(e) => handleInputChange(index, 'role', e.target.value)}
                />
              </td>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.dob}
                  onChange={(e) => handleInputChange(index, 'dob', e.target.value)}
                />
              </td>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.contact}
                  onChange={(e) => handleInputChange(index, 'contact', e.target.value)}
                />
              </td>
              <td>
                <input
                className='input'
                  type="text"
                  value={row.address}
                  onChange={(e) => handleInputChange(index, 'address', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddRow}>create</button>
      <button onClick={handleGenerateCsv}>Generate CSV</button>
      {csvContent && (
        <a
          href={`data:text/csv;charset=utf-8,${encodeURIComponent(csvContent)}`}
          download="data.csv"
        >
          Download CSV
        </a>
      )}
    </div>
  );
}

export default CsvForm;
