import { Box, Stack, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState } from 'react';
import { Favorite } from '@mui/icons-material';

export default function TabsIndex() {
  const [value, setValue] = useState('1');

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Stack alignItems={'center'}>
      <Box>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, botderColor: 'divider', width: '350px' }}>
            <TabList
              aria-label='Tabs example'
              onChange={handleChange}
              textColor='secondary'
              indicatorColor='secondary'
              // centered for alignCenter of TabList
              // centered
              variant='scrollable'
              scrollButtons='auto'
            >
              <Tab
                label='Tab One'
                value='1'
                icon={<Favorite />}
                iconPosition='start'
              />
              <Tab label='Tab Two' value='2' disabled />
              <Tab label='Tab Three' value='3' />
              <Tab label='Tab Four' value='4' />
              <Tab label='Tab Five' value='5' />
              <Tab label='Tab Six' value='6' />
            </TabList>
          </Box>
          <TabPanel value='1'>Panel one</TabPanel>
          <TabPanel value='2'>Panel two</TabPanel>
          <TabPanel value='3'>Panel three</TabPanel>
          <TabPanel value='4'>Panel four</TabPanel>
          <TabPanel value='5'>Panel five </TabPanel>
          <TabPanel value='6'>Panel six</TabPanel>
        </TabContext>
      </Box>
    </Stack>
  );
}
