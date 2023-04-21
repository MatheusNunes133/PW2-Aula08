// 1. Testando questão 01
console.log("Questão 01:");
import { Animal } from "./classes/Animal";

let animal = new Animal("Gato");

console.log(`Nome do Animal: ${animal.exibirAnimal()}`);
animal.cadastrar("Miar");
animal.cadastrar("Comer Ração");
console.log(`Características do Animal: ${animal.exibirCaracteristica()}`);

console.log("\n");

// 2. Testando questão 02
console.log("Questão 02:");
import { Filhote } from "./classes/Filhote";

let filhote = new Filhote(["Preto", "Branco"], 5);

console.log(`Nome do Tutor: ${filhote.adotar("Matheus")}`);

console.log("\n");

// 3. Testando questão 03
console.log("Questão 03:");
import { Furao } from "./classes/Furao";
import { Hamster } from "./classes/Hamster";

let furao = new Furao();
furao.cavar();
furao.cavar();
console.log(`O Furão come frutas? ${furao.comer("frutas") ? "Sim" : "Não"}`);
console.log(`O Furão está feliz? ${furao.estaFeliz() ? "Sim" : "Não"}`);

console.log("\n");

let hamster = new Hamster();
hamster.correr();
hamster.correr();
console.log(`O Hamster come Vegetais? ${furao.comer("vegetais") ? "Sim" : "Não"}`);
console.log(`O Hamster está feliz? ${furao.estaFeliz() ? "Sim" : "Não"}`);