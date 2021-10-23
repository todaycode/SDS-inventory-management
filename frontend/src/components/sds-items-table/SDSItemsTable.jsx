import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { Description } from '@material-ui/icons';

import { SDSPreviewPopup, TablePaginationActions } from 'components';

import useStyles from './styles';

const SDSItemsTable = ({ locationName, rows }) => {
  const classes = useStyles();
  const history = useHistory();
  const [selectedSDS, setSelectedSDS] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSDSPreview = (sdsFile) => {
    setSelectedSDS(sdsFile);
    setOpen(true);
  };

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
          <TableCell className={classes.tableHeading}>Name</TableCell>
          <TableCell className={classes.tableHeading}>Supplier</TableCell>
          <TableCell className={classes.tableHeading}>Revision date</TableCell>
          <TableCell className={classes.tableHeading}>GHS</TableCell>
          <TableCell className={classes.tableHeading} />
        </TableRow>
      </TableHead>
      <TableBody className={classes.tableBody}>
        {(rowsPerPage > 0
          ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : rows
        ).map((row) => (
          <TableRow
            onDoubleClick={() =>
              history.push(`/sdsDetails/${row.id}?location=${locationName}`)
            }
            className={classes.tableRow}
            key={row.id}
          >
            <TableCell
              style={{ fontWeight: 'bold', width: '20%' }}
              component="th"
              scope="row"
            >
              {row.imported_sds_product_name}
            </TableCell>
            <TableCell style={{ width: '30%', fontWeight: 'bold' }}>
              {row.imported_sds_company_name}
            </TableCell>
            <TableCell style={{ width: '30%', fontWeight: 'bold' }}>
              {row.imported_sds_revision_date}
            </TableCell>
            <TableCell style={{ width: '260px' }}>
              <div style={{ display: 'flex', width: '100%', flexWrap: 'wrap' }}>
                {row.ghs_pictograms.map((el, i) => (
                  <img height="60px" width="60px" alt="GHS" src={el} key={i} />
                ))}
              </div>
            </TableCell>
            <TableCell align={'right'}>
              <div className={classes.iconWrapper} title="Open SDS">
                <Description onClick={() => handleSDSPreview(row.sds_file)} />
              </div>
            </TableCell>
          </TableRow>
        ))}

        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
            colSpan={3}
            count={rows.length}
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
      <SDSPreviewPopup
        sdsFile={selectedSDS}
        open={open}
        onClose={() => setOpen(false)}
      />
    </Table>
  );
};

export default SDSItemsTable;
