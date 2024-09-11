
import React, { useState } from 'react';
import Papa from 'papaparse'; // Import PapaParse for CSV export
import CustomerPieChart from './CustomerPieChart'; // Import the pie chart component

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    console.log('Selected Date:', event.target.value);
    // Fetch traffic details for the selected date
  };

  const handleExport = () => {
    // Data to export (can be updated with actual data fetching logic)
    const data = [
      { name: 'India', value: 500 },
      { name: 'United States', value: 300 },
      { name: 'Canada', value: 200 },
      { name: 'Mexico', value: 100 },
      { name: 'Others', value: 150 }
    ];

    // Convert JSON data to CSV
    const csv = Papa.unparse(data);
    
    // Create a downloadable link
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'traffic-data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: '#f5f5dc',  // Cream white background
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <h1>Traffic by Locations</h1>

      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <label htmlFor="date-picker" style={{ marginRight: '10px' }}>Select Date:</label>
        <input
          id="date-picker"
          type="date"
          onChange={handleDateChange}  // Call the function when the date changes
          style={{ marginRight: '10px', padding: '8px', fontSize: '16px' }}
        />
        <button onClick={handleExport} style={{ padding: '8px', fontSize: '16px' }}>
          Export Data
        </button>
      </div>

      {/* Render the pie chart */}
      <CustomerPieChart selectedDate={selectedDate} /> {/* Pass the selected date to the pie chart */}
    </div>
  );
}

export default App;
