## React CSV to HTML Table (Only 2.3Kb unzipped)

CSV is the simplest form of storing a tabular data. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format. React csv to html table is a simple reactjs library that takes CSV file content as input and renders a simple HTML table.

Supports React >= v16.8.6 (Use older version of this library to support React v15)

Blog post https://medium.com/@marudhupandiyang/react-csv-to-html-table-f7880a90bfc

### Installation:

Use for React >= v16

    `npm install react-csv-to-table`

 To use for React >= v15+

    `npm install react-csv-to-table@0.0.1`

### Usage:

```
import { CsvToHtmlTable } from 'react-csv-to-table';

const sampleData = `
Model,mpg,cyl,disp,hp,drat,wt,qsec,vs,am,gear,carb
Mazda RX4,21,6,160,110,3.9,2.62,16.46,0,1,4,4
Mazda RX4 Wag,21,6,160,110,3.9,2.875,17.02,0,1,4,4
Datsun 710,22.8,4,108,93,3.85,2.32,18.61,1,1,4,1
Hornet 4 Drive,21.4,6,258,110,3.08,3.215,19.44,1,0,3,1
Hornet Sportabout,18.7,8,360,175,3.15,3.44,17.02,0,0,3,2
Valiant,18.1,6,225,105,2.76,3.46,20.22,1,0,3,1
Duster 360,14.3,8,360,245,3.21,3.57,15.84,0,0,3,4
Merc 240D,24.4,4,146.7,62,3.69,3.19,20,1,0,4,2
Merc 230,22.8,4,140.8,95,3.92,3.15,22.9,1,0,4,2
Merc 280,19.2,6,167.6,123,3.92,3.44,18.3,1,0,4,4
Merc 280C,17.8,6,167.6,123,3.92,3.44,18.9,1,0,4,4
Merc 450SE,16.4,8,275.8,180,3.07,4.07,17.4,0,0,3,3
Merc 450SL,17.3,8,275.8,180,3.07,3.73,17.6,0,0,3,3
Merc 450SLC,15.2,8,275.8,180,3.07,3.78,18,0,0,3,3
Cadillac Fleetwood,10.4,8,472,205,2.93,5.25,17.98,0,0,3,4
Lincoln Continental,10.4,8,460,215,3,5.424,17.82,0,0,3,4
Chrysler Imperial,14.7,8,440,230,3.23,5.345,17.42,0,0,3,4
Fiat 128,32.4,4,78.7,66,4.08,2.2,19.47,1,1,4,1
`;

<CsvToHtmlTable
  data={sampleData}
  csvDelimiter=","
/>
```

Easily customizable via css using classnames

```
<CsvToHtmlTable
  data={sampleData}
  csvDelimiter=","
  tableClassName="table table-striped table-hover"
/>
```

The above code displays a table like below which is styled using bootstrap.

![Table styled with bootstrap](https://i.imgur.com/nW3R9z8.png)


### Complete Properties

|Property Name  | Type | Default Value  | Description |
|---|---|---|---|
|data | string  | Nothing  | Hold the complete CSV Data. If your `csv` data is in a `remote url`, `fetch` it and send the contents of the file.  |
|hasHeader   | bool  | true  | Tells the program to consider the first line of the provided data as the header. If `hasHeader` is false, then the first line will also be treated like any other row.  |
|csvDelimiter  | string  | '\t'  | The `delimiter` that  seperates the columns in the text. Other possible values can include `,`,'&nbsp;&nbsp;&nbsp;&nbsp;'(4 spaces) |
|tableClassName|string|Nothing|Set the class name for the whole table|
|tableRowClassName|string|Nothing|Set the class name for each row in the table body|
|tableColumnClassName|string|Nothing|Set the class name for each column in the table body|
|rowKey|function| (row, rowIdx) => `row-${rowIdx}`|If not passed, `index` of the row will be used. In case of function, the passed in function in receive row and row index as arguments as shown in default function.|
|colKey|number or function| (col, colIdx, rowIdx) => `col-${colIdx}`| If number, the value in the column of the specified index will be used as key. In case of function, the passed in function in receive row, col index and row index as arguments as shown in default function.|


### Instructions for example
 Checkout example [Readme](examples)


### Roadmap
1. Add more features to support multiple functionalities.
2. Make it to render millions of row easily.
3. Add excel like features
