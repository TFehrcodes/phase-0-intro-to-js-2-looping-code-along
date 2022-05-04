// Let's say we have a bunch of gifts to wrap
// all same size and shape
// every gift:
// cut similar sized piece of wrapping paper
// fold it up over the edges of the gift
// tape it together
// add a nice lil' card
// set the wrapped gift aside and move to the next
// our collection of gifts: an array, wrapping: a func

// the for loop is the most common
// structure:
// for ([initialization]; [condition]; [iteration]) {
//   [loop body]
//  }

for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

let newArray = [];
function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
  newArray.push( `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
  }
  return newArray;
}

function countDown(int) {
  while (int >= 0) {
    console.log(int--);
  }
}

