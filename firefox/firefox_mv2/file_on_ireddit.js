let urls = ["*://i.redd.it/*", "*://preview.redd.it/*"]

function rewriteAcceptHeader(request) {
    if (request.url === "https://i.redd.it/favicon.ico" && request.type === "image") {
        return { cancel: true };
    }

    request.requestHeaders.forEach((header) => {
        if (header.name.toLowerCase() === "accept") {
            header.value = "";
        }
    });

    let url = request.url;
    let protocol = "";
    let domain = "";
    let imageID;

    for (let i = 0; i < 100; i++) {
        let char = url[i];

        if (protocol === "" && char === "/" && url[i + 1] === "/") {
            protocol = url.substring(0, i + 2);
            i++;
        } else if (protocol !== "") {
            if (domain === "") {
                if (char === "p") {
                    domain = "p";
                    i += 16;
                } else {
                    domain = "i";
                    break;
                }
            }

            if (char === "?" || i === url.length) {
                imageID = url.substring(protocol.length + 16, i);
            }
        }
    }

    if (domain[0] === "p") {
        return { redirectUrl: protocol + "i.redd.it/" + imageID, requestHeaders: request.requestHeaders }
    }

    return { requestHeaders: request.requestHeaders };
}

browser.webRequest.onBeforeSendHeaders.addListener(
    rewriteAcceptHeader,
    { urls: urls },
    ["blocking", "requestHeaders"],
);
