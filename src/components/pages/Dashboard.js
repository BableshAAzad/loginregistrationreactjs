import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    const handleLogout =()=>{
        console.log("Logout Clicked");
        navigate('/login')
    }
    return (
        <>
            <CssBaseline />
            <Grid container>
                <Grid item lg={4} sm={4} sx={{ backgroundColor: 'grey', p: 5, color: 'white' }}>
                    <Typography variant="h5">Email: Bableshaazad@mail.com</Typography>
                    <Typography variant="h6">Name: Bablesh AAzad</Typography>
                    <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt: 8}}>Logout</Button>
                </Grid>
                <Grid item lg={8} sm={8} sx={{backgroundColor: 'yellow'}}>
                    <h1>Bablesh AAzad</h1>
                </Grid>
            </Grid>
        </>
    );
};

export default Dashboard;
