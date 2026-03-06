import { ToDo } from "../(types)/ToDo"
import ToDoItem from "./TodoItem"

type ToDoList = {
    todos: ToDo[],
    filter: string,
    onDelete: (id: number) => void
    onToggle: (id: number) => void
}

export default function ToDoList({todos, filter, onDelete, onToggle}: ToDoList){
    if (todos.length === 0){
        return <h3>Ainda não foi criada nenhuma tarefa, crie uma agora mesmo no campo acima!</h3>
    }

    function isDue(todo: any){
        if(todo.isCompleted) return false

        let itemDateArray = todo.date.split('-').reverse()

        let currentDateArray = new Date().toLocaleDateString().split('/')

        return itemDateArray < currentDateArray
    }

    const filteredTodos = todos.filter(todo => {
        switch (filter) {
            case "completed":
                return todo.isCompleted;
            case "pending":
                return !todo.isCompleted;
            case "due":
                return isDue(todo)
            default:
                return true;
        }
    });

    return (
        <div className="flex flex-col gap-3">
            {filteredTodos.map((todo, index) => (
                <ToDoItem
                key={todo.id}
                todo={todo}
                index={index}
                onDelete={onDelete}
                onToggle={onToggle}
                />
            ))}
        </div>
    )
}