import React from 'react';

import { TablePaginationActions } from 'components';

import useStyles from './styles';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import { getAllPdfs } from 'api';

const GlobalSDSSearchTable = () => {
  const classes = useStyles();

  const [sdsPaginatedData, setSdsPaginatedData] = React.useState({
    results: [],
    count: 100,
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [producerSearchValue, setProducerSearchValue] = React.useState('');
  const [productSearchValue, setProductSearchValue] = React.useState('');

  const handleProducerSearch = (event) => {
    setProducerSearchValue(event.target.value);
  };

  const handleProductSearch = (event) => {
    setProductSearchValue(event.target.value);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const submitSearch = () => {
    const getAllPdfsRequest = getAllPdfs({
      search_product: productSearchValue,
      search_producer: producerSearchValue,
      page: 1,
      pade_size: rowsPerPage,
    });
    getAllPdfsRequest.then((response) => {
      if (response.status === 200) {
        setSdsPaginatedData(response.data);
      }
    });
  };

  React.useEffect(() => {
    const getAllPdfsRequest = getAllPdfs({
      page: page + 1,
      page_size: rowsPerPage,
      search_product: productSearchValue,
      search_producer: producerSearchValue,
    });
    getAllPdfsRequest.then((response) => {
      if (response.status === 200) {
        setSdsPaginatedData(response.data);
      }
    });
  }, [page, rowsPerPage]);

  return (
    <div className={classes.contentBox}>
      <div className={classes.searchInputsWrapper}>
        <TextField
          onChange={handleProductSearch}
          value={productSearchValue}
          InputProps={{
            classes: { input: classes.sdsSearchInput },
            disableUnderline: true,
          }}
          classes={{ root: classes.inputRoot }}
          placeholder={'Product'}
        />
        <TextField
          onChange={handleProducerSearch}
          value={producerSearchValue}
          InputProps={{
            classes: { input: classes.sdsSearchInput },
            disableUnderline: true,
          }}
          classes={{ root: classes.inputRoot }}
          placeholder={'Producer'}
        />
        <Button
          onClick={() => submitSearch()}
          disabled={
            producerSearchValue.length < 3 &&
            productSearchValue.length < 3 &&
            producerSearchValue.length !== 0 &&
            productSearchValue.length !== 0
          }
        >
          <SearchOutlined />
        </Button>
      </div>
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
            <TableCell className={classes.tableHeading}>
              Revision date
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.tableBody}>
          {sdsPaginatedData.results.map((row) => (
            <TableRow key={row.id}>
              <TableCell
                style={{ fontWeight: 'bold' }}
                component="th"
                scope="row"
              >
                {row.sds_pdf_product_name}
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>
                {row.sds_pdf_manufacture_name}
              </TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>
                {row.sds_pdf_revision_date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: -1 }]}
              count={sdsPaginatedData.count}
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
    </div>
  );
};

export default GlobalSDSSearchTable;
