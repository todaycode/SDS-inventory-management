import React from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogTitle,
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

import { addSDSToLocation, getAllPdfs } from 'api';
import { TablePaginationActions } from 'components';

import useStyles from './styles';

const AddSubstancePopup = ({ locationID, open, onClose, refetch }) => {
  const classes = useStyles();
  const [selectedSubstances, setSelectedSubstances] = React.useState([]);
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

  const handleClose = () => {
    setSelectedSubstances([]);
    onClose();
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSelect = (value) => {
    if (selectedSubstances.includes(value)) {
      setSelectedSubstances(
        selectedSubstances.filter((item) => item !== value)
      );
    } else {
      setSelectedSubstances([value, ...selectedSubstances]);
    }
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleAddSubmit = () => {
    const addSDSToLocationRequest = addSDSToLocation(
      locationID,
      selectedSubstances
    );
    addSDSToLocationRequest.then((response) => {
      if (response?.status === 201) {
        refetch();
        onClose();
      }
    });
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
    if (open) {
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
    }
  }, [open, page, rowsPerPage]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add substance</DialogTitle>
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
      <div className={classes.tableWrapper}>
        <Table
          classes={{
            root: classes.table,
          }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeading} />
              <TableCell className={classes.tableHeading}>Name</TableCell>
              <TableCell className={classes.tableHeading}>Supplier</TableCell>
              <TableCell className={classes.tableHeading}>
                Revision date
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableBody}>
            {sdsPaginatedData.results.map((row) => (
              <TableRow key={row.sds_pdf_product_name}>
                <TableCell align={'right'}>
                  <Checkbox
                    style={{
                      color: '#00324E',
                    }}
                    onClick={() => handleSelect(row.id)}
                    checked={selectedSubstances.includes(row.id)}
                  />
                </TableCell>
                <TableCell
                  style={{ fontWeight: 'bold' }}
                  component="th"
                  scope="row"
                >
                  {row.sds_pdf_product_name}
                </TableCell>
                <TableCell style={{fontWeight: 'bold' }}>
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
                rowsPerPageOptions={[10, { label: 'All', value: -1 }]}
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
      <div className={classes.addActionWrapper}>
        <Button
          className={classes.addBtn}
          variant={'contained'}
          onClick={() => handleAddSubmit()}
        >{`Add substances (${selectedSubstances.length})`}</Button>
      </div>
    </Dialog>
  );
};

export default AddSubstancePopup;
