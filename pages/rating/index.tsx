import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { Button, Rating, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function RatingIndex() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    async function getDataDB() {
      const response = await fetch('/api/rating');
      const data = await response.json();
      setArray(data);
      console.log(data);
    }
    getDataDB();
  }, []);

  const obj = Object.keys(array).map((item) => array[item].id);
  console.log(obj);

  //   const fetchData = Object.keys(array).map((item) => {
  //     return (
  //       <Stack
  //         key={item}
  //         spacing={2}
  //         direction='row'
  //         divider={<Divider orientation='horizontal' flexItem />}
  //       >
  //         id: {rating[item].id}
  //         {` `} - {` `} Score: {rating[item].score}
  //       </Stack>
  //     );
  //   });

  // console.log(array);
  //   const addRating = (score: number | null) => {
  //     return axios.post('/api/rating', { score });
  //   };

  // You can specify by default value which will be for example 3 or 5 instead of null
  const [value, setValue] = useState<number | null>(null);
  console.log({ value });

  // API POST REQUEST
  const submitRating = async (score: number) => {
    const response = await fetch('/api/rating', {
      method: 'POST',
      body: JSON.stringify({ score }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    async function getDataDB() {
      const response = await fetch('/api/rating');
      const data = await response.json();
      setArray(data);
      console.log(data);
    }
    // addRating(newValue);
    setValue(newValue);
    submitRating(newValue);
    getDataDB();
  };

  // API DELETE REQUEST COMMENT
  const deleteComment = async () => {
    const response = await fetch('/api/rating', {
      method: 'DELETE',
      body: JSON.stringify({ array }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    console.log(data);
  };

  console.log(array);

  return (
    <Stack spacing={2} alignItems='center'>
      {/* You can add to rating highlightSelectedOnly and will be displayed only one icon which was selected in rating score 
      if you seleceted three there is will be displayed only 3d Rating Icon
      */}
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size='large'
        icon={<Favorite fontSize='inherit' color='primary' />}
        emptyIcon={<FavoriteBorder fontSize='inherit' color='error' />}
      />
      <Button
        color='primary'
        onClick={() => {
          deleteComment();
          setValue(null);
          setArray((minus: []) => {
            return minus.slice(0, minus.length - 1);
          });
        }}
      >
        Clear rating
      </Button>
      {Object.keys(array).map((item) => {
        return (
          <ul key={item}>
            <li>
              {array[item].id} - {array[item].score}
            </li>
          </ul>
        );
      })}
    </Stack>
  );
}
// export async function getStaticProps() {
//   const response = await fetch('http://localhost:4000/rating');
//   const data = await response.json();

//   return {
//     props: {
//       rating: data,
//     },
//     revalidate: 5,
//   };
// }
