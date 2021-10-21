import React from 'react';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import useStyles from './styles';

const StatementsTable = ({ statementCodes }) => {
  const classes = useStyles();

  return (
    <Table
      classes={{
        root: classes.table,
      }}
      size="small"
      aria-label="a dense table"
    >
      <TableHead>
        <TableRow>
          <TableCell className={classes.tableHeading}>Code</TableCell>
          <TableCell className={classes.tableHeading}>Statements</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.tableBody}>
        {statementCodes.map((row, i) => (
          <TableRow className={classes.tableRow} key={i}>
            <TableCell
              style={{ fontWeight: 'bold', width: '25%' }}
              component="th"
              scope="row"
            >
              {row.statement_code}
            </TableCell>
            <TableCell
              style={{ fontWeight: 'bold' }}
              component="th"
              scope="row"
            >
              {row.statements}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StatementsTable;
