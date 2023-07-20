# Show file on i.redd.it

## Description
An extension that hides the default header/footer when visiting an `i.redd.it` or `preview.redd.it` page.
Doing so improves the loading speed, removes trackers and fixes the broken zooming.

## Installation

### Chromium
*This also applies to other Chromium browsers, such as Microsoft Edge, Opera or Brave.
This tutorial is specifically for Chrome, but it should work for the other ones as well, albeit with some differences.
For example, instead of [chrome://extensions](chrome://extensions),
you need to use [edge://extensions](edge://extensions) if you're using Edge.
The UI is also different from what is described here.*

1. Download the [chromium](chromium) folder.
2. Head to [chrome://extensions](chrome://extensions).
3. Turn on "Developer mode" in the top-right corner.
4. Click "Load unpacked" in the top-left corner.
5. Select the folder.

### Firefox
* [Extension using Manifest V2]()
* [Extension using Manifest V3 (read disclaimer below)]()

Manifest V3 is recommended (because Manifest V2 will eventually run out of support),
**but before you use it**, you need to give it necessary permissions.

1. Manage the extension (Show file on i.redd.it).
2. Head to the "Permissions" tab.
3. Turn on both permissions:

<img src="instructions_firefox_mv3.png" alt="Permission instructions for Firefox Manifest V3" height="300">

Without these, the extension will not work. They are not optional.