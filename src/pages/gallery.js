import React from 'react';
import Layout from '../components/layout';
import PageTitle from '../components/pageTitle';
import Grid from '@material-ui/core/Grid';
import GridList from '../components/gridList';
import {tileData19, tileData20} from '../data';
import './styles/gallery.css';

const Gallery = () => {

    return(
        <Layout>
            <PageTitle title="Project Gallery" />
            <Grid container>
                <Grid className="grid-gallery" item md={6}>
                    <h1>Summer 2019 </h1>
                    <GridList tileData={tileData19}/>
                </Grid>
                <Grid className="grid-gallery" item md={6}>
                    <h1>Summer 2020 </h1>
                    <GridList tileData={tileData20}/>
                </Grid>
            </Grid>    
        </Layout>
    )
}

export default Gallery