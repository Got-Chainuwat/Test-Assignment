import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Contents from './Contents';
import Card from './Card'

// const Img = 'components/'

const Navbar = styled(Paper)(({ theme }) => ({
    backgroundColor: '#134B8A',
    height: '60px',
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: '#134B8A',
    borderRadius: '0px',
    boxSshadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
    color: theme.palette.text.secondary,
  }));

const Side = styled(Paper)(() => ({
    position: 'absolute',
    height: '1456px',
    width: '90px',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '0%',
    background: '#FFFFFF',
    boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.25)',
    borderRadius: '0px 50px 50px 0px',
    marginRight: '20px'
  }));

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Navbar></Navbar>
            <Side>
              {/* <img src={Img/}/> */}
            </Side>
            <Contents/>
            <Card/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout