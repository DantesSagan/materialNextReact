import { Mail } from '@mui/icons-material';
import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Stack,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from '@mui/material';
import React from 'react';

export default function ListIndex({ checked }) {
  const bgColor = checked ? 'red' : 'gray';
  const text = checked ? 'black' : 'white';
  return (
    <Stack alignItems='center'>
      <Box sx={{ width: '400px', bgcolor: bgColor, borderRadius: '15px' }}>
        <List>
          {/* 1 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                secondaryTypographyProps={{
                  sx: {
                    color: text,
                  },
                }}
                primary='List item 1'
                secondary='Secondary text 1'
              />
            </ListItemButton>
          </ListItem>
          <Divider />
          {/* 2 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                secondaryTypographyProps={{
                  sx: {
                    color: text,
                  },
                }}
                primary='List item 2'
                secondary='Secondary text 2'
              />
            </ListItemButton>
          </ListItem>{' '}
          <Divider />
          {/* 3 */}
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <Mail />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                secondaryTypographyProps={{
                  sx: {
                    color: text,
                  },
                }}
                primary='List item 3'
                secondary='Secondary text 3'
              />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Stack>
  );
}
