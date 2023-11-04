import React, { useState } from 'react';
import { Button, TextField, Box, Typography, Paper, InputAdornment, IconButton } from '@mui/material';
import { CheckCircleOutline } from '@mui/icons-material';

interface SignUpFormState {
    userName: string;
    password: string;
    confirmPassword: string;
}

export function SignUp() {
    // Initialize form state
    const [formData, setFormData] = useState<SignUpFormState>({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    })

    // Check if passwords match
    const passwordsMatch = formData.password && formData.password === formData.confirmPassword;

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    }

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        


        const newErrors = {
            username: '',
            password: '',
            confirmPassword: ''
        };

        if (!formData.userName.trim() || formData.userName.length > 20) {
            newErrors.username = 'Username should not be empty and should be below 20 characters.';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password should not be empty.';
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        
        // If no errors, make the backend call (not shown here)
        if (!newErrors.username && !newErrors.password && !newErrors.confirmPassword) {


        // TODO: Validate the form data before sending (like password match)

        // Send the form data to your backend
        // const response = await fetch('/api/signup', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(formData)
        // });
        // const data = await response.json();
        // Handle the response from your backend
        }
    }

    // Input adornment for password confirmation
    const passwordConfirmationAdornment = formData.confirmPassword && (
        <InputAdornment position="end">
            <IconButton>
                {passwordsMatch ? <CheckCircleOutline color="success" /> : null}
            </IconButton>
        </InputAdornment>
    );

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={3} style={{ padding: '2rem' }}>
                <Typography variant="h5" gutterBottom>
                    Sign Up
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            label="Username"
                            variant="outlined"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            error={!!errors.username}
                            helperText={errors.username}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            type="password"
                            label="Password"
                            variant="outlined"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                    </Box>
                    <Box marginBottom={2}>
                        <TextField
                            fullWidth
                            type="password"
                            label="Confirm Password"
                            variant="outlined"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: passwordConfirmationAdornment
                            }}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />
                    </Box>
                    <Button variant="contained" color="primary" type="submit">
                        Sign Up
                    </Button>
                </form>
            </Paper>
        </Box>
    );
}
