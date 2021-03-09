var inputEl = document.querySelector("#keyword");
var btnEl = document.querySelector(".btn");
var contentEl = document.querySelector("#repos-container");

btnEl.addEventListener("click", function(event) {
    event.preventDefault();

    var searchStr = 'https://www.loc.gov/search/?q=' + inputEl.value + '&fo=json';
    console.log(searchStr);

    fetch(searchStr, {
        cache: "reload",
      })
        .then(function (response) {
          return response.json();
        })

        .then(function (data) {
            console.log(data);
            var container = document.createElement("div");
            for (var i = 0; i < data.results.length; ++i) {
                var title = document.createElement("h3");
                var link = document.createElement("a");
                title.textContent = data.results[i].title;
                link.href = data.results[i].url;
                link.textContent = data.results[i].url;
                container.append(title);
                container.append(link);
            }
            contentEl.append(container);

        });
});