export default function IndexApiTable({ getDataDB }) {


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
    getDataDB();
    return data;
  };

  // API DELETE REQUEST
  const deleteData = async (rowToDelete: number | null) => {
    const response = await fetch(
      `http://localhost:4000/tableData/${rowToDelete}`,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();
    console.log(data);
    getDataDB();
    return data;
  };

  // PUT method changes string in object and delete another strings and return only changed string
  // PATCH method chages string in object and return whole object with changed string

  // API PATCH METHOD FIRST NAME
  const patchFirstName = async (
    first_name: string | null,
    id: number | null
  ) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ first_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB();
  };

  // API PATCH METHOD LAST NAME
  const patchLastName = async (last_name: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ last_name }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB();
  };

  // API PATCH METHOD EMAIL
  const patchEmail = async (email: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ email }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB();
  };

  // API PATCH METHOD GENDER
  const patchGender = async (gender: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ gender }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB();
  };
  // API PATCH METHOD IP
  const patchIp = async (ip_address: string | null, id: number | null) => {
    await fetch(`http://localhost:4000/tableData/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ ip_address }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
    getDataDB();
  };

  return {
    submitData,
    deleteData,
    patchFirstName,
    patchLastName,
    patchEmail,
    patchGender,
    patchIp,
  };
}
