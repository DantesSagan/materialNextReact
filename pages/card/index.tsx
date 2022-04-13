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
import React from 'react';

export default function CardIndex() {
  return (
    <Stack alignItems='center'>
      <Box width='300px'>
        <Card>
          <CardMedia
            component='img'
            height='140'
            image='https://source.unsplash.com/random'
            alt='image'
          />

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
