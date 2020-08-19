import React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import Grid from '@material-ui/core/Grid';
import './styles/about.css'
const About = () => {


    return(
        <Layout>
            <PageTitle title="About 4Build Inc" icon="about"/>
            <Grid className="about-grid" container>
                <Grid className="about-grid-item" item md={4}>
                    <h1>Who ?</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        olorem ipsum quia dolor sit amet, consectetur, adipisci velit,sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                </Grid>
                <Grid className="about-grid-item" item md={4}>
                    <h1>Why ?</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        olorem ipsum quia dolor sit amet, consectetur, adipisci velit,sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                </Grid>
                <Grid className="about-grid-item" item md={4}>
                    <h1>Where ?</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                        sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                        olorem ipsum quia dolor sit amet, consectetur, adipisci velit,sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem.
                    </p>
                </Grid>
                <Grid className="about-grid-mission" item xs={12}>
                    <h1>Mission Statement</h1>
                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system,
                         and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                         No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.
                    </p>
                </Grid>
            </Grid>
        </Layout>
    )
}

export default About