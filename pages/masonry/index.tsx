/* eslint-disable @next/next/no-img-element */
import { Expand, ExpandLess, ExpandMore } from '@mui/icons-material';
import { Masonry } from '@mui/lab';
import {
  Stack,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import useId from '@mui/material/utils/useId';
import Image from 'next/image';
import React, { useState } from 'react';

const heights = [
  150, 30, 90, 110, 80, 95, 12, 200, 20, 30, 40, 50, 60, 70, 80, 90,
];

interface ISomeComponentWithGenericsProps<T> {
  value: T;
  expanded: false;
}

export default function MasonryIndex<T>(
  props: ISomeComponentWithGenericsProps<T>
) {
  const [expanded, setExpanded] = useState<string | false>(props.expanded);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(props);

  //   const ID = useId();
  return (
    <Stack alignItems='center'>
      <Box sx={{ width: 600, minHeight: 600 }}>
        <Masonry columns={4} spacing={2}>
          {heights.map((height, index) => (
            <Paper
              key={index}
              sx={{
                // display: 'flex',
                // justifyContent: 'center',
                // alignItems: 'center',
                // height,
                border: '1px solid red',
              }}
            >
              <Accordion
                sx={{ minHeight: height }}
                expanded={expanded === `panel-${index}`}
                onChange={(_event, isExpanded) =>
                  handleChange(isExpanded, `panel-${index}`)
                }
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  id={`panel-${index}`}
                  aria-controls={`panel-${index}`}
                >
                  <Typography>Accordion {index + 1} </Typography>
                </AccordionSummary>

                <AccordionDetails>
                  Content
                  <img
                    style={{ height: '100px', width: '100px' }}
                    src={'https://source.unsplash.com/random'}
                    alt={`${index}-image`}
                  />
                </AccordionDetails>
              </Accordion>
            </Paper>
          ))}
        </Masonry>
      </Box>
    </Stack>
  );
}
