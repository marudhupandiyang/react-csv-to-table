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

// export function csvToHtmlTable(csvText, csvColumnDelimiter = '\t', csvHasHeader = false) {

//     const rowsWithColumns = parseCsvToRowsAndColumn(csvText, csvColumnDelimiter);
//     var columns = csvContent.split('\n');
//     var tabularData = [];
//     var maxRowLen = [];
//     columns.forEach(function (e, i) {
//         if (typeof tabularData[i] === 'undefined') {
//             tabularData[i] = [];
//         }
//         var regex = new RegExp(delimiter + '(?![^"]*"\\B)');
//         var row = e.split(regex);
//         row.forEach(function (ee, ii) {
//             if (typeof maxRowLen[ii] === 'undefined') {
//                 maxRowLen[ii] = 0;
//             }
//             maxRowLen[ii] = Math.max(maxRowLen[ii], ee.length);
//             tabularData[i][ii] = ee;
//         });
//     });
//     var headerOutput = '';
//     var seperatorOutput = '';
//     maxRowLen.forEach(function (len) {
//         var sizer = Array(len + 1 + 2);
//         seperatorOutput += '|' + sizer.join('-');
//         headerOutput += '|' + sizer.join(' ');
//     });
//     headerOutput += '| \n';
//     seperatorOutput += '| \n';
//     if (hasHeader) {
//         headerOutput = '';
//     }
//     var rowOutput = '';
//     tabularData.forEach(function (col, i) {
//         maxRowLen.forEach(function (len, y) {
//             var row = typeof col[y] === 'undefined' ? '' : col[y];
//             var preSpaceCount = 1;
//             var postSpaceCount = (len - row.length) + 1;
//             if (useDoubleBarHeader) {
//                 if (i > 0) {
//                     postSpaceCount++;
//                     preSpaceCount++;
//                     if (y > 0) {
//                         preSpaceCount--;
//                     }
//                 }
//                 if (!hasHeader && i === 0) {
//                     postSpaceCount++;
//                     if (y === 0) {
//                         preSpaceCount++;
//                     }
//                 }
//             }
//             var preSpacing = Array(preSpaceCount + 1).join(' ');
//             var spacing = Array(postSpaceCount + 1).join(' ');
//             var out = "|" + preSpacing + row + spacing;
//             if (hasHeader && i === 0) {
//                 headerOutput += out;
//             }
//             else {
//                 rowOutput += out;
//             }
//         });
//         if (hasHeader && i === 0) {
//             headerOutput += '| \n';
//         }
//         else {
//             rowOutput += '| \n';
//         }
//     });
//     if (useDoubleBarHeader) {
//         headerOutput = headerOutput.replace(/\|/g, '||');
//         seperatorOutput = '';
//     }
//     return headerOutput + seperatorOutput + rowOutput;
// }
