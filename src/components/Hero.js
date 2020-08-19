import React from 'react'
import '../pages/styles/index.css'
import Button from '@material-ui/core/Button';

const Hero = () => {

    return(
        <div className="hero">
            <div className="hero-text">
                <h1 className="hero-title">DRIVEWAY & PATIO SERVICES</h1>
                <h2>Servicing Customers in the GTA</h2>
                <h3>Toronto | Etobicoke | Mississauga | Oakville | Milton | Vaughan</h3>
                <Button variant="contained" color="secondary">Receive a Free Estimate Now</Button>
            </div>
            
        </div>
    )
}
export default Hero