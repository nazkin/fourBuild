import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import './styles/contactForm.css'

const ContactForm = () => {


    return(
        <Grid className="form-grid" item md={6}>
            <h1>REQUEST ESTIMATE</h1>
            <form>
                <TextField 
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                />
                <TextField 
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                />
                <TextField 
                    label="Phone"
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                />
                <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    color="secondary"
                    margin="normal"
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon= {<SendIcon />}
                >Submit</Button>
            </form>
        </Grid>

    )
}

export default ContactForm