import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: 'tan',
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export default function TopBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{ alignContent: 'center', justifyContent: 'center', flexGrow: 1, alignSelf: 'flex-end' }}
          >
            Smash? or SMASH!
          </Typography>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}