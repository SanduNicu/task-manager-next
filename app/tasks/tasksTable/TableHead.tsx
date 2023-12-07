import { TableCell, TableHead, TableRow } from "@mui/material";
import React, { memo } from "react";

const tableHeader = ["Name", "Description", "Due Date"];

function Head() {
  return (
    <TableHead>
      <TableRow>
        <TableCell />
        {tableHeader.map((cell) => (
          <TableCell key={cell}>{cell}</TableCell>
        ))}
        <TableCell />
      </TableRow>
      <TableRow />
    </TableHead>
  );
}

export default memo(Head);
