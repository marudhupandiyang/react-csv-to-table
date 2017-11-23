import React from "react";

import { CsvToHtmlTable } from "../../../src/index";
import { sampleData } from "./sample";

export const App = () => {
  return (
    <div className="container">
      <CsvToHtmlTable
        data={sampleData}
        csvDelimiter=","
        tableClassName="table table-striped table-hover"
      />
    </div>
  );
};

export default App;
