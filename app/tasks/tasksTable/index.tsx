import React, { memo } from "react";
import { Paper, Table, TableContainer } from "@mui/material";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

function TasksTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="Tasks list">
        <TableHead />
        <TableBody />
      </Table>
    </TableContainer>
  );
}

export default memo(TasksTable);
