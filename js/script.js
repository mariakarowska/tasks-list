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

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="list_item ${task.done ? " list_item--done" : ""}">
            ${task.content}
            </li>
            `;
        }

            document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const addNewTask = (newTaskContent) => {
        task.push({
            content: newTaskContent,
        });

        render();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", (event)) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                return;
            }
            addNewTask(newTaskContent);

        });
    };

    init();

}