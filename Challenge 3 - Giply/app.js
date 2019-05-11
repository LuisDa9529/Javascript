const apiKey = "luKplnQDPa1sLc8JXRUkWFGpXMg07vVs";

function getGiphyData() {
  var searchTerm = document.querySelector("#search").value;
  var url =
    "https://api.giphy.com/v1/gifs/search?api_key=" +
    apiKey +
    "&q=" +
    searchTerm;

  fetch(url)
    .then(data => data.json())
    .then(res => {
      console.log(res);

      var arrayOfGifs = res.data;
      var rand = Math.floor(Math.random() * arrayOfGifs.length);
      var firstItem = arrayOfGifs[rand];
      var giphyLink = firstItem.images.fixed_width.url;

      document.querySelector("#gif").setAttribute("src", giphyLink);
    })
    .catch(error => console.log(error));
}

function getTrendingData() {
  var url = "https://api.giphy.com/v1/gifs/trending?api_key=" + apiKey;

  fetch(url)
    .then(data => data.json())
    .then(res => {
      console.log(res);
      var _outputHTML = "";
      var _tenGifs = document.getElementById("tenGifs");

      if (res.data.length < 10) return;
      for (let i = 0; i < 25; i++) {
        var node = document.createElement("img");
        node.setAttribute("src", res.data[i].images.fixed_width.url);
        _tenGifs.appendChild(node);
      }
    });
}
getTrendingData();
