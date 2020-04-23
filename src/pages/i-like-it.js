import React from 'react'

import {
  Layout,
  SEO,
  Grid,
  ColContent,
  ColExtra,
  ColSidebar,
  ExternalList,
  Header
} from '../components'

function MyDeskPage({ location }) {
  return (
    <Layout>
      <SEO title="Home" />

      {/* HERO */}
      <section id="section-hero">
        <div className="container">
          <Grid>
            <ColSidebar>
              <Header pathname={location.pathname} />
            </ColSidebar>
            <ColContent>deneme</ColContent>

            <ColExtra>
              <ExternalList
                urls={[
                  { name: 'VSCO', url: 'https://vsco.co/adem/gallery' },
                  { name: 'Instagram', url: 'https://instagram.com/ademilter' }
                ]}
              />
            </ColExtra>
          </Grid>
        </div>
      </section>

      {/* - */}
      <section id="section-last-photo">
        <div className="container">
          <Grid>
            <ColSidebar title="dsdsa" />
            <ColContent>deneme</ColContent>
          </Grid>
        </div>
      </section>
    </Layout>
  )
}

export default MyDeskPage
