import { Stack, Typography } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@mui/lab';
import { Favorite } from '@mui/icons-material';

export default function TimeLineIndex() {
  return (
    <div>
      <Stack alignItems='center'>
        <p>1</p>
        <span
          style={{
            borderLeft: '1px solid black',
            height: '35px',
          }}
        />
        <p>2</p>
        <span
          style={{
            borderLeft: '1px solid black',
            height: '35px',
          }}
        />
        <p className='gridTimeLine'>
          <Favorite />
          <div>3(2)</div>
        </p>
      </Stack>
      {/* Begin  */}
      <Typography variant='h3'>Train stamps</Typography>
      {/* TIMELINE */}
      <Timeline position='alternate'>
        {/* FIRST CITY */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            10:30
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>City A</TimelineContent>
        </TimelineItem>
        {/* SECOND CITY */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            11:30
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
            <TimelineConnector />
          </TimelineSeparator>

          <TimelineContent>City B</TimelineContent>
        </TimelineItem>
        {/* THIRD CITY */}
        <TimelineItem>
          <TimelineOppositeContent color='text.secondary'>
            12:30
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='secondary' variant='outlined' />
          </TimelineSeparator>

          <TimelineContent>City C</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
