document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");
  const newTask = document.querySelector("#new-task-description")
  const taskList = document.querySelector("#tasks");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const newListItem = document.createElement("li");
    const newButton = document.createElement("button");

    newListItem.textContent = newTask.value + " ";
    newButton.textContent = " REMOVE ";

    newButton.addEventListener("click", function(e) {
      console.log(e);
      e.target.parentNode.remove();
    });

    newListItem.appendChild(newButton);
    taskList.append(newListItem)



    e.target.reset();
  })



});
