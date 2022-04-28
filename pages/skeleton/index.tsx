/* eslint-disable @next/next/no-img-element */
import { Skeleton, Stack, Box, Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export default function SkeletonComponentIndex() {
  const [loading, setLoading] = useState<boolean>(true);
  const [img, setImg] = useState<string>('https://source.unsplash.com/random');

  const [array, setArray] = useState(['1', '2', '3', '4', '5']);

  async function getData() {
    const response = await fetch(img)
      .then((data: any) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        return error;
      });

    return response;
  }

  console.log(array.map((item) => item));

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <Stack alignItems='center'>
      <Stack spacing={2} width='250px'>
        {/* animation === to false with no loading animation */}
        <Skeleton variant='text' animation={false} />
        <Skeleton variant='circular' width={40} height={40} />
        {/* in this case animation set it to wave */}
        <Skeleton
          variant='rectangular'
          width={250}
          height={250}
          animation='wave'
        />
      </Stack>{' '}
      {loading ? (
        <Stack>
          {array.map((item) => {
            return (
              <Typography variant='h2' key={item} sx={{ color: 'transparent' }}>
                <Skeleton
                  animation='wave'
                  variant='rectangular'
                  width={250}
                  className='rounded-lg mb-2'
                  key={item}
                >
                  {item}
                </Skeleton>
              </Typography>
            );
          })}
        </Stack>
      ) : (
        <Stack>
          {array.map((item) => {
            return (
              <Typography variant='h2' key={item}>
                {item}
              </Typography>
            );
          })}
        </Stack>
      )}
      <Stack spacing={2} width='250px'>
        <Box sx={{ width: '250px' }}>
          {loading ? (
            <Skeleton
              variant='rectangular'
              sx={{ width: '250px', height: '140px' }}
            />
          ) : (
            <img src={img} alt='skeleton' width='250px' height='140px' />
          )}
        </Box>
        <Stack
          direction='row'
          spacing={1}
          sx={{ width: '100%', marginTop: '12px' }}
        >
          {loading ? (
            <Skeleton
              variant='circular'
              width={40}
              height={40}
              animation='wave'
            />
          ) : (
            <Avatar>V</Avatar>
          )}
        </Stack>
        <Stack sx={{ width: '80%' }}>
          {loading ? (
            <>
              <Typography variant='body1'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
              <Typography variant='body2'>
                <Skeleton variant='text' width='100%' animation='wave' />
              </Typography>
            </>
          ) : (
            <>
              <Typography variant='body1'>React MUI Tutorial</Typography>
            </>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}
