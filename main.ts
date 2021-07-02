import { Person } from "./Person"; 
import { Trainer } from "./Trainer"; 
import { Cours } from "./enumCours"

let jano = new Trainer([Cours.COURS2, Cours.COURS4], "Jean", "Hub", "Male", 14, 185, 75 );

console.log(jano.$firstname + " " + jano.$surname + " => mon Objet"); 
console.log(" J'enseigne " + jano.$cours[0] + " et " + jano.$cours[1]); 