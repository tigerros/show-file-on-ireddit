document.head.innerText = "";
document.body.innerText = "";

document.head.outerHTML = "<head>\n" +
	"\t<meta charset=\"UTF-8\">\n" +
	"\t<title>Show file on i.redd.it</title>\n" +
	"</head>";

document.body.outerHTML = "<body>\n" +
	"\t<h2><i>You are seeing this message because you have the \"Show file on i.redd.it\" extension.</i></h2>\n" +
	"\t<h1>⛔ This extension is deprecated and no longer contains any functionality ⛔</h1>\n" +
	"\t<p>\n" +
	"\t\tDownload <mark><a href=\"https://github.com/tigerros/reddit-media-page-cleanup\">reddit-media-page-cleanup</a></mark> instead.\n" +
	"\t\tIt's the same thing, but with bug fixes and additional features.\n" +
	"\t\tI made a new one because the \"Show file on i.redd.it\" name is too specific.\n" +
	"\t</p>\n" +
	"</body>";