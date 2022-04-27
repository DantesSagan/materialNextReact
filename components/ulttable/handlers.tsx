export default function HandlersTable({
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
  snackArray,
  setOpenSnack
}) {
  const handleEditFirstName = (
    rowToEdit: string | null,
    rowFirstName: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      return rowFirstName === table[item].first_name
        ? patchFirstName((table[item].first_name = rowToEdit), rowID)
        : console.log('error');
    });
  };

  const handleEditLastName = (
    rowToEdit: string | null,
    rowLastName: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      rowLastName === table[item].last_name
        ? patchLastName((table[item].last_name = rowToEdit), rowID)
        : console.log('error');
    });
  };

  const handleEditEmail = (
    rowToEdit: string | null,
    rowEmail: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      rowEmail === table[item].email
        ? patchEmail((table[item].email = rowToEdit), rowID)
        : null;
    });
  };

  const handleEditGender = (
    rowToEdit: string | null,
    rowGender: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      rowGender === table[item].gender
        ? patchGender((table[item].gender = rowToEdit), rowID)
        : null;
    });
  };
  const handleEditIp = (
    rowToEdit: string | null,
    rowIp: string | null,
    rowID: number | null
  ) => {
    setClose(!close);
    return Object.keys(table).map((item) => {
      rowIp === table[item].ip_address
        ? patchIp((table[item].ip_address = rowToEdit), rowID)
        : null;
    });
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
    snackArray.push(newData);
    setOpenSnack(true);
    submitData(newData);
    table.push(newData);
  };

  const handleDelete = (rowToDelete: number) => {
    // const index = table.findIndex((itemID) => {
    //   return itemID.id === rowToDelete;
    // });
    // console.log(index);

    setTable((data: any[]) =>
      data.filter((rowID) => {
        rowID.id !== rowToDelete;
      })
    );

    deleteData(rowToDelete);
  };
  return {
    handleEditFirstName,
    handleEditLastName,
    handleEditEmail,
    handleEditGender,
    handleEditIp,
    handleDelete,
    handleAdd,
  };
}
