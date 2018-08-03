import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import Disqus from 'disqus-react'
import config from '../utils/siteConfig'

export const NewsPostTemplate = ({
  author,
  content,
  contentComponent,
  date,
  description,
  id,
  tags,
  title,
}) => {
  const PostContent = contentComponent || Content;
  author.authorName = author.authorName || 'Unknown Author';
  author.handle = author.handle || '';
  let pageUrl = `https://mangu.netlify.com/news/${title.replace(/\s/g, "-").toLowerCase()}/`
  config.schemaObject.push(
    {
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    url: 'https://mangu.netlify.com',
    name: title,
    alternateName: config.siteTitleAlt,
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@id': config.siteUrl,
            name: config.siteTitle,
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@id': pageUrl,
            name: title,
          },
        },
      ],
    },
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      url: pageUrl,
      name: title,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: config.shareImage /*or post defined image*/,
        width: config.shareImageWidth,
        height: config.shareImageHeight,
      },
      author: {
        '@type': 'Person',
        name: author.authorName,
        url: author.handle || config.siteUrl,
      },
      publisher: {
        '@type': 'Organization',
        name: config.publisher,
        url: config.siteUrl,
      },
      datePublished: date,
      mainEntityOfPage: pageUrl,
    }
  )
  const disqusShortname = 'mangu';
  const disqusConfig = {
      url: `https://mangu.netlify.com/news/${title}/`,
      identifier: `news-${id}`,
      title: title,
  };

  return (
    <div className="blogPage">
      <section className="hero is-light is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>
              <span>by:&nbsp;
                <a href={`https://twitter.com/${author.handle || ''}`} target="_blank" rel="noopener">
                  {author.authorName}
                </a>
              <br/>
              {date}
              </span>
            </p>
            <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
              Comments
            </Disqus.CommentCount>
          </div>
        </div>
      </section>
      <section className="section">
        <Helmet>
          <title>{`${title} | Mangu`}</title>
          <meta name="description" content={description}/>
          <meta name="keywords" content={tags}/>
          <meta name="twitter:card" content={description} />
          <meta name="twitter:site" content="@fullstackman" />
          <meta name="twitter:creator" content="@fullstackman" />
          <meta property="og:url" content={pageUrl} />
          <meta property="og:title" content={`${title} | Mangu`} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content="https://mangu.netlify.com/img/logo.png" />
          {/* Schema.org tags */}
          <script type="application/ld+json">
            {JSON.stringify(config.schemaObject)}
          </script>
        </Helmet>
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
              <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                <ul>
                  <li><a href="/news">News</a></li>
                  <li className="is-active"><a href="#" aria-current="page">{title}</a></li>
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
                    <div className="control">
                      Email:
                      <input className="input" type="text" placeholder="you@your-website.com"/>
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
            <div>
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
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
      author={post.frontmatter.author}
      content={post.html}
      contentComponent={HTMLContent}
      date={post.frontmatter.date}
      description={post.frontmatter.description}
      id={post.id}
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
        author{
          authorName
          handle
        }
      }
    }
  }
`
