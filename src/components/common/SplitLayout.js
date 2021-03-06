import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const SplitLayoutWrapper = styled.section`
  ${p => p.theme.spacing.sectionBottom};

  & article:first-of-type {
    margin-top: 15px;
  }

  display: grid;
  grid-template-columns: minmax(750px, 1fr) 1fr;
  grid-column-gap: 30px;
  grid-template-areas: 'post side';

  .layout__content {
    grid-area: post;
  }
  .layout__aside {
    grid-area: side;
  }

  @media ${props => props.theme.media.fablet} {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 30px;
    grid-template-areas:
      'post post'
      'side side';
  }

  .sticky__aside {
    position: sticky;
    top: 100px;
  }
`

const SplitLayout = ({ content, aside }) => (
  <SplitLayoutWrapper>
    {content && <section className="layout__content">{content}</section>}
    {aside && (
      <section className="layout__aside">
        <aside className="sticky__aside">{aside}</aside>
      </section>
    )}
  </SplitLayoutWrapper>
)

SplitLayout.propTypes = {
  content: PropTypes.node.isRequired,
  aside: PropTypes.node.isRequired,
}

export default SplitLayout
