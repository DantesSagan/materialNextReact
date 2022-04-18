import { Box, MenuItem, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function IndexSelect({ checked }) {
  const [countries, setCountries] = useState<string[]>([]);

  const [arrayCountry, setArrayCountry] = useState([]);

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch('/api/country');
      const data = await response.json();

      setArrayCountry(data);
      console.log(data);
    };
    fetchCountryData();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // in this case we check if type of "value" is a strict equal to string so use value that will be splitted by comma, if not just use value
    setCountries(typeof value === 'string' ? value.split(',') : value);
  };
  console.log(countries);

  return (
    <Stack alignItems='center'>
      <Typography variant='h1' gutterBottom>
        8 - Select component
      </Typography>
      <Typography variant='h2' gutterBottom>
        With using API
      </Typography>
      <Box width='250px'>
        <TextField
          style={{ color: checked ? 'black' : 'white' }}
          focused
          label='Select countries'
          select
          value={countries}
          onChange={handleChange}
          fullWidth
          SelectProps={{
            multiple: true,
          }}
          required
          helperText={'Please select your country'}
          error={!countries}
        >
          {/* <MenuItem value={posts.country}>{posts.country}</MenuItem> */}
          {Object.keys(arrayCountry).map((item) => {
            return (
              <MenuItem value={arrayCountry[item].country} key={item}>
                {arrayCountry[item].country}
              </MenuItem>
            );
          })}
        </TextField>
      </Box>
    </Stack>
  );
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/country');
//   const posts = await res.json();

//   return {
//     props: {
//       posts,
//     },

//     revalidate: 10, // In seconds
//   };
// }
