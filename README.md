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

1. Download [chromium.zip](https://github.com/tigerros/show-file-on-ireddit/raw/master/chromium.zip).
2. Extract it (you should end up having a folder called "chromium" that has a "manifest" file in it).
3. Head to `chrome://extensions`.
4. Turn on "Developer mode" in the top-right corner.
5. Click "Load unpacked" in the top-left corner.
6. Select the extracted folder.

If you're wondering why I didn't publish it on the Chrome Web Store; you need to pay $5 to create a developer account.

### Firefox
* [Add-on](https://addons.mozilla.org/en-US/firefox/addon/show-file-on-i-redd-it-mv2/)