import { ToDo } from "../(types)/ToDo"

type ToDoItem = {
    todo: ToDo,
    index: number,
    onToggle: (id: number) => void,
    onDelete: (id: number) => void,
    isDue: (todo: any) => boolean
}

export default function ToDoItem({todo, index, onToggle, onDelete, isDue}: ToDoItem){
    
    function getStatusName(){
        let due = isDue(todo)

        if(due) return "Vencido"
        
        return todo.isCompleted
        ? "Concluído"
        : "Pendente"
    }

    function getStatusStyle(){
        let due = isDue(todo)

        if(due) return "bg-red-100 text-red-700"

        return todo.isCompleted
        ? "bg-green-100 text-green-700"
        : "bg-yellow-100 text-yellow-700"
    }

    return (
        <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
  
            <h4 className="text-sm font-bold text-gray-400 w-16">{index + 1}º</h4>
            <p className={`flex-1 mx-4 text-gray-800 ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                {todo.description}
            </p>

            <p className={`flex-1 mx-4 text-gray-800 ${todo.isCompleted ? "line-through text-gray-400" : ""}`}>
                Até: {todo.date.split('-').reverse().join('/')}
            </p>

            <span className={`px-3 py-1 rounded-full text-xs font-medium mr-4 ${
                getStatusStyle()
            }`}>
                {getStatusName()}
            </span>

            <div className="flex gap-2">
                <button
                onClick={() => onToggle(todo.id)}
                className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
                >
                Alterar Status
                </button>
                <button
                onClick={() => onDelete(todo.id)}
                className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition"
                >
                Apagar
                </button>
            </div>
        </div>
    )
}