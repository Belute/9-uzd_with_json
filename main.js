async function getData() {
    const requestURL = 'https://raw.githubusercontent.com/ntelio96/JSON/main/data.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const JSON = await response.json();
    console.log(JSON);
    // kreipktis į kaiką kas pus jau yra....????
}
getData();