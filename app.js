let quoteText = document.getElementById("quote-text");
let quoteAuthor = document.querySelector(".blockquote-footer");
let btn =document.querySelector(".btn");


const getQuote = async ()=>{
    let quote = await fetch("https://api.quotable.io/random")
    .then((response=>response.json()))
    //.then(data=> data)
    //const [fethcedQuote] = quote
    //console.log(quote);
    const{
    content : text,
    author : author,
    } = quote
    
    quoteText.innerHTML = text;
    quoteAuthor.innerHTML= author;
}

window.addEventListener("load",getQuote);
btn.addEventListener("click",getQuote);
getQuote()