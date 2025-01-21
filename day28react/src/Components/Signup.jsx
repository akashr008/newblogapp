import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <div style={{margin:'0 auto',borderRadius:'8px',backgroundColor:'white',boxShadow:'0 0px 2px ',width:'300px',padding:'20px'}}>
        <Grid container spacing={2}>
  <Grid size={{ xs: 12, md: 12 }}>
 <TextField fullWidth label='Username'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <TextField fullWidth label='Email'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <TextField fullWidth label='Number'></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <TextField fullWidth label='Address' multiline rows={4}></TextField>
  </Grid>
  <Grid size={{ xs: 12, md: 12 }}>
   <TextField fullWidth label='Password'></TextField>
  </Grid>
  <Button color='blue' variant='contained'>Signup</Button>
  <Grid>
    <Link to={'/'}>Already registered? Login here</Link>
  </Grid>
</Grid>
    </div>
  )
}

export default Signup