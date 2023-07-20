let urls = ["*://i.redd.it/*", "*://preview.redd.it/*"]
let imageRequestAcceptHeaders = "image/avif,image/webp,*/*";

function rewriteAcceptHeader(e) {
    console.log(e.requestHeaders);
    e.requestHeaders.forEach((header) => {
        if (header.name.toLowerCase() === "accept") {
            header.value = imageRequestAcceptHeaders;
        }
    });

    return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteAcceptHeader,
    { urls: urls },
    ["blocking", "requestHeaders"],
);
