import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function BreadCrumbsindex() {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label='breadcrumb'
        separator={<NavigateNext fontSize='small' />}
        // display only relevant numbers of links at the same time
        maxItems={2}
        // display item after collapse button
        itemsAfterCollapse={2}
      >
        <Link underline='hover' href='/'>
          Home
        </Link>
        <Link underline='hover' href='/'>
          Music
        </Link>
        <Link underline='hover' href='/'>
          Music instruments
        </Link>
        <Link underline='hover' href='/'>
          Guitars
        </Link>
        <Link underline='hover' href='/'>
          Acustic guitars
        </Link>
      </Breadcrumbs>
    </Box>
  );
}
