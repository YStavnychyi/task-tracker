import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please and a task')
            return
        }

        onAdd({text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="Add Task" value={text}
                              onChange={(e) => setText(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label>Day & Time</Form.Label>
                <Form.Control type="text" placeholder="Add Day & Time" value={day}
                              onChange={(e) => setDay(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Set Reminder" checked={reminder}
                            onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </Form.Group>
            <Button className="mb-3 btn-block" variant="dark" type="submit">
                Save Task
            </Button>
        </Form>
    );
};

export default AddTask;