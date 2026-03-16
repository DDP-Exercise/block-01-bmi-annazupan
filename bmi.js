"use strict";

const LINE = "-----------------------------------------------------";
let bmr, bmi, normal, danger;
let firstname = prompt("Wie lautet dein Vorname?");
let lastname = prompt("Wie lautet dein Nachname?");
let age = Number(prompt("Wie alt bist du?"));
let height = Number(prompt("Wie groß bist du?"));
let weight = Number(prompt("Wie viel wiegst du?"));

let sex = prompt("Bist du weiblich oder männlich?");
while (sex !== "weiblich" && sex !== "männlich") {
    sex = prompt("Falsche Eingabe! Bist du weiblich oder männlich?")
}

if (sex === "weiblich") {
    bmr = 655 + 10 * weight + 2 * height - 6 * age
} else {
    bmr = 66 + 14 * weight + 5 * height - 7 * age
}

bmi = (10000 * weight) / height ** 2;

if (bmi >= 18 && bmi <= 25) {
    normal = "Yes";
    danger = "No";
} else if (bmi < 16 || bmi >= 30) {
    normal = "No";
    danger = "Yes";
} else {
    // für alle werte die weder "normal" noch "danger" sind (bsp.: 17 oder 28)
    normal = "No";
    danger = "No";
}

console.log(LINE);
console.log("Name:\t\t\t\t\t " + lastname.toUpperCase() + ", " + firstname);
console.log(LINE);
console.log("Age:\t\t\t\t\t " + age + " Years");
console.log("Height:\t\t\t\t\t " + (height/100) + " m");
console.log("Weight:\t\t\t\t\t " + weight + " kg");
console.log("Basal Metabolic Rate:\t " + bmr + " kcal");
console.log("Body Mass Index:\t\t " + bmi);
console.log("Normal Weight:\t\t\t " + normal);
console.log("Danger:\t\t\t\t\t " + danger);
console.log(LINE);
