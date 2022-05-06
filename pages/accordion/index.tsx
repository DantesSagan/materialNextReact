import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Stack,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import React, { useState } from 'react';

interface ISomeComponentWithGenericsProps<T> {
  value: T;
  hide: boolean;
  expanded: false;
}

function AccordionIndex<T>(props: ISomeComponentWithGenericsProps<T>) {
  const [hide, setHide] = useState(props.hide);
  const [expanded, setExpanded] = useState<string | false>(props.expanded);

  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(props);
  return (
    <Stack spacing={4} display='inline-block'>
      {/* Just css and html with some js */}
      {!hide ? (
        <div
          onClick={() => setHide(!hide)}
          style={{
            color: 'white',
            backgroundColor: 'black',
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'all',
            transitionDuration: '300ms',
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
          }}
        >
          Accordion 1<ExpandMore className='spinnerFirst' />
        </div>
      ) : (
        <div
          onClick={() => setHide(!hide)}
          style={{
            color: 'black',
            backgroundColor: 'white',
            display: 'inline-block',
            cursor: 'pointer',
            transition: 'all',
            transitionDuration: '300ms',
            borderBottom: '1px solid black',
            borderRight: '1px solid gray',
            borderLeft: '1px solid gray',
          }}
        >
          {' '}
          Accordion 1
          <ExpandMore className='spinner' />
          <br />
          <Typography variant='body1' style={{ padding: '15px' }}>
            Loreinpusulsdkjflaksjgpoiebjryi0bu0io
          </Typography>
        </div>
      )}
      
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel1')}
      >
        <AccordionSummary
          id='panel1-header'
          area-controls='panel1-content'
          expandIcon={<ExpandMore />}
        >
          {' '}
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Loreinpusulsdkjflaksjgpoiebjryi0bu0io</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel2')}
      >
        <AccordionSummary
          id='panel2-header'
          area-controls='panel2-content'
          expandIcon={<ExpandMore />}
        >
          {' '}
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Loreinpusulsdkjflaksjgpoiebjryi0bu0io</Typography>
        </AccordionDetails>
      </Accordion>{' '}
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={(_event, isExpanded) => handleChange(isExpanded, 'panel3')}
      >
        <AccordionSummary
          id='panel3-header'
          area-controls='panel3-content'
          expandIcon={<ExpandMore />}
        >
          {' '}
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Loreinpusulsdkjflaksjgpoiebjryi0bu0io</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
export default React.memo(AccordionIndex) as typeof AccordionIndex;
