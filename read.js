(
  function () {
  console.log('start');
  var jsCode = document.createElement('script');

  jsCode.setAttribute('src', 'https://cdn.rawgit.com/mozilla/readability/8525c6af/Readability.js');

  window.cleanHtml = ( function() {
    var loc = document.location;
    var uri = {
      spec: loc.href,
      host: loc.host,
      prePath: loc.protocol + '//' + loc.host,
      scheme: loc.protocol.substr(0, loc.protocol.indexOf(':')),
      pathBase: loc.protocol + '//' + loc.host + loc.pathname.substr(0, loc.pathname.lastIndexOf('/') + 1)
    };

    console.log("location: " + loc)
    console.log("uri :" + uri)

    var article = new Readability(uri, document).parse();
    console.log("article: " + article)

    document.children[0].innerHTML = article.content;
    var cleanStyle=  document.createElement('link');
    // cleanStyle.setAttribute('href','./styles.css');
    // cleanStyle.setAttribute('rel','stylesheet');
    document.head.appendChild(cleanStyle);
  });

  jsCode.onload = cleanHtml;
  document.body.appendChild(jsCode);
}()
);
