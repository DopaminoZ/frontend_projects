 let btn=document.querySelector('#change');
 let person=document.querySelector('#person');
 let quote=document.querySelector('#quoteplace');

 const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "Peter Drucker"
    },
    {
      quote: "Innovation distinguishes between a leader and a follower.",
      person: "Steve Jobs"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      person: "Nelson Mandela"
    },
    {
      quote: "The only person you are destined to become is the person you decide to be.",
      person: "Ralph Waldo Emerson"
    },
    {
      quote: "The journey of a thousand miles begins with one step.",
      person: "Lao Tzu"
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero mollitia aliquid repellendus! Dolore laborum rerum cupiditate ullam asperiores, quo neque laudantium voluptatibus fugiat, eligendi, vero nostrum accusamus autem quaerat.",
        person: "Cicero"
    }
  ];

btn.addEventListener('click', function(){
    let x=Math.floor(Math.random() * quotes.length);
    person.innerText=quotes[x].person;
    quote.innerText=quotes[x].quote;
})
window.addEventListener('load', function(){
    let x=Math.floor(Math.random() * quotes.length);
    person.innerText=quotes[x].person;
    quote.innerText=quotes[x].quote;
})
