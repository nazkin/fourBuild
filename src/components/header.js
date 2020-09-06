import React, {useState} from 'react'
import { Link } from "gatsby"
import PropTypes from "prop-types"
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

import './styles/header.css'

const useStyles = makeStyles({
  drawer: {
    background: '#cdcdcd',
  
  },
  listItem: {
    color: '#1b5f00',
    fontWeight: "100"
  }
})

const Header = ({ siteTitle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dummyCategories = [{name: "Home", link: "/"}, {name: "Gallery", link: "/gallery"}, {name: "About", link: "/about"}, {name: "Contact", link: "/contact"}]
  const classes = useStyles();

  const drawerToggle = ()=>{
    setDrawerOpen(!drawerOpen);
  }
  const drawer = (
    <div>
      <List>
        {dummyCategories.map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <Link style={{textDecoration: "none", color: '#1b5f00'}} to={text.link}>
              <ListItemText primary={text.name} />
            </Link> 
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
      <Grid className="navGrid" container spacing={1}>
        <Grid className="navTop" item xs={12}>
          <Hidden mdUp>
            <IconButton onClick={drawerToggle}>
              <MenuIcon />
            </IconButton>
           
          </Hidden>
            <Hidden smDown>
              <span>Call Us<h3>(905)-xxx-xxxx</h3></span>  
            </Hidden>
                  
        </Grid>
        <Hidden smDown>
          <Grid className="navBottom" item xs={8}>
    
              <Link style={{textDecoration: "none"}} to="/">
               <h3 className="header-link">Home</h3>
              </Link>
              <Link style={{textDecoration: "none"}} to="/gallery">
                 <h3 className="header-link">Project Gallery</h3>
              </Link>
              <Link style={{textDecoration: "none"}} to="/about">
                <h3 className="header-link">About</h3>
              </Link>
              <Link style={{textDecoration: "none"}} to="/contact">
                <h3 className="header-link">Contact</h3>
              </Link>

          </Grid>
        </Hidden>
        <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          
              <Drawer
                className="menuDrawer"
                variant="temporary"
                anchor="top"
                open={drawerOpen}
                onClose={drawerToggle}
              >
                <IconButton onClick={drawerToggle}>
                  <CloseIcon/>
                </IconButton>
                {drawer}
              </Drawer>
            </Hidden>
            </nav>          
      </Grid>
  )
}

export default Header