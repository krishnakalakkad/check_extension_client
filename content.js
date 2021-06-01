/*document.body.onload = function() {
  chrome.storage.sync.get("articles", function(items) {
    if (!chrome.runtime.error) {
      console.log(items);
      document.getElementById("articles").innerText = items.articles;
    }
  });
}*/

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('button').addEventListener('click',
		onclick, false)
	
	function onclick(){
		let input = document.getElementById('searchbar').value;
		input = input.toLowerCase();
		snopesUrl = "https://www.snopes.com/?s=";
		input  = input.replace(/ /gi, "+");
		snopesUrl = snopesUrl + input;
		window.open(snopesUrl);
	}
}, false)

document.addEventListener('DOMContentLoaded', function () {

	document.getElementById('tweet-button').addEventListener('click',
		onclick, false)


	/*document.body.onload = function() {
          chrome.storage.sync.get("articles", function(items) {
            if (!chrome.runtime.error) {
              console.log(items);
              document.getElementById("articles").innerText = items.articles;
            }
          });
    }*/

	function onclick(){


		let input = document.getElementById('tweet-box').value;
		herokuUrl = "https://serene-chamber-35467.herokuapp.com/tweet/";
		input  = input.replace(/ /gi, "%20");
		herokuUrl = herokuUrl + input;

		fetch("https://serene-chamber-35467.herokuapp.com/tweet/kamala%20harris")
		    .then(response => {
		        return response.json();
		    })
		    .then(result => {
		        console.log(result);
		    });

//        var tag = document.createElement("p");
//        var text = document.createTextNode(herokuUrl);
//        tag.appendChild(text);
//        var element = document.getElementById("articles");
//        element.appendChild(tag);
//        chrome.storage.sync.set({ "articles" : herokuUrl }, function() {
//        if (chrome.runtime.error) {
//            console.log("Runtime error.");
//        }
//        });


}}, false)
/*
var clicked = 0;

console.log("Go!!!!!");

/*$('div').click(function() {
    if (clicked == 0 && this.className == "css-1dbjc4n r-18u37iz r-1h0z5md"){
        alert(this.className);
        clicked = 1;
        return false;
    }
    clicked = 0;
});

document.addEventListener('DOMContentLoaded', function () {
	document.addEventListener('click', onclick, false);

	function onclick(){
		alert("bruhhh");
	}
}, false)


let retweet = document.querySelector("span[class = 'css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0']");
if (retweet != null){
    retweet.innerHTML = "bruh";
}*/

