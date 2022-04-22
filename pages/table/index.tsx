import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Stack,
  Chip,
  TextField,
  Button,
  Box,
} from '@mui/material';

import { tableData } from '../../components/data/tableData';
import React, { useState } from 'react';

export default function TableIndex() {
  const [table, setTable] = useState(
    tableData.map((row) => {
      return row;
    })
  );

  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);

  const [open, setOpen] = useState<boolean>(true);

  const handleDelete = (rowToDelete: number) => {
    setTable((data) => data.filter((rowID) => rowID.id !== rowToDelete));
  };

  const handleEditFirstName = (rowToEdit: string, rowFirstName: string) => {
    Object.keys(table).map((item) => {
      rowFirstName === table[item].first_name
        ? (table[item].first_name = rowToEdit)
        : null;
    });
    setOpen(!open);
  };

  const handleEditLastName = (rowToEdit: string, rowLastName: string) => {
    Object.keys(table).map((item) => {
      rowLastName === table[item].last_name
        ? (table[item].last_name = rowToEdit)
        : null;
    });
    setOpen(!open);
  };

  return (
    <Stack alignItems={'center'}>
      <TableContainer component={Paper} sx={{ maxWidth: '650px' }}>
        {/* START OF TABLE */}
        <Table aria-label='simple table'>
          {open ? null : (
            <Button
              color='error'
              variant='contained'
              onClick={() => setOpen(!open)}
            >
              Cancel
            </Button>
          )}
          {/* HEAD */}
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last name</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          {/* BODY */}
          <TableBody>
            {table.map((row) => {
              return (
                <TableRow
                  key={row.id}
                  sx={{
                    '&:last-child td, &:last-child th': {
                      border: 0,
                    },
                  }}
                >
                  {/* ID */}
                  <TableCell>
                    <Chip
                      color='secondary'
                      key={row.id}
                      label={row.id}
                      onDelete={() => handleDelete(row.id)}
                    />
                  </TableCell>
                  {/* FIRST_NAME */}
                  {open ? (
                    <TableCell key={row.id}>
                      <Button onClick={() => setOpen(!open)}>
                        {row.first_name}
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell key={row.id}>
                      <TextField
                        defaultValue={row.first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={{
                          maxWidth: '200px',
                          minWidth: '150px',
                        }}
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={() =>
                                handleEditFirstName(firstName, row.first_name)
                              }
                            >
                              edit
                            </Button>
                          ),
                        }}
                      />
                    </TableCell>
                  )}
                  {/* LAST_NAME */}
                  {open ? (
                    <TableCell key={row.id}>
                      <Button onClick={() => setOpen(!open)}>
                        {row.last_name}
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell key={row.id}>
                      <TextField
                        defaultValue={row.last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        style={{
                          maxWidth: '200px',
                          minWidth: '150px',
                        }}
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={() =>
                                handleEditLastName(lastName, row.last_name)
                              }
                            >
                              edit
                            </Button>
                          ),
                        }}
                      />
                    </TableCell>
                  )}
                  {/* EMAIL */}
                  <TableCell key={row.id}>{row.email}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
