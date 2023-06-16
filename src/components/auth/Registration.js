import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <Box component='form' noValidate sx={{ mt: 1 }} id='login-form' onSubmit={handleSubmit}>
                <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' autoFocus />
                <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
                <Box textAlign='center'>
                    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
                </Box>
                <NavLink to='/'>Forgot Password ?</NavLink>
                {error.status ? <Alert severity={error.type} sx={{ mt: 1 }}>{error.msg}</Alert> : ''}
            </Box>
        </>
    )
}

export default Registration
