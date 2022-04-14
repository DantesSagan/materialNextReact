/* eslint-disable react-hooks/exhaustive-deps */
import {
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

export default function CardIndex() {
  const [turn, setTurn] = useState(true);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState<string | null>(
    'https://source.unsplash.com/random'
  );
  const [array, setArray] = useState<[] | null>([]);

  const convert: any | [] = array;

  const ref = useRef(null);

  async function getData() {
    const response = await fetch(image)
      .then((data: any) => {
        // console.log(data);
        setArray(data.url);
        setLoading(false);
      })
      .catch((error) => {
        return error;
      });

    return response;
  }
  // console.log(array);

  useEffect(() => {
    getData();
  }, []);

  // set to start setInterval to display random generated image and after 5 seconds will be refresh to new image
  const startInterval = () => {
    setTurn(false);
    ref.current = setInterval(() => {
      getData();
      console.log('Та-да!');
    }, 5000);
  };
  // clear interval of images to stop 
  const clearInt = () => {
    console.log('ClearInterval clicked');
    clearInterval(ref.current);
  };

  return (
    <Stack alignItems='center'>
      <Box width='300px'>
        <Card>
          {loading ? (
            <Typography variant='body1'>Loading...</Typography>
          ) : (
            <div>
              {turn ? (
                <CardMedia
                  component='img'
                  height='140'
                  image={image}
                  alt='image'
                />
              ) : (
                <CardMedia
                  component='img'
                  height='140'
                  image={convert}
                  alt='image'
                />
              )}
            </div>
          )}

          <Button ref={ref} onClick={startInterval}>
            Refetch
          </Button>
          <Button ref={ref} onClick={clearInt}>
            Clear
          </Button>

          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              React, some text,React, some text,React, some text,React, some
              text
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' color='primary'>
              Share
            </Button>
            <Button size='small' color='secondary'>
              More
            </Button>
            <Button size='small' color='error'>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  );
}
