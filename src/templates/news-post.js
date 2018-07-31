import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'

export const NewsPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="blogPage">
      <section className="hero is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <br/>
            <p className="subtitle has-text-weight-bold">{description}</p>
            <p>Published on x-x-x by: Author Name (with possible link to other posts)</p>
          </div>
        </div>
      </section>
      <section className="section">
        {helmet || ''}
        <div className="container content">
          <div className="columns">
            <div className="column">
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{ marginTop: `2rem` }}>
                <h3 id="relatedHeader">Related Content</h3>
                  <ul className="taglist">
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`} className="button is-outlined">{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                <ul>
                  <li><a href="/news">News</a></li>
                  <li class="is-active"><a href="#" aria-current="page">{title}</a></li>
                </ul>
              </nav>
            </div>
            <div className="column is-3">
              <div className="card">
                <header className="card-header">
                  <p className="card-header-title sidebar-title">Sidebar Content</p>
                </header>
                <div className="card-content">
                  <div className="content">
                    <p className="subtitle">This is your new favorite sidebar!</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                    </p>
                    <div class="control">
                      Email:
                      <input class="input" type="text" placeholder="you@your-website.com"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h2 className="title is-size-2 has-text-weight-bold is-bold-light">Comments</h2>
            <br/>
            <div id="disqus_thread"></div>            
          </div>
        </div>
      </section>
    </div>
  )
}

NewsPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
}

const NewsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <NewsPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | News`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
    />
  )
}

NewsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default NewsPost

export const newzQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
