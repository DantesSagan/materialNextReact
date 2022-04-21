import { Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useSWR from 'swr';

async function fetcher(...args) {
  return await fetch(...args).then((response) => response.json());
}

function Page({ limit, pageIndex }) {
  const { data, error } = useSWR(
    `https://jsonplaceholder.typicode.com/todos?_page=${pageIndex}&_limit=${limit}`,
    fetcher
  );

  if (error) {
    return (
      <Typography variant='h1' component='div'>
        Error
      </Typography>
    );
  }
  if (!data) {
    return (
      <Typography variant='h1' component='div'>
        Loading...
      </Typography>
    );
  }

  return data.map((item) => (
    <Stack spacing={2} key={item.id}>
      <Typography variant='h6' component='div'>
        {item.id} - {item.title}
      </Typography>
    </Stack>
  ));
}

export default function Test() {
  
  const [pageIndex, setPageIndex] = useState(1);
  const [limit, setLimit] = useState(1);

  return (
    <Stack spacing={2} direction='column'>
      <Page pageIndex={pageIndex} limit={limit} />
      <TextField value={limit} onChange={(e) => setLimit(e.target.value)} />
      <Button onClick={(e) => setLimit(e.target.value)}>Update</Button>
      <button
        disabled={pageIndex === 1}
        onClick={() => setPageIndex(pageIndex - 1)}
      >
        Previous
      </button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
    </Stack>
  );
}
