import { NavigateNext } from '@mui/icons-material';
import { Breadcrumbs } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

import Link from 'next/link';
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
        <Link href='/'>Home</Link>
        <Link href='/'>Music</Link>
        <Link href='/'>Music instruments</Link>
        <Link href='/'>Guitars</Link>
        <Link href='/'>Acustic guitars</Link>
      </Breadcrumbs>
    </Box>
  );
}
