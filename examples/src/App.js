import React, { useState } from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import { sampleData1, sampleData2 } from "./sample";

export const App = () => {
  const [sampleNumber, setSampleNumber] = useState(1);
  const alternativeSampleNumber = sampleNumber === 1 ? 2 : 1;
  const sampleData = sampleNumber === 1 ? sampleData1 : sampleData2;

  return (
    <div className="container">

      <h2>Simple example to demonstrate CSV to HTML</h2>

      Your Table would look like below <b>styled with bootstrap</b>
      <br/><br/>
      <CsvToHtmlTable
        data={sampleData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />


      <h2>Your CSV data looks like below</h2>
      <pre>
      {sampleData}
      </pre>

      <button onClick={() => setSampleNumber(alternativeSampleNumber)}>Switch to sample #{alternativeSampleNumber}</button>
    </div>
  );
};

export default App;
