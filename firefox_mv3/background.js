let urls = ["*://i.redd.it/*", "*://preview.redd.it/*"]

function rewriteAcceptHeader(e) {
    e.requestHeaders.forEach((header) => {
        if (header.name.toLowerCase() === "accept") {
            header.value = "";
        }
    });

    return { requestHeaders: e.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteAcceptHeader,
    { urls: urls },
    ["blocking", "requestHeaders"],
);
