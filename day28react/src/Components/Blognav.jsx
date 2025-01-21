import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Blognav = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BLOG APP
          </Typography>
       <Link to={'/blog'}><Button color="inherit">Home</Button></Link>
       <Link to={'/addblogs'}><Button color="inherit">ADD BLOG</Button></Link>
       <Link to={'/'}><Button color="inherit">LogOut</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Blognav