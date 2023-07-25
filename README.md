# Show file on i.redd.it
## Description
This extension:
* Shows only the image file on `i.redd.it` or `preview.redd.it`. This improves loading speed, removes trackers and fixes the broken zooming.
* Redirects `preview.redd.it` to the `i.redd.it` equivalent. This gets you the highest quality image, and you can download a PNG/JPEG instead of the default `preview.redd.it` WEBP (which is not a traditional image file).
* Blocks a useless file on `i.redd.it` pages ([i.redd.it/favicon.ico](https://i.redd.it/favicon.ico)). This very slightly improves loading speed.

## Installation
### Chromium
*This applies to other Chromium browsers, such as Microsoft Edge, Opera or Brave.
This tutorial is for Chrome, but it should work for the others with some minor differences.
For example, instead of `chrome://extensions`, you use `edge://extensions` on Edge.
The UI is also different from what is described here.*

1. Download [chromium.zip](https://github.com/tigerros/show-file-on-ireddit/raw/master/chromium.zip).
2. Extract it (you should end up having a folder called "chromium" that has a "manifest.json" file in it).
3. Go to `chrome://extensions`.
4. Turn on "Developer mode" in the top-right corner.
5. Click "Load unpacked" in the top-left corner.
6. Select the extracted folder.

If you're wondering why I didn't publish it on the Chrome Web Store; you need to pay $5 to create a developer account.

### Firefox
[Add-on](https://addons.mozilla.org/en-US/firefox/addon/show-file-on-i-redd-it-mv2/)

If you're wondering why there are two Firefox folders;
one is for Manifest V2 and the other is for Manifest V3 ([more info](https://developer.chrome.com/docs/extensions/mv3/intro/)).
The add-on link above leads to the Manifest V2 version, because it's easier to install and works on older Firefox versions.
Once Firefox stops supporting Manifest V2, I will release the Manifest V3 version.

## Gulp
I'm using Gulp to minify the add-ons and also zip the Chromium minified folder.