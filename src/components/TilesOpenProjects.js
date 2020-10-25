import React, { Component } from 'react'
import TileOpenProject from './TileOpenProject'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import {Grid, Row, Col} from 'react-bootstrap'

class TilesOpenProjects extends Component {

  render() {


    if (this.props.feedQuery && this.props.feedQuery.loading) {
      return <div>Loading</div>
    }

    // 2
    if (this.props.feedQuery && this.props.feedQuery.error) {
      return <div>Error</div>
    }

    // 3
    // const linksToRender = this.props.feedQuery.feed.links
    const linksToRender = this.props.feedQuery.openProjects

    return (
  <div>
  kjsadkjshdkjsah
  <Grid>
  <Row className="show-grid">

    {linksToRender.map((openProject, index) => (
        <Col xs={6} md={4}>
      <TileOpenProject key={openProject.id}  index={index} openProject={openProject}/>
       </Col>
      // <Link key={link.id} index={index} link={link} />
    ))}
    </Row>
  </Grid>

  </div>
)
}}

const FEED_QUERY = gql`
  # 2
  query FeedQuery {
    openProjects {
      title
      id
      payments{
        sender{id}
      }
      imageUrl

    }
  }
`
export default graphql(FEED_QUERY, { name: 'feedQuery' }) (TilesOpenProjects)
