import React from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';

import { parseCsvToRowsAndColumn } from '../utils';

class CsvToHtmlTable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  renderTableHeader = (row) => {
    if (row) {
      return (<thead>
        <tr>
          {
            map(row, (column, i) => {
            return (<th key={`${i}${column}`}>{column}</th>);
            })
          }
        </tr>
      </thead>);
    }
  };

  renderTableBody = (rows) => {
    return (
            <tbody>
            {
              map(rows, (row, i) => (
                <tr className={this.props.tableRowClassName} key={i}>
                {
                  map(row, (column, i) => (<td className={this.props.tableColumnClassName} key={`${i}${column}`}>{column}</td>))
                }
                </tr>
              ))
            }
            </tbody>)
  };

  render() {
    const rowsWithColumns = parseCsvToRowsAndColumn(this.props.data.trim(), this.props.csvDelimiter);

    let headerRow = undefined;
    if (this.props.hasHeader) {
      headerRow = rowsWithColumns.splice(0, 1)[0];
    }

    return (
      <table className={`csv-html-table ${this.props.tableClassName}`}>
        {this.renderTableHeader(headerRow)}
        {this.renderTableBody(rowsWithColumns)}
      </table>);
  }
}


CsvToHtmlTable.defaultProps = {
  data: '',
  hasHeader: true,
  csvDelimiter: '\t',
  tableClassName: '',
  tableRowClassName: '',
  tableColumnClassName: '',
};

CsvToHtmlTable.propTypes = {
  data: PropTypes.string.isRequired,
  hasHeader: PropTypes.bool,
  csvDelimiter: PropTypes.string,
  tableClassName: PropTypes.string,
  tableRowClassName: PropTypes.string,
  tableColumnClassName: PropTypes.string,
};

export default CsvToHtmlTable;
