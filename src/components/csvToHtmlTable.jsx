import React from 'react';
import { parseCsvToRowsAndColumn } from '../utils';

const CsvToHtmlTable = ({ data, csvDelimiter, hasHeader, tableClassName, tableRowClassName, tableColumnClassName }) => {
  const rowsWithColumns = parseCsvToRowsAndColumn(data.trim(), csvDelimiter);
  let headerRow = undefined;
  if (hasHeader) {
    headerRow = rowsWithColumns.splice(0, 1)[0];
  }

  const renderTableHeader = (row) => {
    if (row && row.map) {
      return (
        <thead>
          <tr>
            {row.map((column, i) => (<th key={`${i}${column}`}>{column}</th>))}
          </tr>
        </thead>
      );
    }
  };

  const renderTableBody = (rows) => {
    if (rows && rows.map) {
      return (
        <tbody>
          {
            rows.map((row, i) => (
              <tr className={tableRowClassName} key={i}>
              {row.map && row.map((column, i) => (<td className={tableColumnClassName} key={`${i}${column}`}>{column}</td>))}
              </tr>
            ))
          }
        </tbody>
      );
    }
  };

  return (
    <table className={`csv-html-table ${tableClassName}`}>
      {renderTableHeader(headerRow)}
      {renderTableBody(rowsWithColumns)}
    </table>
  );
};


CsvToHtmlTable.defaultProps = {
  data: '',
  hasHeader: true,
  csvDelimiter: '\t',
  tableClassName: '',
  tableRowClassName: '',
  tableColumnClassName: '',
};

export default CsvToHtmlTable;
