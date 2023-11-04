import React, {useState} from 'react'
import { Button, TextField, Box, Typography, Paper} from '@mui/material';
import { Link } from 'react-router-dom';


interface SignUpFormState {
    userName: string;
    password: string;
}




export function Login() {

    const [formData, setFormData] = useState<SignUpFormState> ({
        userName: '',
        password: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} =e.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} style={{ padding: '2rem' }}>
                <Typography variant="h5" gutterBottom>
                    Login
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            name="userName"
                            label="Username"
                            variant="outlined"
                            onChange={handleChange}
                            value={formData.userName}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            name="password"
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                    <Box marginTop={2}>
                        <Typography variant="body2">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </Typography>
                    </Box>
                </form>
            </Paper>
        </Box>
    );
}