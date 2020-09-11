if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorkerContainer.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

document.getElementById("submit").addEventListener("click", function() {
            event.preventDefault();
            console.log("Hello");
            var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=";
            var bookValue = document.getElementById('bookInput').value;
            var key = "&key=AIzaSyD4GijWnTEom_CThw6R6deoZiI7h6n3UWM";
            var url = baseUrl + bookValue + key;
            url = url.replace(/ /g, "+");
            console.log(url);

            fetch(url)
              .then(response => response.json())
              .then(data => {
                        for (var i = 0; i < data.items.length; i++) {
                          var item = data.items[i];
                          document.getElementById("content").innerHTML += "<div class="+"book-container>"+"<h3>"+ item.volumeInfo.title+
                          "</h3> <p>Author: "+ item.volumeInfo.authors+ "</p>"+
                           "<p><img src="+ item.volumeInfo.imageLinks.thumbnail + "></p>"+
                          "</p> <p>Category: "+ item.volumeInfo.categories+ "</p>"
                          +"</div>"
              }
      });
});
