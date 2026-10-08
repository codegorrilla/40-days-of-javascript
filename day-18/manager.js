console.log("Project: Todo");

function addTask() {
	const taskInput = document.getElementById("taskInput");
	const taskList = document.getElementById("taskList");

	const task = taskInput.value;

	if (task.trim() === "") return;

	const li = document.createElement("li");

	li.innerText = task;

	const completeBtn = document.createElement("button");
	completeBtn.innerText = "✅";
	li.appendChild(completeBtn);
	completeBtn.style.marginLeft = "10px";
	completeBtn.onclick = function () {
		li.classList.toggle("completed");
	};

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "X";
	li.appendChild(deleteBtn);
	deleteBtn.style.marginLeft = "10px";
	deleteBtn.onclick = function () {
		li.remove();
	};

	taskList.appendChild(li);

	taskInput.value = "";
}

function filterTasks() {
	// Implement the filter functionality
}

// Implement the edit button and make any task editable
