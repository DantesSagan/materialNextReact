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
  const [email, setEmail] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null);

  const [close, setClose] = useState<boolean>(true);
  const [del, setDel] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(true);

console.log(table)

  const handleDelete = (rowToDelete: number) => {
    setTable((data) => data.filter((rowID) => rowID.id !== rowToDelete));
  };

  const handleEditFirstName = (rowToEdit: string, rowFirstName: string) => {
    Object.keys(table).map((item) => {
      rowFirstName === table[item].first_name
        ? (table[item].first_name = rowToEdit)
        : null;
    });
    setClose(!close);
  };

  const handleEditLastName = (rowToEdit: string, rowLastName: string) => {
    Object.keys(table).map((item) => {
      rowLastName === table[item].last_name
        ? (table[item].last_name = rowToEdit)
        : null;
    });
    setClose(!close);
  };

   const handleEditEmail = (rowToEdit: string, rowEmail: string) => {
     Object.keys(table).map((item) => {
       rowEmail === table[item].email
         ? (table[item].email = rowToEdit)
         : null;
     });
     setClose(!close);
   };

  const handleAdd = () => {
    const newData = {
      id: Date.now(),
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      ip_address: ip,
    };
    table.push(newData);
  };

  return (
    <Stack alignItems={'center'}>
      <TableContainer component={Paper} sx={{ maxWidth: '850px' }}>
        {/* START OF TABLE */}
        <Table aria-label='simple table'>
          {close ? null : (
            <Button
              color='error'
              variant='contained'
              onClick={() => setClose(!close)}
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
              <TableCell>Gender</TableCell>
              <TableCell>IP</TableCell>
            </TableRow>
          </TableHead>
          {/* BODY */}
          <TableBody>
            {add ? (
              <Button
                onClick={() => setAdd(!add)}
                variant='contained'
                color='success'
              >
                Add User
              </Button>
            ) : (
              <TableRow>
                {add ? null : (
                  <Button
                    onClick={() => setAdd(!add)}
                    variant='contained'
                    color='error'
                  >
                    Close
                  </Button>
                )}
                <Button onClick={handleAdd} variant='contained' color='success'>
                  Add
                </Button>
                <TableCell>
                  <TextField
                    placeholder='first_name'
                    defaultValue={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder='last_name'
                    defaultValue={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder='email'
                    defaultValue={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder='gender'
                    defaultValue={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </TableCell>
                <TableCell>
                  <TextField
                    placeholder='ip'
                    defaultValue={ip}
                    onChange={(e) => setIp(e.target.value)}
                  />
                </TableCell>
              </TableRow>
            )}
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
                  {!del ? (
                    <TableCell>
                      <Chip
                        color='primary'
                        key={row.id}
                        label={row.id}
                        onClick={() => setDel(!del)}
                      />
                    </TableCell>
                  ) : (
                    <TableCell>
                      <Chip
                        color='secondary'
                        key={row.id}
                        label={row.id}
                        onClick={() => setDel(!del)}
                        onDelete={() => handleDelete(row.id)}
                      />
                    </TableCell>
                  )}
                  {/* FIRST_NAME */}
                  {close ? (
                    <TableCell key={row.id}>
                      <Button onClick={() => setClose(!close)}>
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
                  {close ? (
                    <TableCell key={row.id}>
                      <Button onClick={() => setClose(!close)}>
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
                  {close ? (
                    <TableCell key={row.id}>
                      <Button onClick={() => setClose(!close)}>
                        {row.email}
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell key={row.id}>
                      <TextField
                        defaultValue={row.email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{
                          maxWidth: '200px',
                          minWidth: '150px',
                        }}
                        InputProps={{
                          endAdornment: (
                            <Button
                              onClick={() =>
                                handleEditEmail(email, row.email)
                              }
                            >
                              edit
                            </Button>
                          ),
                        }}
                      />
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}
