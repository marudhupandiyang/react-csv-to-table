import React from "react";
import { CsvToHtmlTable } from "react-csv-to-table";

import { sampleData } from "./sample";

export const App = () => {
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
    </div>
  );
};

export default App;
