document.addEventListener('DOMContentLoaded', () => {

    let button = document.getElementById('tweet-button');

    button.addEventListener('click', () => {
        fetch("https://serene-chamber-35467.herokuapp.com/tweet/")
        .then(response => {
            return response.json();
        })
        .then(result => {
            alert(result);
        });
    });
});