import { Favorite, Home, Person } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

export default function BottomNavigationindex({ checked }) {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(true);

  const changeColor = checked ? 'blue' : 'black';

  return (
    <BottomNavigation
      sx={{ width: '100%', position: 'fixed', bottom: 80 }}
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label='home'
        icon={<Home sx={{ color: changeColor }} />}
      />
      <BottomNavigationAction label='home' icon={<Favorite />} />
      <BottomNavigationAction label='home' icon={<Person />} />
    </BottomNavigation>
  );
}
