import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div>
        <section className="hero home-hero is-fullheight">
          <div className="hero-body home-body">
            <div className="container">
              <h1 className="title">A Beautiful Website</h1>
              <h2 className="subtitle">This is the future! (powered by Bulma CSS)</h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula sem vel enim tincidunt pulvinar. Proin vulputate augue ligula, mattis sagittis enim facilisis vitae. Vivamus pretium augue id magna efficitur, id blandit neque ullamcorper. Aenean viverra bibendum suscipit. Nam vehicula ligula at neque tristique rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus ex velit, ultricies id fermentum et, convallis in nisl. Ut elementum leo vitae mattis faucibus. Maecenas quis eros gravida, mollis lacus porttitor, sollicitudin lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed mattis vestibulum leo, ac varius dui. Sed volutpat enim ut libero tristique venenatis.
                <br />Sed vehicula, orci quis tristique venenatis, libero elit viverra tellus, vitae pellentesque nisl neque vitae leo. Morbi ac diam ullamcorper, vehicula eros sed, aliquam nunc. Integer consectetur luctus velit, tristique posuere felis euismod vitae. Vivamus sit amet rutrum velit, id euismod elit. Phasellus a augue justo. Integer accumsan placerat purus eu gravida. Donec facilisis pretium condimentum. Donec tempor elit metus, facilisis mattis enim ultrices sed. Fusce non nulla a nisi blandit efficitur. Vivamus lobortis ipsum malesuada, gravida sem sed, malesuada purus. Praesent tristique feugiat nisl quis sagittis. Mauris malesuada interdum urna vel sagittis. Cras eu finibus ipsum, vitae sagittis nulla. Aenean auctor ut leo vel consectetur. Proin tincidunt diam eget nibh fringilla, vel dignissim felis fermentum. </p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
