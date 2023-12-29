const doList = []; // This is an empty array

/*
 Steps (algorithm): 1. Loop through the array, 2. Create some HTML code for each todo, finally 3. Put the HTML on the webpage. 
 */
 // use object{} to group values
    const todoList = [{ 
      name: 'make dinner',
      dueDate: '2023-12-21'
    }, { 
      name: 'wash dishes',
      dueDate: '2023-12-21'
    }];
    renderTodoList();
    
  function renderTodoList() { 
    let todoListHTML = '';
    // The code below generated the HTML, instead of writing all the HTML in the HTML file, we loop through an array and gerated the HTML using JavaScript in line 13 - 18

todoList.forEach((todoObject, index) => {
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;
      // shortcut(destructuring) is const { name, dueDate } = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " // calling the function so that when clicked it will remove it using . splice
   class="delele-todo-button">Delete
      </button>
      `;
      todoListHTML += html;
    }); 
      
    /* This forEach() above is same with for() below, but forEach is easier to read than for loop
*/  

  /*
    for (let i = 0; i < todoList.length; i++) {
      const todoObject = todoList[i];
      const name = todoObject.name;
      const dueDate = todoObject.dueDate;
      // shortcut(destructuring) is const { name, dueDate } = todoObject;
      const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
        " // calling the function so that when clicked it will remove it using . splice
   class="delele-todo-button">Delete
      </button>
      `;
      todoListHTML += html;
    }
*/
    //console.log(todoListHTML);
/*
 we took the array of string in line 82, gerated a paragraph element for each string in line 87 and then combined them all together in line 88
*/
document.querySelector('.js-todo-list')
  .innerHTML = todoListHTML;
  }
  
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value; 
  // .value gets the text from the textbox and is saved in a variable called name
  
  const dateInputElement = document.querySelector('.js-due-date-input'); 
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name, 
    //dueDate : dueDate,
    name,
    dueDate
  });
  // name, dueDate is a shorHand property shortcut
   // .push gets the text from the textbox and adds it to array
  //console.log(todoList);
  inputElement.value = ''; // After getting the value from the textbox, the textbox will be empty again.
  renderTodoList();
}
 
