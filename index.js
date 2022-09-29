import chalk from "chalk";

// The wilders I randomly chose to say hello to
const wilders = ["Olga", "Joao", "Pauline", "Vitalii"];

// Returns a random value between 128 and 224
function randomRGB() {
  return 128 + Math.floor(Math.random() * 96);
}

// looping through each of the chosen wilders
for (const wilder of wilders) {
  console.log(
    // black background, random foreground color and lastly the greeting
    chalk.bgBlack.rgb(randomRGB(), randomRGB(), randomRGB())(`Hello ${wilder}!`)
  );
}
