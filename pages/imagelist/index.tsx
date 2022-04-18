/* eslint-disable @next/next/no-img-element */
import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
} from '@mui/material';
import React, { useState } from 'react';

export default function ImageIndex() {
 
  return (
    <Stack spacing={4} alignItems='center'>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <ImageList
        variant='woven'
        sx={{ width: 500, height: 450 }}
        cols={3}
        gap={8}
      >
        {itemData.map((item) => {
          return (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h164&fit=crop&auto=format&dpr=2`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
        {' '}
        <ImageList
          variant='woven'
          sx={{ width: 500, height: 450 }}
          cols={3}
          gap={8}
        >
          {itemData.map((item) => {
            return (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`}
                  alt={item.title}
                  loading='lazy'
                />
                <ImageListItemBar title={item.title} />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </Stack>
  );
}
const itemData = [
  {
    img: 'https://source.unsplash.com/random',
    title: 'random1',
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random2',
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random3',
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random4',
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random5',
  },
  {
    img: 'https://source.unsplash.com/random',
    title: 'random6',
  },
];
