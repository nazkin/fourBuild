import React from 'react'
import {Grid } from '@material-ui/core'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import ContactForm from '../components/contactForm'

const Contact = () => {


    return(
        <Layout>
            <PageTitle title="Contact Us Now" icon="contact"/>
            <Grid container>
                <ContactForm /> 
            </Grid>    
        </Layout>
    )
}

export default Contact