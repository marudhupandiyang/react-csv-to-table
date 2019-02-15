/**
 * Converts CSV to HTML Table
 *
 */

export function parseCsvToRowsAndColumn(csvText, csvColumnDelimiter = '\t') {
  const rows = csvText.split('\n');
  if (!rows || rows.length === 0) {
    return [];
  }

  return rows.map(row => row.split(csvColumnDelimiter));
}
