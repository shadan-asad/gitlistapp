import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { IconButton, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color={'aliceblue'}>
            Designed by <Link href={'https://github.com/shadan-asad'} color={'inherit'} target={'_blank'}>Shadan</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
