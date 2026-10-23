import React, { useState, useEffect } from 'react';

function GoogleSheetFetcher() {
  // 1. Set up state for the data, loading status, and errors
  const [sheetData, setSheetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 2. Build the URL using your environment variables
    // Note: Change process.env to import.meta.env if you are using Vite
    const apiKey = import.meta.env.VITE_SHEETS_API_KEY;
    const sheetId = "17uZCgJJ7SJoOUBByca3xAGxbMDYcoP-oN38EAJcLRx8"; // Replace with your actual Google Sheet ID

    // Define the exact sheet name and cell range you want to read
    const range = 'main!A1:D30'; // Adjust this range as needed
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    // 3. Fetch the data from Google
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from Google Sheets');
        }
        return response.json();
      })
      .then((data) => {
        // Google Sheets returns the rows inside a 'values' array
        // If the sheet is completely empty, 'values' might be undefined
        setSheetData(data.values || []);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []); // The empty array ensures this only runs once when the component loads

  // 4. Render the UI based on the current state
  if (isLoading) return <div>Loading spreadsheet data...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
    <h1>{sheetData[0]?.[0]} {sheetData[0]?.[1]}</h1>
    <hr></hr>
    <br></br>
    <h2>{sheetData[1]?.[0]}: <a href={sheetData[1]?.[2]}>{sheetData[1]?.[1]}</a></h2>
    <h2>{sheetData[2]?.[0]}: {sheetData[2]?.[1]}</h2>
    <h3>{sheetData[3]?.[0]}</h3>
    <p>{sheetData[3]?.[1]}</p>
    <p>{sheetData[4]?.[1]}</p>
    <p>{sheetData[5]?.[1]}</p>
    <h4>{sheetData[6]?.[0]}</h4>
    <p>{sheetData[6]?.[1]}</p>
    <p>{sheetData[7]?.[1]}</p>
    <p>{sheetData[8]?.[1]}</p>
    <p>{sheetData[9]?.[1]}</p>
    <p>{sheetData[10]?.[1]}</p>
    <p>{sheetData[11]?.[1]}</p>
    <p>{sheetData[12]?.[1]}</p>
    <p>{sheetData[13]?.[1]}</p>
    <p>{sheetData[14]?.[1]}</p>
    <p>{sheetData[15]?.[1]}</p>
    <p>{sheetData[16]?.[1]}</p>
    <p>{sheetData[17]?.[1]}</p>
    <p>{sheetData[18]?.[1]}</p>
    <p>{sheetData[19]?.[1]}</p>
    <hr></hr>
    </div>
  );
}

export default GoogleSheetFetcher;