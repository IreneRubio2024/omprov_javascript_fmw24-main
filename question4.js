// 4. Destructuring (3p)
// Använd destructuring för att plocka ut värdena namn och stad från objektet person.
// Skriv en funktion greeting som tar namn och stad som parametrar och returnerar en sträng:
// "Hej, jag heter [namn] och bor i [stad]."

const person = {
  name: "Anna",
  age: 25,
  stad: "Stockholm",
};

function greeting(name, city) {
  return `Hej, jag heter ${person.name} och bor i ${person.stad}`;
}

// Plocka ut name och city med destructuring här:

const { name, stad } = person;

// Anropa funktionen greeting här (den ska returnera "Hej, jag heter Anna och bor i Stockholm" ):
console.log(greeting(person));
