const loadQuote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => quoteWest(data))
}

const quoteWest = quote => {
    const p = document.getElementById('quote')
    p.innerText = quote.quote
}