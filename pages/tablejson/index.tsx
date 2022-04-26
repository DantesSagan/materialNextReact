import { TableContainer, Table, Paper, Stack, Button } from '@mui/material';

import React, { useEffect, useState } from 'react';
import IndexApiTable from '../../components/ulttable/api';
import TableApiSort from '../../components/ulttable/apiSort';
import BodyTable from '../../components/ulttable/bodytable';
import HandlersTable from '../../components/ulttable/handlers';
import HeadTable from '../../components/ulttable/head';

export default function TableIndex() {
  const [table, setTable] = useState<any[]>([]);

  // PROPS STATES
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [gender, setGender] = useState<string | null>(null);
  const [ip, setIp] = useState<string | null>(null);

  // CRUD BOOLEAN
  const [close, setClose] = useState<boolean>(true);
  const [del, setDel] = useState<boolean>(false);
  const [add, setAdd] = useState<boolean>(true);

  // SORT BOOLEAN
  const [defaultSort, setDefaultSort] = useState<boolean>(true);
  const [sortID, setSortID] = useState<boolean>(true);
  const [sortFN, setSortFN] = useState<boolean>(true);
  const [sortLN, setSortLN] = useState<boolean>(true);
  const [sortEmail, setSortEmail] = useState<boolean>(true);
  const [sortGender, setSortGender] = useState<boolean>(true);
  const [sortIP, setSortIP] = useState<boolean>(true);

  // ANCHOR and OPEN logic with using statements
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const openTwo = Boolean(anchorElTwo);

  const [anchorElThree, setAnchorElThree] = useState<null | HTMLElement>(null);
  const openThree = Boolean(anchorElThree);

  const [anchorElFour, setAnchorElFour] = useState<null | HTMLElement>(null);
  const openFour = Boolean(anchorElFour);

  const [anchorElFifth, setAnchorElFifth] = useState<null | HTMLElement>(null);
  const openFifth = Boolean(anchorElFifth);

  const [anchorElSix, setAnchorElSix] = useState<null | HTMLElement>(null);
  const openSix = Boolean(anchorElSix);

  const {
    sortIDAscData,
    sortIDDescData,
    sortFirstNameAscData,
    sortFirstNameDescData,
    sortLastNameAscData,
    sortLastNameDescData,
    sortEmailAscData,
    sortEmailDescData,
    sortGenderAscData,
    sortGenderDescData,
    sortIPAscData,
    sortIPDescData,
  } = TableApiSort({ setTable });

  async function getDataDB() {
    const response = await fetch('http://localhost:4000/tableData');
    const data = await response.json();
    return setTable(data);
  }

  useEffect(() => {
    defaultSort ? getDataDB() : getDataDB();
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  const handleClickThree = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElThree(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  const handleClickFour = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFour(event.currentTarget);
  };
  const handleCloseFour = () => {
    setAnchorElFour(null);
  };

  const handleClickFifth = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElFifth(event.currentTarget);
  };
  const handleCloseFifth = () => {
    setAnchorElFifth(null);
  };

  const handleClickSix = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSix(event.currentTarget);
  };
  const handleCloseSix = () => {
    setAnchorElSix(null);
  };

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
          <HeadTable
            handleClickTwo={handleClickTwo}
            openTwo={openTwo}
            anchorElTwo={anchorElTwo}
            handleCloseTwo={handleCloseTwo}
            sortID={sortID}
            setSortID={setSortID}
            sortIDDescData={sortIDDescData}
            sortIDAscData={sortIDAscData}
            handleClick={handleClick}
            open={open}
            anchorEl={anchorEl}
            handleClose={handleClose}
            sortFN={sortFN}
            setSortFN={setSortFN}
            sortFirstNameDescData={sortFirstNameDescData}
            sortFirstNameAscData={sortFirstNameAscData}
            handleClickThree={handleClickThree}
            openThree={openThree}
            anchorElThree={anchorElThree}
            handleCloseThree={handleCloseThree}
            sortLN={sortLN}
            setSortLN={setSortLN}
            sortLastNameDescData={sortLastNameDescData}
            sortLastNameAscData={sortLastNameAscData}
            handleClickFour={handleClickFour}
            openFour={openFour}
            anchorElFour={anchorElFour}
            handleCloseFour={handleCloseFour}
            sortEmail={sortEmail}
            setSortEmail={setSortEmail}
            sortEmailDescData={sortEmailDescData}
            sortEmailAscData={sortEmailAscData}
            handleClickFifth={handleClickFifth}
            openFifth={openFifth}
            anchorElFifth={anchorElFifth}
            handleCloseFifth={handleCloseFifth}
            sortGender={sortGender}
            setSortGender={setSortGender}
            sortGenderDescData={sortGenderDescData}
            sortGenderAscData={sortGenderAscData}
            handleClickSix={handleClickSix}
            openSix={openSix}
            anchorElSix={anchorElSix}
            handleCloseSix={handleCloseSix}
            sortIP={sortIP}
            setSortIP={setSortIP}
            sortIPDescData={sortIPDescData}
            sortIPAscData={sortIPAscData}
          />
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
            defaultSort={defaultSort}
            setEmail={setEmail}
            setGender={setGender}
            setDel={setDel}
            setAdd={setAdd}
            setFirstName={setFirstName}
            setLastName={setLastName}
            setIp={setIp}
            setClose={setClose}
            setDefaultSort={setDefaultSort}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
            handleEditFirstName={handleEditFirstName}
            handleEditLastName={handleEditLastName}
            handleEditEmail={handleEditEmail}
            handleEditGender={handleEditGender}
            handleEditIp={handleEditIp}
            getDataDB={getDataDB}
          />
        </Table>
      </TableContainer>
    </Stack>
  );
}
