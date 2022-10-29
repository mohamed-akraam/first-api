document.querySelector('button').addEventListener('click', getData)

function getData() {
    fetch(`https://api.waifu.im/random`)
    .then(res => res.json())
    .then(data => {
        console.log(data.images);
        let src = data.images[0].source;
        if (!data.images[0].is_nsfw) {
            document.querySelector('.link').textContent = src;
            document.querySelector('img').src =  data.images[0].url;
        }
    })
    .catch(err => console.log(`error is ${err}`))
}