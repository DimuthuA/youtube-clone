import React from 'react';
import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';

import { logo } from '../utils/constants.js';
import { SearchBar } from './index.js';

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      p={2}
      position="sticky"
      backgroundColor="#000"
      sx={{top: 0}}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="Logo" height={45}/>
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar;