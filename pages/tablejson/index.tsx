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
} from '@mui/material';

import React, { useEffect, useState } from 'react';
import IndexApiTable from '../../components/ulttable/api';
import BodyTable from '../../components/ulttable/bodytable';
import HandlersTable from '../../components/ulttable/handlers';
// import axios from 'axios';

export default function TableIndex() {
  const [table, setTable] = useState<any[]>([]);

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
    return setTable(data);
  }

  useEffect(() => {
    getDataDB();
  }, []);

  const {
    submitData,
    deleteData,
    patchFirstName,
    patchLastName,
    patchEmail,
    patchGender,
    patchIp,
  } = IndexApiTable({ getDataDB });

  const {
    handleEditFirstName,
    handleEditLastName,
    handleEditEmail,
    handleEditGender,
    handleEditIp,
    handleDelete,
    handleAdd,
  } = HandlersTable({
    setClose,
    setTable,
    table,
    firstName,
    lastName,
    email,
    gender,
    ip,
    patchFirstName,
    patchLastName,
    patchGender,
    patchEmail,
    patchIp,
    submitData,
    deleteData,
  });

  return (
    <Stack alignItems={'center'}>
      <TableContainer component={Paper}>
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
          <BodyTable
            add={add}
            firstName={firstName}
            lastName={lastName}
            email={email}
            gender={gender}
            ip={ip}
            del={del}
            table={table}
            close={close}
            setEmail={setEmail}
            setGender={setGender}
            setDel={setDel}
            setAdd={setAdd}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setIp={setIp}
            setClose={setClose}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleEditFirstName={handleEditFirstName}
            handleEditLastName={handleEditLastName}
            handleEditEmail={handleEditEmail}
            handleEditGender={handleEditGender}
            handleEditIp={handleEditIp}
          />
        </Table>
      </TableContainer>
    </Stack>
  );
}
