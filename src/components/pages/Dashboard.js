import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../auth/ChangePassword";

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        console.log("Logout Clicked");
        navigate('/login')
    }
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item sm={4} sx={{ backgroundColor: 'grey', p: 5, color: 'white' }}>
                    <h1>Dashboard</h1>
                    <Typography variant="h5">Email: Bableshaazad@mail.com</Typography>
                    <Typography variant="h6">Name: Bablesh AAzad</Typography>
                    <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
                </Grid>
                <Grid item sm={8} sx={{ backgroundColor: '#90E3DE', p: 5 }}>
                    <ChangePassword />
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
