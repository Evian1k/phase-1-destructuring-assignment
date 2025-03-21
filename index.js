// Given Variables
const farmAnimals = "cow horse sheep pig chicken";
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit",
};

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along",
    },
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy",
};

// 🐄🐎🐑🐖🐔 Strings

// 1. Use destructuring to assign appropriate variables based on the animal names (not sounds!)
const [moo, neigh, baa, oink, cluck] = farmAnimals.split(" ");

// 2. Destructure farmAnimals to assign four animal names (excluding horse)
const [bessie, , dolly, babe, little] = farmAnimals.split(" ");

// 3. Destructure colors of the remaining animals (cow, sheep, pig)
const [blackAndWhite, , black, pink] = farmAnimals.split(" ");

// 🌈 Arrays

// 4. Use destructuring to assign appropriate variables using the color names.
const [red, orange, yellow, green, blue, indigo, violet] = colors;

// 5. Use initials, skipping indigo
const [r, o, y, g, b, , v] = colors;

// 6. Assign indigo separately
const [, , , , , indg] = colors;

// 🎭 Objects

// 7. Use destructuring to assign all variables using the keys as the variable names
const { muppetName, color, song, job, partner } = muppet;

// 8. Destructure nestedMuppet for songs 2 and 4, and Kermit's job and partner
const {
  album: {
    theMuppetMovie: { song2, song4 },
  },
  nestedJob,
  nestedPartner,
} = nestedMuppet;
