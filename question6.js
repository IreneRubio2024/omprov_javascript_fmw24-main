// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.
const todos = document.getElementById("todos");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  const onlyFirst10 = data.slice(0, 10);

  onlyFirst10.forEach((todo) => {
    const ulEl = document.createElement("ul");

    const liEl = document.createElement("li");
    liEl.innerHTML = `Title: ${todo.title}`;

    const completedEl = document.createElement("p");
    completedEl.innerHTML = `completed: ${todo.completed}`;
    completedEl.style.color = "green";

    todos.appendChild(ulEl);
    ulEl.appendChild(liEl);
    ulEl.appendChild(completedEl);
  });
}

// onlyFirst10.forEach((todo) => {
//   if (todo.completed === true) {
//     completedEl.textContent = "completed";
//   } else {
//     return "not completed";
//   }
// });
getTodos();
