const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
};

//Part 1: Humble beginnings

// create a loop that logs each item in Robin’s inventory

adventurer.inventory.forEach((item, index) => {
  console.log(item);
});

//give Robin a companion to travel with – a furry friend they call “Leo.”

adventurer.companion = {
  name: "Leo",
  type: "Cat",
};

console.log(adventurer);

//give Robin’s feline friend a friend of his own

adventurer.companion.friend = {
  name: "Frank",
  type: "Flea",
  Belongings: ["small hat", "sunglasses"],
};

console.log(adventurer);
