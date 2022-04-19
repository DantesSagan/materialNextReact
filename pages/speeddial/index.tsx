import { CopyAllOutlined, Edit, Print, Share } from '@mui/icons-material';
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material';

import React from 'react';

export default function SpeedDialIndex({ checked }) {
  return (
    <SpeedDial
      ariaLabel='Navigation speed dial'
      sx={{ position: 'absolute', bottom: 16, right: 16 }}
      //   you can added openIcon which is transform from SpeedDial icon to Edit Icon
      icon={<SpeedDialIcon openIcon={<Edit />} />}
    >
      {/* you can specify with propery tooltipOpen */}
      <SpeedDialAction icon={<CopyAllOutlined />} tooltipTitle='Copy' />
      <SpeedDialAction icon={<Print />} tooltipTitle='Print' />
      <SpeedDialAction icon={<Share />} tooltipTitle='Share' />
    </SpeedDial>
  );
}
