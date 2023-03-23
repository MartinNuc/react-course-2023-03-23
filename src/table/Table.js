
export function Table({ rows, columns }) {

  const arrayOfRowsLength = new Array(rows).fill('nazdar');
  const arrayOfColumnsLength = new Array(columns).fill('nazdar');

  return <table border="1">
    <tbody>
      {arrayOfRowsLength.map((_, rowIndex) =>
        <tr key={rowIndex}>
          {arrayOfColumnsLength.map((item, columnIndex) =>
            <td key={columnIndex}>{rowIndex} {columnIndex} Hello</td>
          )}
        </tr>
      )}
    </tbody>
  </table>
}