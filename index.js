console.log("am I running?... no I'm not...wip")

const dotenv = require("dotenv")
dotenv.config()

const fetch = require('node-fetch')

// let rainbow = async () => {
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=rainbow&limit=25&offset=0&rating=g&lang=en`
//     let response = await fetch(url);
//     let json = await response.json();
//     console.log(json)
//    return json
// }
// rainbow()

fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=rainbow&limit=3&offset=0&rating=g&lang=en`)
    .then((response) => {
        if(response) {
            return response.json();
        }else {
            throw new Error ("Network response error")
        }
    })
    .then(data => {
        console.log(data);
        displayGif(data)
    })
    .catch((error) =>  console.error("Fetch error", error))

let displayGif = (data) => {
    const gif = data.data[0];
    const gifDiv = document.getElementById("rainbowGif");

//gif image
    const gifImage = document.getElement(img);
    gifImage.src = gif.url
    gifDiv.appendChild(gifImage);

}
