import React from "react";

function TaskList({ tasks, onDeleteTask }) {
    const taskList = tasks.map((task) => ( <
        Task key = { task.text }
        text = { task.text }
        category = { task.category }
        onDeleteTask = { onDeleteTask }
        />
    ));
    return <div className = "tasks" > { taskList } < /div>;
}

export default TaskList;