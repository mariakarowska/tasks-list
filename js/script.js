{
    const tasks = [
        {
            content: "cos1",
            done: true,
        },
        {
            content: "cos2",
            done: false,
        },

    ];

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li 
            class="list_item ${task.done ? " list_item__done" : ""}">
            ${task.content}
            </li>
            `;
        }

            document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    
    const init = () => {
        render();

    };

    init();

}