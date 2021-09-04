const quotes = [
    {
        quote : "Rock saved me. You can break drums and scream out loud - if you do that in the street you get arrested.",
        artist : "Yoshiki",
    },
    {
        quote : "I don’t know where I’m going from here, but I promise it won’t be boring.",
        artist : "David Bowie",        
    },
    {
        quote : "I no have education. I have inspiration. If I was educated, I would be a damn fool.",
        artist : "Bob Marley",
    },
    {
        quote : "A dream you dream alone is only a dream. A dream you dream together is reality.",
        artist : "John Lennon",
    },
    {
        quote : "It’s better to burn out than to fade away.",
        artist : "Kurt Cobain",
    },
    {
        quote : "I won’t be a rock star. I will be a legend.",
        artist : "Freddie Mercury",
    },
    {
        quote : "If you act like a rock star, you will be treated like one.",
        artist : "Marilyn Manson",
    },
    {
        quote : "A rockstar is someone with a hole in his heart almost the size of his ego.",
        artist : "Bono",
    },
    {
        quote : "Being a rock star is like being a cult leader you really have to be in your own religion.",
        artist : "Courtney Love",
    },
    {
        quote : "Life sucks, but in a beautiful kind of way.",
        artist : "Axl Rose",
    },
]

const quote = document.querySelector("#quote span:first-child");
const artist = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
artist.innerText = todaysQuote.artist;
