# Not Just Guys (Gmail Plug-in)
This Chrome extension corrects for masculine default bias in everyday written communications. 

The Chrome Extension can be found at https://chrome.google.com/webstore/detail/not-just-guys-a-gmail-plu/cafigjcdeapkbklkgijhldplfbmifjim/related

## Citations
  * https://www.psychologytoday.com/us/blog/beyond-pink-and-blue/201403/the-way-we-talk-about-gender-can-make-big-difference

## Contributing

### Requests to add or change warning phrases
Please [create a GitHub issue](https://github.com/genequality-org/not-just-guys/issues/new) with your request.

If you're a developer, you're welcome to submit a pull request.  Please run the tests before submitting, as they will validate the format of the message.

**NOTE:** All warning phrases must include a link to an article that explains why the phrase could negatively impact someone's message.  If available, please also include alternative wording suggestions from the article.

### Development Setup
  * `git clone` the repo
  * Follow the [instructions on the Chrome docs](https://developer.chrome.com/extensions/getstarted#unpacked) to load the extension
  * Go to Gmail and open a compose window
  * If you make changes to the code, click the Reload link on the `chrome://extensions` page and then reload your Gmail tab to pick up the changes.
  * Errors will show up in the console

### Coding Standards
Use [JSCS](http://jscs.info/) with the AirBnB preset.

### Jasmine Tests
Open 'SpecRunner.html' in your web browser to run the test suite.

### To Publish a New Version to Chrome Webstore
  1. Make sure all the tests pass
  1. Update the version number in `manifest.json` and commit the change to master.
     Use [semantic versioning](http://semver.org/) to determine how to increment the version number
  1. Run the `package.sh` shell script to generate a zip file
  1. Go to [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard) and edit the existing app. Upload the new zip file and then publish the changes (button is at the very bottom)
  1. Tag the new release in [GitHub](https://github.com/genequality-org/not-just-guys/releases) and include release notes

### Libraries Used
For production:
  * [head.js](http://headjs.com/)
  * [dom-regexp-match](https://github.com/webmodules/dom-regexp-match)
  * [chrome-platform-analytics](https://github.com/GoogleChrome/chrome-platform-analytics)
  * Based on [gmail-chrome-extension-boilerplate](https://github.com/KartikTalwar/gmail-chrome-extension-boilerplate)

For test:
  * [jasmine.js](http://jasmine.github.io/)
  * [jasmine-jquery.js](https://github.com/velesin/jasmine-jquery)
  * [jQuery](https://jquery.com/)

### License

Not Just Guys is Copyright © 2019 genEquality, Inc. It is free software, and may be redistributed under the terms specified in the (MIT) LICENSE file.
