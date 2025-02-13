// size 30 
const quotes = [
    "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "It’s not whether you get knocked down, it’s whether you get up. – Vince Lombardi",
    "Dream big. Start small. Act now. – Robin Sharma",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "If everything seems under control, you’re not going fast enough. – Mario Andretti",
    "You don’t have to be great to start, but you have to start to be great. – Zig Ziglar",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Quality means doing it right when no one is looking. – Henry Ford",
    "Amateurs sit and wait for inspiration, the rest of us just get up and go to work. – Stephen King",
    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. – Steve Jobs",
    "Strive not to be a success, but rather to be of value. – Albert Einstein",
    "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
    "What you do today can improve all your tomorrows. – Ralph Marston",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "If you really look closely, most overnight successes took a long time. – Steve Jobs",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Do what you love and the money will follow. – Marsha Sinetar",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. – Earl Nightingale",
    "An investment in knowledge pays the best interest. – Benjamin Franklin",
    "Success is not just about making money. It’s about making a difference. – Unknown",
    "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",
    "Leadership is not about being in charge. It is about taking care of those in your charge. – Simon Sinek",
    "I find that the harder I work, the more luck I seem to have. – Thomas Jefferson",
    "You don’t get paid for the hour. You get paid for the value you bring to the hour. – Jim Rohn",
    "The future depends on what you do today. – Mahatma Gandhi",
    "It always seems impossible until it's done. – Nelson Mandela"
];


const element = document.getElementById("quote-text");
function timer(){
    let index = Math.floor(Math.random() * quotes.length );
    element.innerText = quotes[index];

}
setInterval(timer, 4000);

window.onload = timer;// quotes appears immediately when the page loads