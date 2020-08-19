import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import ServicesBtn from '../components/customButton'
import drivewayA from '../images/driveway.jpeg'
import drivewayB from '../images/driveway1.jpeg'
import drivewayC from '../images/driveway2.jpeg'
import drivewayD from '../images/driveway3.jpeg'

import '../pages/styles/index.css'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      padding: 10
    },
    gridList: {
      width: 400,
      height: 330,
      transform: 'translateZ(0)',
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const Services = () => {
    const classes = useStyles();
    const services = [
    {
        image: drivewayA,
        title: "Driveways"
    },
    {
        image: drivewayB,
        title: "Patios"
    },
    {
        image: drivewayC,
        title: "Stairs"
    },
    {
        image: drivewayD,
        title: "Pathways"
    }]

    return(
        <div className="services-main">
            
            <div className="services-title">
                <p>SERVICES</p>
            </div>
            
            <Grid className="service-grid" container>
                {
                    services.map(service => {
                        return <Grid className="service-grid-item" item sm={10} lg={3}>
                            <img className="service-image" src={service.image} alt="Service Image" />
                            <p className="service-name">{service.title}</p> 
                        </Grid>
                    })
                }
                
            </Grid>
          
            <ServicesBtn title="Read More" />
           
        </div>
    )
}

export default Services