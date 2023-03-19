import "./table.css";
const Table = ({ primary, filas, columnas, Headers }) => {
  const mode = primary ? "fondo" : "";
  const columns = [];
  for (let i = 0; i < columnas; i++) {
    columns.push(
      <th className={[mode].join(" ")}>
        {Headers[i] ? Headers[i] : "Columna " + (i + 1)}
      </th>
    );
  }
  const rows = [];
  for (let i = 0; i < filas; i++) {
    let fil = [];
    for (let i = 0; i < columnas; i++) {
      fil.push(<td> </td>);
    }
    rows.push(<tr>{fil}</tr>);
  }
  return (
    <>
      <table>
        <tr>{columns}</tr>

        {rows}
      </table>
    </>
  );
};

export { Table };
