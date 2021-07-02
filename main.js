"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trainer_1 = require("./Trainer");
var enumCours_1 = require("./enumCours");
var jano = new Trainer_1.Trainer([enumCours_1.Cours.COURS2, enumCours_1.Cours.COURS4], "Jean", "Hub", "Male", 14, 185, 75);
console.log(jano.$firstname + " " + jano.$surname + " => mon Objet");
console.log(" J'enseigne " + jano.$cours[0] + " et " + jano.$cours[1]);
