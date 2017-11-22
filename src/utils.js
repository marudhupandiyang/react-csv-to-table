import { map } from 'lodash';

/**
 * Converts CSV to HTML Table
 *
 */

export function parseCsvToRowsAndColumn(csvText, csvColumnDelimiter = '\t') {
    const rows = csvText.split('\n');
    const rowsWithColumns = map(rows, (row) => {
        return row.split(csvColumnDelimiter);
    });

    return rowsWithColumns;
}
