import React, { useState, useEffect } from 'react';

function GoogleSheetFetcher() {
  // 1. Set up state for the data, loading status, and errors
  const [sheetData, setSheetData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const verseIndex = 3; // The row index for the verse you want to fetch (0-based)
  const lifeStudyIndex = 8; // The row index for the life study you want to fetch (0-based)

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
    {/* Titles */}
    <h1>{sheetData[0]?.[0]} {sheetData[0]?.[1]}</h1>
    <hr></hr>
    {/* Content List */}
    <h2>{sheetData[1]?.[0]}: <a href={sheetData[1]?.[2]}>{sheetData[1]?.[1]}</a></h2>
    <h2>{sheetData[2]?.[0]}: <a href={sheetData[2]?.[2]}>{sheetData[2]?.[1]}</a></h2>
    {/* Verses */}
    <h2>{sheetData[verseIndex]?.[0]}</h2>
    {sheetData.map((row, index) => {
      // Skip the first 20 rows since they are already displayed above
      if (index >= verseIndex && index < lifeStudyIndex) return <p>{row?.[1]}</p>;
    })}
    {/* Life Study */}
    <h2>{sheetData[lifeStudyIndex]?.[0]}</h2>
    {sheetData.map((row, index) => {
      if (index >= lifeStudyIndex) return <p>{row?.[1]}</p>;
    })}
    <hr></hr>
    </div>
  );
}

export default GoogleSheetFetcher;