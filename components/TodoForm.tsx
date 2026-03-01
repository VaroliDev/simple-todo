type ToDoForm = {
  description: string,
  onChange: (value: string) => void,
  onCreate: () => void
}

export default function ToDoForm({description, onChange, onCreate}: ToDoForm){
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={description}
        onChange={e => onChange(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onCreate}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Criar Tarefa
      </button>
    </div>
  )
}