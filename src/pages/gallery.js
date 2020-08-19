import React from 'react'
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import testPhoto from '../images/gallery.jpeg';
import './styles/gallery.css'
const Gallery = () => {
const projectFiles = ["File1", "File1", "File1", "File1","File1","File1","File1","File1"]

    return(
        <Layout>
            <PageTitle title="Project Gallery" />
            <Grid className="projects-grid" container>
                {
                    projectFiles.map(file=> {

                        return  <Grid className="project-grid-item" item sm={5} lg={3}>
                                    <img className="projectPhoto" src={testPhoto} alt="project photo" />
                                </Grid>
                    })
                
                }
            </Grid>
        </Layout>
    )
}

export default Gallery