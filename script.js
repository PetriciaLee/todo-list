document.addEventListener('DOMContentLoaded', () => {
  const listCheckbox = document.getElementById('list-checkbox');
  const listCircle = document.getElementById('list-circle');
  const listIcon = document.getElementById('list-icon');
  
  // Funkcija za dodavanje novog zadatka u odabranu listu
  function addTodoItem(listElement, taskText, taskIdPrefix) {
    const newLi = document.createElement('li');
    const taskId = `${taskIdPrefix}_${listElement.children.length + 1}`;

    newLi.innerHTML = `
      <input type="checkbox" id="${taskId}">
      <label for="${taskId}">${taskText}</label>
    `;

    listElement.appendChild(newLi);
  }

  // Primjer dodavanja zadataka (možeš ovo koristiti za testiranje)
  // dodajemo u listu s kvačicom
  addTodoItem(listCheckbox, 'Novi zadatak za kvačicu', 'task1');
  
  // dodajemo u listu s kružićem
  addTodoItem(listCircle, 'Novi zadatak za kružić', 'task2');
  
  // dodajemo u listu s ikonom
  addTodoItem(listIcon, 'Novi zadatak s ikonom', 'task3');
});
