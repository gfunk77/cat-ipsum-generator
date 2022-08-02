"use strict";

const text = [
  `Nap all day cat dog hate mouse eat string barf pillow no baths hate everything but kitty poochy. Sleep on keyboard toy mouse squeak roll over. Mesmerizing birds. Poop on grasses licks paws destroy couch intently sniff hand. The dog smells bad gnaw the corn cob. `,
  `Plays league of legends stare out the window. Lies down lick sellotape hopped up on catnip, yet bleghbleghvomit my furball really tie the room together, thug cat . Play riveting piece on synthesizer keyboard sit in window and stare. `,
  `Oooh, a bird, yum shove bum in owner’s face like camera lens or toy mouse squeak roll over. Fall asleep on the washing machine hide when guests come over stare at guinea pigs yet vomit food and eat it again eat and than sleep on your face. `,
  ` Jump five feet high and sideways when a shadow moves throwup on your pillow. Missing until dinner time. Pet right here, no not there, here, no fool, right here that other cat smells funny. `,
  `You should really give me all the treats because i smell the best and omg you finally got the right spot and i love you right now nap all day flop over, so missing until dinner time, for see owner, run in terror sun bathe. `,
  `Give attitude intently sniff hand, yet meow all night having their mate disturbing sleeping humans. Lounge in doorway chase imaginary bugs. `,
  `Throw down all the stuff in the kitchen fooled again thinking the dog likes me play riveting piece on synthesizer keyboard chew on cable missing until dinner time. Licks your face milk the cow. `,
  `Who’s the baby chirp at birds lounge in doorway for Gate keepers of hell meow rub whiskers on bare skin act innocent jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog. `,
  `Cat chases laser then plays in grass finds tiny spot in cupboard and sleeps all day jumps in bathtub and meows when owner fills food dish the cat knocks over the food dish cat slides down the water slide and into pool and swims even though it does not like water. `,
  `Milk the cow jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed paw at your fat belly. Gnaw the corn cob spill litter box, scratch at owner, destroy all furniture, especially couch and burrow under covers jump around on couch.`,
];
// select elements
const form = document.querySelector(".form");
const amount = document.querySelector(".amount");
const result = document.querySelector(".lorem-text");

// eventListener 'submit
form.addEventListener("submit", function (e) {
  // prevent the default (which is to submit to server)
  e.preventDefault();
  //   convert input into a number
  const value = parseInt(amount.value);
  //   create random function for the amount of paragraphs
  const random = Math.floor(Math.random() * text.length);
  // Create a default output if input is NaN, or greater > 10, or <= 0.
  if (isNaN(value) || value > 10 || value <= 0) {
    // create the paragraph in the lorem-text article
    result.innerHTML = `<p class="result">${text[random]}</p>`;
  } else {
    // create variable and use slice to grab correct number of paragraphs
    let tempText = text.slice(0, value);
    // loop over the selected number of paragraphs, create the paragraph, and use join(')
    tempText = tempText
      .map(function (x) {
        return `<p class="result">${x}</p>`;
      })
      .join("");

    result.innerHTML = tempText;
  }
});
