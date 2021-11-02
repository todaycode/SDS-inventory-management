import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';

import { getSubstances } from 'api';
import { TablePaginationActions } from 'components';

import useStyles from './styles';

const SubstancesTable = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [substancesData, setSubstancesData] = React.useState({
    results: [],
    count: 100,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  React.useEffect(() => {
    const getSubstancesRequest = getSubstances({
      page: page + 1,
      page_size: rowsPerPage,
    });
    getSubstancesRequest.then((response) => {
      if (response.status === 200) {
        setSubstancesData(response.data);
      }
    });
  }, [page, rowsPerPage]);

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
          <TableCell className={classes.tableHeading}>Product Name</TableCell>
          <TableCell className={classes.tableHeading}>Supplier Name</TableCell>
          <TableCell className={classes.tableHeading}>Revision date</TableCell>
          <TableCell className={classes.tableHeading}>GHS</TableCell>
          <TableCell className={classes.tableHeading}>Locations</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className={classes.tableBody}>
        {substancesData.results.map((row) => {
          if (row.matched_pdf) {
            return (
              <TableRow className={classes.tableRow} key={row.id}>
                <TableCell
                  style={{ fontWeight: 'bold' }}
                  component="th"
                  scope="row"
                >
                  {row?.matched_pdf.sds_pdf_product_name}
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                  {row?.matched_pdf.sds_pdf_manufacture_name}
                </TableCell>
                <TableCell style={{ fontWeight: 'bold' }}>
                  {row?.matched_pdf.sds_pdf_revision_date}
                </TableCell>
                <TableCell style={{ width: '20%' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {row.matched_pdf?.extracted_data?.ghs_pictograms?.map(
                      (el, i) => (
                        <img
                          height="60px"
                          width="60px"
                          alt="GHS"
                          src={el}
                          key={i}
                        />
                      )
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  {row.matched_pdf?.used_in_locations.map((el, i) => (
                    <p key={i}>⬤ {el}</p>
                  ))}
                </TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
            colSpan={3}
            count={substancesData.count}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
};

export default SubstancesTable;
