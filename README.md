# Show file on i.redd.it
## Description
An extension that hides the default header/footer when visiting an `i.redd.it` or `preview.redd.it` page.
Doing so improves the loading speed, removes trackers and fixes the broken zooming.

This extension uses the `browser.webRequest.onBeforeSendHeaders.addListener` function to rewrite the HTTP `Accept` header to accept only images (not the HTML landing page) if the domain is `i.redd.it` or `preview.redd.it`.

## Installation
### Chromium
*This also applies to other Chromium browsers, such as Microsoft Edge, Opera or Brave.
This tutorial is specifically for Chrome, but it should work for the other ones as well, albeit with some differences.
For example, instead of `chrome://extensions`,
you need to use `edge://extensions` if you're using Edge.
The UI is also different from what is described here.*

1. Download [chromium.zip](https://github.com/tigerros/show-file-on-ireddit/files/12113229/chromium.zip) from the Chromium release.
2. Extract it (you should end up having a folder called "chromium" that has a "manifest" file in it).
3. Head to `chrome://extensions`.
4. Turn on "Developer mode" in the top-right corner.
5. Click "Load unpacked" in the top-left corner.
6. Select the extracted folder.

If you're wondering why I didn't publish it on the Chrome Web Store; you need to pay $5 to create a developer account.

### Firefox
These add-ons might not be verified yet.
If you can't see them, you can install them manually (but it's recommended to wait a day or two to download them properly).

For manual installation, follow these steps:

1. Download [firefox_mv2.zip](https://github.com/tigerros/show-file-on-ireddit/files/12113258/firefox_mv2.zip) from the Firefox release.
2. Go to `about:debugging#/runtime/this-firefox`,
3. Click "Load Temporary Add-on".
4. Select your `firefox_mv2.zip`.

Check back in a day or two to download them from the website once they are verified and remove the temporary one.

* [Extension using Manifest V2](https://addons.mozilla.org/en-US/firefox/addon/show-file-on-i-redd-it-mv2/)
* [Extension using Manifest V3 (only for Firefox version 109.0 and above)](https://addons.mozilla.org/en-US/firefox/addon/show-file-on-i-redd-it/)