import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();
const age = chance.age();
const name = chance.name({ nationality: "it" });
const profession = chance.profession();

export const server = createServer((request, response) => {
  response.statusCode = 200;
  response.end(
    `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}!`
  );
});
