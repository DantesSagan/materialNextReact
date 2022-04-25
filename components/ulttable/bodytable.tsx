import {
  Button,
  Chip,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from '@mui/material';
import React from 'react';

export default function BodyTable({
  add,
  firstName,
  lastName,
  email,
  gender,
  ip,
  del,
  table,
  close,
  setEmail,
  setGender,
  setDel,
  setAdd,
  setFirstName,
  setLastName,
  setIp,
  setClose,
  handleAdd,
  handleDelete,
  handleEditFirstName,
  handleEditLastName,
  handleEditEmail,
  handleEditGender,
  handleEditIp,
}) {
  return (
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
        <TableRow sx={{ padding: '10px' }}>
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
      {table.map(
        (row: {
          id: number | null;
          first_name: string | null;
          last_name: string | null;
          email: string | null;
          gender: string | null;
          ip_address: string | null;
        }) => {
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
                          onClick={() => {
                            setClose(!close);
                            handleEditFirstName(
                              firstName,
                              row.first_name,
                              row.id
                            );
                          }}
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
                          onClick={() => {
                            setClose(!close);
                            handleEditLastName(lastName, row.last_name, row.id);
                          }}
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
                  <Button onClick={() => setClose(!close)}>{row.email}</Button>
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
                          onClick={() => {
                            setClose(!close);
                            handleEditEmail(email, row.email, row.id);
                          }}
                        >
                          edit
                        </Button>
                      ),
                    }}
                  />
                </TableCell>
              )}
              {/* GENDER */}
              {close ? (
                <TableCell key={row.id}>
                  <Button onClick={() => setClose(!close)}>{row.gender}</Button>
                </TableCell>
              ) : (
                <TableCell key={row.id}>
                  <TextField
                    defaultValue={row.gender}
                    onChange={(e) => setGender(e.target.value)}
                    style={{
                      maxWidth: '200px',
                      minWidth: '150px',
                    }}
                    InputProps={{
                      endAdornment: (
                        <Button
                          onClick={() => {
                            setClose(!close);
                            handleEditGender(gender, row.gender, row.id);
                          }}
                        >
                          edit
                        </Button>
                      ),
                    }}
                  />
                </TableCell>
              )}
              {/* IP */}
              {close ? (
                <TableCell key={row.id}>
                  <Button onClick={() => setClose(!close)}>
                    {row.ip_address}
                  </Button>
                </TableCell>
              ) : (
                <TableCell key={row.id}>
                  <TextField
                    defaultValue={row.ip_address}
                    onChange={(e) => setIp(e.target.value)}
                    style={{
                      maxWidth: '200px',
                      minWidth: '150px',
                    }}
                    InputProps={{
                      endAdornment: (
                        <Button
                          onClick={() => {
                            setClose(!close);
                            handleEditIp(ip, row.ip_address, row.id);
                          }}
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
        }
      )}
    </TableBody>
  );
}
