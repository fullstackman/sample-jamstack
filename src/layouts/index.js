import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
	<Helmet>
	    <title>Mangu | A GatsbyJS+Netlify Demo Site</title>
		<meta name="description" content="Mangu is this beautiful demo web site."/>
		<meta name="keywords" content="demo, gatsbyjs, netlify"/>
	    /*💽 aagama music is an independent record label that is empowering artists to create and share music in a way that empowers fans and other artists to participate in the independent music revolution! ✊*/
		/*Yuey, yueyonthebeat, aagama, aagamamusic, agm records, independent record label, free beats, creative commons music*/
		<meta name="theme-color" content="#ff4400"/>
		<meta name="twitter:card" content="Mangu is this beautiful demo web site." />
		<meta name="twitter:site" content="@yueyonthebeat" />
		<meta name="twitter:creator" content="@yueyonthebeat" />
		<meta property="og:url" content="https://mangu.netlify.com/" />
		<meta property="og:title" content="aagama music | independent record label" />
		<meta property="og:description" content="Mangu is this beautiful demo web site." />
		<meta property="og:image" content="https://mangu.netlify.com/icon.png" />
		<link rel="manifest" href="site.webmanifest"/>
		/* Place favicon.ico in the root directory*/
		<link rel="apple-touch-icon" href="icon.png"/>
	</Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
