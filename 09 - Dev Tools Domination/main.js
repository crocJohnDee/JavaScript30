const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("hello");


// Interpolated;
let str = "human"
console.log("hello i am a %s", "human");
console.log(`hello i am a ${str}`);

// Styled
console.log("%c I am some great text", "font-size:50px; background:red; text-shadow: 10px 10px 0px blue");

// warning!
console.warn("oops");


// Error :|
console.error("shit");

// Info
console.info("crocodiles eat people");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

console.clear();

// Grouping together
dogs.forEach(dog => {

    // console.group(`${dog.name}`);
    console.groupCollapsed(`${dog.name}`);

    console.log(`this is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);

    console.groupEnd(`${dog.name}`);
});

// counting
console.count(str);
console.count("johnny");
console.count("johnny");
console.count("Oskar");


// timing
console.time("looping");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.timeEnd("looping");

//table
console.table(dogs)
