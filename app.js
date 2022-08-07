window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const listEl = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const taskEl = document.createElement('div');
		taskEl.classList.add('task');

		const taskContentEl = document.createElement('div');
		taskContentEl.classList.add('content');

		taskEl.appendChild(taskContentEl);

		const inputEl = document.createElement('input');
		inputEl.classList.add('text');
		inputEl.type = 'text';
		inputEl.value = task;
		inputEl.setAttribute('readonly', 'readonly');

		taskContentEl.appendChild(inputEl);

		const actionsEl = document.createElement('div');
		actionsEl.classList.add('actions');
		
		const editEl = document.createElement('button');
		editEl.classList.add('edit');
		editEl.innerText = 'Edit';

		const DltEl = document.createElement('button');
		DltEl.classList.add('delete');
		DltEl.innerText = 'Delete';

		actionsEl.appendChild(DltEl);
		actionsEl.appendChild(DltEl);

		taskEl.appendChild(actionsEl);

		listEl.appendChild(taskEl);

		input.value = '';

		editEl.addEventListener('click', (e) => {
			if (editEl.innerText.toLowerCase() == "edit") {
				editEl.innerText = "Save";
				editEl.removeAttribute("readonly");
				editEl.focus();
			} else {
				editEl.innerText = "Edit";
				inputEl.setAttribute("readonly", "readonly");
			}
		});

		DltEl.addEventListener('click', (e) => {
			listEl.removeChild(taskEl);
		});
	});
});