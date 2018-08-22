import React from 'react'
import Link from 'gatsby-link'

function generateForm() {
  let userPath = document.breadcrumbz;
  return {
    __html: `
      <div id="mc_embed_signup">
        <form action="/copy-from-mailchimp-embedded-from-html-snippet" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
          <div id="mc_embed_signup_scroll">
            <div class="mc-field-group control">
              <label for="mce-EMAIL">Email Address  *</label>
              <input type="email" value="" placeholder="you@example.com" name="EMAIL" class="input email" id="mce-EMAIL">
            </div>
            <div class="mc-field-group control">
              <label for="mce-NAME">Name  *</label>
              <input type="text" value="" placeholder="what you like to be called" name="NAME" class="required input" id="mce-NAME">
            </div>
            <div class="mc-field-group">
              <input type="hidden" name="JRNY" value="${userPath}" id="mce-JRNY">
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_f4a879da923303419ec8782d5_64de62efc0" tabindex="-1" value="">
            </div>
            <br>
            <div class="clear">
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button">
            </div>
          </div>
        </form>
      </div>
    `
  };
  //<script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='NAME';ftypes[1]='text';fnames[2]='TLNT';ftypes[2]='dropdown';fnames[5]='JRNY';ftypes[5]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
};

const Signup = () => (
  <div dangerouslySetInnerHTML={generateForm()} />
)

export default Signup
