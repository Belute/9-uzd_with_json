
async function getData() {
    const requestURL = 'https://raw.githubusercontent.com/Belute/data_jsonn/master/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const JSON = await response.json();
    console.log(JSON);
    changeHtml(JSON[randSk(JSON.length)]);
}
getData();

let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
    confetti({
        particleCount: 300,
        spread: 180,
        startVelocity: 60
    });
    getData();
})

function changeHtml(data) {
    document.getElementById("img").setAttribute("src", data.imgSrc);
    document.getElementById("text").innerHTML = data.text;

}


function randSk(size) {

    let sk = Math.floor(Math.random() * size)
    return sk
}

// console.log(randSk(2));


// btn.addEventListener("click", function () {

//     let rand = randSk(Arrey.length);
//     changeHtml(Arrey[rand])
// })


