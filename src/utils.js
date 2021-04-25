/**
 * Converts CSV to HTML Table
 *
 */

export function parseCsvToRowsAndColumn(csvText, csvColumnDelimiter = '\t') {
  const rows = csvText.split('\n');
  if (!rows || rows.length === 0) {
    return [];
  }

  return rows.map(row => parseRow(row, csvColumnDelimiter));
}

function parseRow(row, csvColumnDelimiter) {
  let cells = [];
  let currentCell = '';
  let quotedMode = false;

  for (let i = 0; i < row.length; i++) {
    const prevChar = i === 0 ? '' : row.charAt(i - 1);
    const currentChar = row.charAt(i);

    if (quotedMode) {
      if (currentChar === '"') {
        quotedMode = false;
      } else {
        currentCell += currentChar;
      }
    } else {
      if (currentChar === csvColumnDelimiter) {
        cells.push(currentCell);
        currentCell = '';
      } else if (currentChar === '"') {
        quotedMode = true;
        if (prevChar === '"') {
          currentCell += '"';
        }
      } else {
        currentCell += currentChar;
      }
    }
  }
  cells.push(currentCell);

  return cells;
}
