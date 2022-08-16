let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"Designed with performance and durability in mind."`,
        person: `Driven Clutch`
    },
    {
        quote: `"The Athena Big Bore kit is the missing source for increasing your motorcycles raw power."`,
        person: `Athena`
    },
    {
        quote: `"K&N Performance Motorcycle Oil Filters are constructed of resin-impregnated synthetic media."`,
        person: `K&N`
    },
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerHTML = quotes[random].quote;
    person.innerHTML = quotes[random].person;
})