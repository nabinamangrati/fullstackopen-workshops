import { Link } from "react-router-dom";
// import { Table } from "react-bootstrap";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

const Notes = ({ notes }) => {
  return (
    <>
      <h1>Notes</h1>
      <TableContainer>
        <Table>
          <TableBody>
            {notes.map((note) => (
              <TableRow key={note.id}>
                <TableCell>
                  <Link to={`/notes/${note.id}`}>{note.content}</Link>
                </TableCell>
                <td>
                  <strong>{note.important ? "important" : ""}</strong>
                </td>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default Notes;
