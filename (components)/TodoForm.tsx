type ToDoForm = {
  description: string,
  date: string,
  filter: string,
  onChangeDescription: (value: string) => void,
  onChangeDate: (value: string) => void,
  onChangeFilter: (value: string) => void,
  onCreate: () => void
}

export default function ToDoForm({description, date, filter, onChangeDescription, onChangeDate, onChangeFilter, onCreate}: ToDoForm){
  return (
    <div className="flex gap-2 mb-6">
      <input
        type="text"
        value={description}
        onChange={e => onChangeDescription(e.target.value)}
        placeholder="Digite uma tarefa..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="date"
        value={date}
        onChange={e => onChangeDate(e.target.value)}
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <select
      className="border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
      >
        <option value="none">Sem Filtro</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendentes</option>
        <option value="due">Vencidos</option>
      </select>

      <button
        onClick={onCreate}
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        Criar Tarefa
      </button>
    </div>
  )
}