'use client'

import { useState } from "react"
import type { ToDo } from "@/types/ToDo"
import ToDoForm from "@/components/TodoForm"
import ToDoList from "@/components/TodoList"

export default function ToDo(){
  const [ToDoArray, setToDoList] = useState<ToDo[]>([])
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")

  const [filter, setFilter] = useState("none")

  function CreateItem(){
    if(description.trim() === "") return
    if(date === "") return

    const Item = {
      id: Date.now(),
      date: date,
      description: description,
      isCompleted: false
    }

    setToDoList([...ToDoArray, Item])
    setDescription("")
  }

  function ToggleItem(id: number){
    setToDoList(ToDoArray.map((index) =>
      index.id === id 
      ? { ...index, isCompleted: !index.isCompleted}
      : index
    ))
  }

  function DeleteItem(id: number){
    setToDoList(ToDoArray.filter((index) => index.id !== id))
  }
  
  return (
    <div className="min-h-screen bg-gray-100 flex items-start justify-center pt-16 px-4">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Lista de tarefas</h1>
          <ToDoForm
            description={description}
            date={date}
            filter={filter}
            onChangeDescription={setDescription}
            onChangeDate={setDate}
            onChangeFilter={setFilter}
            onCreate={CreateItem}
          />
          <ToDoList
            todos={ToDoArray}
            filter={filter}
            onDelete={DeleteItem}
            onToggle={ToggleItem}
          />
      </div>
    </div>
  )
}