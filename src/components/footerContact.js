import React from 'react'
import './styles/footer.css'
import { Grid } from '@material-ui/core'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone'
import EmailIcon from '@material-ui/icons/Email';

const ContactFooter = () => {



    return (
        <div className="footer-contact">
            <Grid container>
                
                <Grid className="footer-contact-gridItem" item md={6}>
                    
                        <span><LocalPhoneIcon fontSize="large" /></span>
                        <h3>CALL US !</h3>
                  
                    <p>Tel: 415-332-3324</p>
                </Grid>
                <Grid className="footer-contact-gridItem" item md={6}>
                    
                        <span><EmailIcon fontSize="large" /></span>
                        <h3> EMAIL US !</h3>
                  
                    <p>estimating@texasconcretellc.com</p>
                </Grid>
            </Grid>
        </div>
    )
}
export default ContactFooter