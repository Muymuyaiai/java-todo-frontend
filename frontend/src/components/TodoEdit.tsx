import {Todo} from "../model/Todo";

import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import {useState} from "react";

export default function TodoEdit(props: { todo: Todo }) {
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");

    const putTodo = () => {
        let tmpDesc: string = props.todo.description
        let tmpStatus: string = props.todo.status
        if (description != "") {
            tmpDesc = description
        }
        if (status != "") {
            tmpStatus = status
        }
        axios.put("/api/todo/" + props.todo.id, {id: props.todo.id, description: tmpDesc, status: tmpStatus})
    };
    return (
        <div className={"card"}>
            <p>Description</p>
            <input onChange={(event) => setDescription(event.target.value)} defaultValue={props.todo.description}/>
            <p>Status</p>
            <div>
            <select onChange={(event) => setStatus(event.target.value)}>
                <option> --- select status ---</option>
                <option value={"OPEN"}>OPEN</option>
                <option value={"DOING"}>DOING</option>
                <option value={"DONE"}>DONE</option>
            </select>
            </div>
            <button onClick={putTodo}><a href="/">save</a></button>
            <button><a href="/">back</a></button>

        </div>
    )
}