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
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function TableIndex() {
  const [table, setTable] = useState([]);

  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null);

  const [close, setClose] = useState<boolean>(true);
  const [del, setDel] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(true);

  async function getDataDB() {
    const response = await fetch('http://localhost:4000/tableData');
    const data = await response.json();
    setTable(data);
    console.log(data);
    return data;
  }

  useEffect(() => {
    getDataDB();
  }, []);

  // API POST REQUEST
  const submitData = async (dataArr: {}) => {
    const response = await fetch('http://localhost:4000/tableData', {
      method: 'POST',
      body: JSON.stringify(dataArr),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  };

  // API DELETE REQUEST
  const deleteComment = async (rowToDelete: number) => {
    const response = await fetch('http://localhost:4000/tableData', {
      method: 'DELETE',
      body: JSON.stringify(table[rowToDelete]),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);

    return data;
  };

  // API PATCH METHOD
  const patchComment = async (first_name: string) => {
    await fetch('http://localhost:4000/tableData', {
      method: 'PATCH',
      body: JSON.stringify(first_name),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  const handleEditFirstName = (
    rowToEdit: string | null,
    rowFirstName: string | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      // const datas = {
      //   id: table[item].id,
      //   first_name: (table[item].first_name = rowToEdit),
      //   last_name: table[item].last_name,
      //   email: table[item].email,
      //   gender: table[item].gender,
      //   ip_address: table[item].ip_address,
      // };
      return rowFirstName === table[item].first_name
        ? patchComment((table[item].first_name = rowToEdit))
        : console.log('error');
    });
  };

  const handleChange = (newValue: string | null) => {
    submitData(newValue);
    getDataDB();
  };

  const handleDelete = (rowToDelete: number) => {
    const index = table.findIndex((itemID) => {
      return itemID.id === rowToDelete;
    });
    console.log(index);

    const delData = setTable((data) =>
      data.filter((rowID) => {
        rowID.id !== rowToDelete;
      })
    );

    deleteComment(index);
    getDataDB();

    return delData;
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
      rowEmail === table[item].email ? (table[item].email = rowToEdit) : null;
    });
    setClose(!close);
  };

  const handleAdd = () => {
    const idIndex: string = table[0].id;
    const idData: number = idIndex.length + 1;
    const newData = {
      id: idData,
      first_name: firstName,
      last_name: lastName,
      email: email,
      gender: gender,
      ip_address: ip,
    };
    submitData(newData);
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
                              onClick={() => handleEditEmail(email, row.email)}
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
