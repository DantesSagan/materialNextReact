import { Favorite, Home, Person } from '@mui/icons-material';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import React, { useState } from 'react';

export default function BottomNavigationindex({ checked }) {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState(true);

  const changeColor = checked ? 'blue' : 'black';
  const bgColor = checked ? 'white' : 'black';
  const iconColor = checked ? 'black' : 'white';

  return (
    <BottomNavigation
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: 80,
        backgroundColor: bgColor,
      }}
      value={value}
      onChange={(_event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        label='home'
        sx={{ color: iconColor }}
        icon={<Home />}
      />
      <BottomNavigationAction
        sx={{ color: iconColor }}
        label='home'
        icon={<Favorite />}
      />
      <BottomNavigationAction
        sx={{ color: iconColor }}
        label='home'
        icon={<Person />}
      />
    </BottomNavigation>
  );
}
