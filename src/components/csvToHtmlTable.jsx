import React from 'react';
import { parseCsvToRowsAndColumn } from '../utils';

const CsvToHtmlTable = ({ data, csvDelimiter, hasHeader, tableClassName, tableRowClassName, tableColumnClassName, rowKey, colKey }) => {
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
            {
              row.map((column, i) => (
                <th
                  key={`header-${i}`}
                >
                  {column}
                </th>
              ))
            }
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
            rows.map((row, rowIdx) => (
              <tr className={tableRowClassName} key={typeof(rowKey) === 'function' ? rowKey(row, rowIdx) : rowIdx}>
                {
                  row.map && row.map((column, colIdx) => (
                    <td
                      className={tableColumnClassName}
                      key={typeof(rowKey) === 'function' ? colKey(row, colIdx, rowIdx) : column[colKey]}
                    >
                      {column}
                    </td>
                  ))
                }
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
  rowKey: (row, rowIdx) => `row-${rowIdx}`,
  colKey: (col, colIdx, rowIdx) => `col-${colIdx}`,
  hasHeader: true,
  csvDelimiter: '\t',
  tableClassName: '',
  tableRowClassName: '',
  tableColumnClassName: '',
};

export default CsvToHtmlTable;
