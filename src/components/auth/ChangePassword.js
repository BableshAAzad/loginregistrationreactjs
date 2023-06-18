import { Alert, Box, Button, TextField } from "@mui/material"
import { useState } from "react"


const ChangePassword = () => {
    const [error, setError] = useState({status: false, msg: "",});
    const handleSubmit = (event) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const actualData = {
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation')
        }
    }
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxWidth: '600', mx: '4' }}>
                <h1>Change Password</h1>
                <Box component="from" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
                    <TextField margin="narmal" required fullWidth name="password" label='New Password' type="password" id="password" />
                    <TextField margin="narmal" required fullWidth name="password_confirmation" label='Confirm New Password' type="password" id="password_confirmation" />
                    <Box alignItems='center'>
                        <Button type='submit' variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Update</Button>
                    </Box>
                    <error.status ? <Alert severity={error.type}>{error.msg}</Alert> : "" />
                </Box>
            </Box>
        </>
    )
}

export default ChangePassword
