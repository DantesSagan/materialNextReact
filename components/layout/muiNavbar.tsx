import {
  AppBar,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';

import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import React, { useState } from 'react';

export default function NavbarIndexTop({ checked, setChecked }) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const [anchorElTwo, setAnchorElTwo] = useState<null | HTMLElement>(null);
  const openTwo = Boolean(anchorElTwo);

  const [anchorElThree, setAnchorElThree] = useState<null | HTMLElement>(null);
  const openThree = Boolean(anchorElThree);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickTwo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElTwo(event.currentTarget);
  };
  const handleCloseTwo = () => {
    setAnchorElTwo(null);
  };

  const handleClickThree = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElThree(event.currentTarget);
  };
  const handleCloseThree = () => {
    setAnchorElThree(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const navBgColor = checked ? 'white' : 'black';
  const navTextColor = checked ? 'black' : 'white';
  return (
    <AppBar
      position='static'
      style={{
        marginBottom: '50px',
        backgroundColor: navBgColor,
        color: navTextColor,
        border: '1px solid',
        borderColor: navTextColor,
      }}
    >
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h3' component='div' sx={{ flexGrow: 1 }}>
          PokemonApp
        </Typography>
        <Button
          variant='contained'
          component='button'
          style={{
            backgroundColor: navBgColor,
            color: navTextColor,
          }}
          onClick={() => setChecked(!checked)}
        >
          {checked ? 'White' : 'Black'}
        </Button>

        <Stack direction='row' spacing={2}>
          <Button
            variant='contained'
            style={{
              backgroundColor: navBgColor,
              color: navTextColor,
            }}
            component='button'
          >
            <Link
              href='/'
              style={{
                backgroundColor: navBgColor,
                color: navTextColor,
              }}
            >
              Home
            </Link>
          </Button>

          <Button
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Interactive section
          </Button>

          <Button
            color='inherit'
            id='resources-buttonTwo'
            onClick={handleClickTwo}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openTwo ? 'resources-menuTwo' : undefined}
            aria-haspopup='true'
            aria-expanded={openTwo ? 'true' : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Inputs section
          </Button>

          <Button
            color='inherit'
            id='resources-buttonThree'
            onClick={handleClickThree}
            // in this case if boolen (open) is true so handle it with resources-menu if no set it to undefined
            aria-controls={openThree ? 'resources-menuThree' : undefined}
            aria-haspopup='true'
            aria-expanded={openThree ? 'true' : undefined}
            endIcon={<KeyboardArrowDown />}
          >
            Layout section
          </Button>
        </Stack>

        <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleClose}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/typography'>
                Link to typography
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/muibuttons'>
                Link to button
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/groupbuttons'>
                Link to Group buttons
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/togglebutton'>
                Link to Toggle-button
              </Link>
            </Typography>
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorElTwo}
          open={openTwo}
          MenuListProps={{
            'aria-labelledby': 'resources-buttonTwo',
          }}
          onClose={handleCloseTwo}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/textfield'>
                Link to Text-field
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/select'>
                Link to Select
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/radiobutton'>
                Link to RadioButton
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/checkbox'>
                Link to Checkbox
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/rating'>
                Link to Rating
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/autocomplete'>
                Link to Autocomplete
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseTwo}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/calculator'>
                Link to Calculator
              </Link>
            </Typography>
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorElThree}
          open={openThree}
          MenuListProps={{
            'aria-labelledby': 'resources-buttonThree',
          }}
          onClose={handleCloseThree}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={handleCloseThree}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/box'>
                Link to Box and Grid
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseThree}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/accordion'>
                Link to Accordion
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseThree}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/card'>
                Link to Card
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseThree}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/imagelist'>
                Link to ImageList
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleCloseThree}>
            <Typography variant='h6'>
              <Link color='secondary' underline='none' href='/navbar'>
                Link to Navbar
              </Link>
            </Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
