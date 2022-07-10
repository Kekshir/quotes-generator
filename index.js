let body = document.body;
let btn = document.querySelector('.btn-guote');
let blockquote = document.querySelector('.text');
let p = document.querySelector('.author')
function getRandomQuote() {
    let numQuote = Math.floor(Math.random() * Math.floor(3) + 1);
    return numQuote;
}

async function getQuotes() {
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json();
    let random = getRandomQuote();
    blockquote.textContent = `"${data[random].text}."`;
    p.textContent = data[random].author;
}

//getQuotes();
btn.addEventListener('click', getQuotes);