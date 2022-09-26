import "./TodoList.css";
import {Todo} from "../model/Todo";
import TodoCard from "./TodoCard";

export default function TodoList(props: { todos: Todo[] }) {


    return (
        <div className={"cards"}>

            <div>
                <h3>OPEN</h3>
                {props.todos.filter(({status}) => status === "OPEN").map((todo: Todo) =>
                <div className={"card"}>{TodoCard({todo})}</div>)}
            </div>
            <div>
                <h3>DOING</h3>
                {props.todos.filter(({status}) => status === "DOING").map((todo: Todo) =>
                <div className={"card"}>{TodoCard({todo})}</div>)}
            </div>
            <div>
                <h3>DONE</h3>
                {props.todos.filter(({status}) => status === "DONE").map((todo: Todo) =>
                <div className={"card"}>{TodoCard({todo})}</div>)}
            </div>


        </div>

    )
}