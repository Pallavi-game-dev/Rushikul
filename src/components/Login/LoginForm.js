import { TextField, Button, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';

// import React from 'react';
// import AccountCircle from '@mui/icons-material/AccountCircle';
function LoginFrom(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
   
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Validation
      const errors = {};
      if (!username.trim()) {
        errors.username = 'Username is required';
      }
      if (!password.trim()) {
        errors.password = 'Password is required';
      }
  
      if (Object.keys(errors).length === 0) {
        // No errors, perform login or submit form
        console.log('Username:', username);
        console.log('Password:', password);
      } else {
        // Update errors state
        setErrors(errors);
      }
    };
    return(
        
        <>
         <Grid container justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h5" align="center" gutterBottom>
            Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        label="Username"
                        variant="standard"
                        fullWidth
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={!!errors.username}
                        helperText={errors.username}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        label="Password"
                        variant="standard"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={!!errors.password}
                        helperText={errors.password}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Login
                    </Button>
                    </Grid>
                </Grid>
            </form>
      </Grid>
    </Grid>
       
            
        </>
    )
}
export default LoginFrom