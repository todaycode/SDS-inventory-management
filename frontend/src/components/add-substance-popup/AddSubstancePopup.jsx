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
} from '@material-ui/core';

import { addSDSToLocation, getAllUserSDSFiles } from 'api';
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
  React.useEffect(() => {
    if (open) {
      const getAllUserSDSFilesRequest = getAllUserSDSFiles(locationID, {
        page: page + 1,
        page_size: rowsPerPage,
      });
      getAllUserSDSFilesRequest.then((response) => {
        if (response.status === 200) {
          setSdsPaginatedData(response.data);
        }
      });
    }
  }, [open, page, rowsPerPage, locationID]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add substance</DialogTitle>
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
              <TableRow key={row.imported_sds_product_name}>
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
                  {row.imported_sds_product_name}
                </TableCell>
                <TableCell style={{ width: 260, fontWeight: 'bold' }}>
                  {row.imported_sds_company_name}
                </TableCell>
                <TableCell style={{ width: 260, fontWeight: 'bold' }}>
                  {row.imported_sds_revision_date}
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
