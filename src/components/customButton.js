import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(27deg, rgba(60,105,17,1) 36%, rgba(79,76,76,1) 73%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(60,105,17, .3)',
    color: 'white',
    height: 68,
    width: 260,
    padding: '0 30px',
  },
});
const CustomButton = (props) => {
    const classes = useStyles();

    return(
        <Button className={classes.root}>
            {props.title}
        </Button>
    )
}

export default CustomButton