import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Testimonials from '../components/Testimonials'
import Hero from '../components/Hero'
import Services from '../components/services'
import './styles/index.css'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Services />
    <div className="testimonials">
      <Testimonials />
    </div>
  </Layout>
)

export default IndexPage
