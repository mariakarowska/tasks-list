{
    const tasks = [
        {
            content: "cos tam",
            done: true,
        },
        {
            content: "cos",
            done: false,
        },

    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (index) => {
        tasks.splice(index,1);
        render();
    };

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

            removeButtons.forEach((removeButton, index) => {
                removeButton.addEventListener("click", () => {
                   removeTask(index);
                });
            });

            const toggleDoneButtons = document.querySelectorAll(".js-done");

            toggleDoneButtons.forEach((toggleDoneButton, index) => {
                toggleDoneButton.addEventListener("click", () => {
                   toggleTaskDone(index);
                });
            });

    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="list_item ${task.done ? "list__item--done" : ""}">
            <button class="js-done">Zrobione?</button>
            <button class="js-remove">Usuń</button>
            ${task.content}
            </li>
            `;
        }

            document.querySelector(".js-tasks").innerHTML = htmlString;

            bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
    };
    
    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}