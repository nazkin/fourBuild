import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import drivewayA from '../images/driveway.jpeg'
import drivewayB from '../images/driveway1.jpeg'
import drivewayC from '../images/driveway2.jpeg'
import drivewayD from '../images/driveway3.jpeg'
import '../pages/styles/index.css'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 800,
      height: 730,
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
            <GridList cols={2} spacing={60} cellHeight={250} className={classes.gridList}>
                {
                    services.map(service => {
                        return <GridListTile imgFullHeight={true} imgFullWidth={true}>
                            <img src={service.image} alt="Service Description Link"/>
                            <GridListTileBar title={service.title} />
                        </GridListTile>
                    })
                }
            </GridList>  
        </div>
    )
}

export default Services