document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
        {
            text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
            author: "Nelson Mandela"
        },
        {
            text: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
        },
        {
            text: "Out of the Mountain of disappear, there always a scope.",
            author: "Raghav Jha"
        },
        {
            text: "Saffalata se maro, muskurahat se dafna do.",
            author: "Raghav Jha"
        },

        {
            text: "Your time is limited, so don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            text: "If life were predictable it would cease to be life, and be without flavor.",
            author: "Eleanor Roosevelt"
        },
        {
            text: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
            author: "Oprah Winfrey"
        }
    ];

    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');

    function displayQuote() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        quoteElement.textContent = randomQuote.text;
        authorElement.textContent = `- ${randomQuote.author}`;
    }

    newQuoteButton.addEventListener('click', displayQuote);

    displayQuote();
});
