function extractBodyContent(htmlString) {

    const start  = htmlString.indexOf("<body>") + "<body>".length
    const end = htmlString.indexOf("</body>");


    let newHtmlString = htmlString.slice(start, end)

    return newHtmlString;
}