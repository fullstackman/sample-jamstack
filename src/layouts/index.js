import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'

import Navbar from '../components/Navbar'
import './all.sass'

const brandName="Mangu";
const thisYear=(new Date()).getFullYear();

export default class Template extends React.Component {
  constructor(props) {
    super(props);

    // current state of the pages the user has visited in this session
    this.state = {
      userJourney: props.location.pathname,
    }

    // event listener to update the userJourney variable
    this.props.history.listen((location, action) => {
      //console.log(`${location.pathname} -- Route change is happening!`);
      this.setState((prevState) => {
        // Important: read `prevState` instead of `this.state` when updating.
        return {userJourney: `${prevState.userJourney} --> ${location.pathname}`}
      });
    });
  }
  render() {
    let zPath = this.state.userJourney;
    return(
    <div>
      <Helmet>
        <title>{brandName} | A GatsbyJS+Netlify Demo Site</title>
        <meta name="description" content="Mangu is this beautiful demo web site."/>
        <meta name="keywords" content="demo, gatsbyjs, netlify"/>
        <meta name="image" content="https://mangu.netlify.com/img/logo.png" />
          {/*💽 aagama music is an independent record label that is empowering artists to create and share music in a way that empowers fans and other artists to participate in the independent music revolution! ✊*/}
        {/*Yuey, yueyonthebeat, aagama, aagamamusic, agm records, independent record label, free beats, creative commons music*/}
        {/* Schema.org tags */}
            <script type="application/ld+json">
              {JSON.stringify(config.schemaObject)}
            </script>
        <meta name="theme-color" content="#ff4400"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@fullstackman" />
        <meta name="twitter:creator" content="@fullstackman" />
        <meta property="og:url" content="https://mangu.netlify.com/" />
        <meta property="og:title" content="Mangu | A GatsbyJS+Netlify Demo Site" />
        <meta property="og:description" content="Mangu is this beautiful demo web site." />
        <meta property="og:image" content="https://mangu.netlify.com/img/logo.png" />
        <link rel="manifest" href="site.webmanifest"/>
        {/* Place favicon.ico in the root directory*/}
        <link rel="apple-touch-icon" href="/img/logo.png"/>
      </Helmet>
      {/* for debugging: <div>userJourney is now: {zPath}</div>*/}
      <Navbar />
      <div>{this.props.children()}</div>
      <div className="site-footer">
        <ul>
          <li>&#169; {brandName} {thisYear}</li>
          <li><a>Privcay Policy</a></li>
          <li><a>Terms</a></li>
          <li><a>Box of chocolates</a></li>
        </ul>
      </div>
    </div>
    )
  }
}
