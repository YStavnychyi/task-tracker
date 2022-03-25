import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import React, {useState} from "react";
import taskObject from "./components/taskObject";
import AddTask from "./components/AddTask";

function App() {
    const [tasks, setTasks] = useState(taskObject)
    const [showAddTask, setShowAddTask] = useState(false)

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1
        const newTask = {id, ...task}
        setTasks([...tasks, newTask])
    }

    return (
        <Container className="container">
            <Header
                onAdd={() => setShowAddTask(!showAddTask)}
                showAdd={showAddTask}
            />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? (<Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                />
            ) : (
                'No Task To Show'
            )}
        </Container>
    )
}

export default App
