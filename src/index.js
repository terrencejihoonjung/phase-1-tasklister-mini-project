document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const newTask = document.querySelector("#new-task-description")
  const taskList = document.querySelector("#tasks");
  const dropdown = document.querySelector("#dropdown");
  const user = document.querySelector("#new-user");
  const dateDue = document.querySelector("#date-due");

  //Listens for task submission
  form.addEventListener("submit", function(e) {
    //Prevent form default to not refresh the page when submit event is triggered
    e.preventDefault();

    //Create new list element to put task content and button inside
    const newListItem = document.createElement("li");

    //Add task name into the list element's content
    newListItem.textContent = `${user.value} needs to do ${newTask.value} by ${dateDue.value} `;

      console.log(dropdown);
      console.log(dropdown.value)
    //Listen for a click event on the dropdown
    if (dropdown.value === "High Priority") {
      newListItem.style.color = "red";
    }
    else if (dropdown.value === "Medium Priority") {
      newListItem.style.color = "orange";
    }
    else if (dropdown.value === "Low Priority") {
      newListItem.style.color = "green";
    }

    //Create a new button
    const newButton = createButton();
    
    //Add task and its button into the DOM
    newListItem.appendChild(newButton);
    taskList.append(newListItem);
    
    //Reset input form once task is submitted
    e.target.reset();

    //Listen for a click event on the remove button to remove the task from the list
    newButton.addEventListener("click", function(e) {
      e.target.parentNode.remove();
    });
  })

  //Creates remove button for each submitted task
  function createButton() {
    const newButton = document.createElement("button");

    //Change text, font-size, and round corners
    newButton.textContent = " REMOVE ";
    newButton.style.fontSize = "13px";
    newButton.style.borderRadius = "7px";

    return newButton;
  }

});
