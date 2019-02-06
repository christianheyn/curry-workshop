const greeting = (userName) => (text) => {
    console.log(text + ' ' + userName);
};

const greetBilly = greeting('Billy');

greetBilly('Guten Morgen,');

// =======================================

const makeSay = sound => () => { console.log(sound) }

const Cat = {
    say: makeSay('meow'),
};

const Dog = {
    say: makeSay('wuff'),
};

Cat.say();
Dog.say();