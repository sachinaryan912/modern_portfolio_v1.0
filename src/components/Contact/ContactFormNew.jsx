import { Box, Grid, TextField } from '@mui/material'
import React from 'react'

function ContactFormNew() {
  return (
    <Box sx={{height:'40vh',width:'50vh'
    // ,backgroundColor:'white'
    }}>
        <Grid container>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
            <Grid item xs={6}>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </Grid>
        </Grid>
    </Box>
  )
}

export default ContactFormNew