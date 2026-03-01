'use client'

import { useState } from "react"
import type { ToDo } from "@/types/ToDo"
import ToDoForm from "@/components/TodoForm"
import ToDoList from "@/components/TodoList"

export default function ToDo(){
  const [ToDoArray, setToDoList] = useState<ToDo[]>([])
  const [description, setDescription] = useState("")

  function CreateItem(){
    if(description.trim() === "") return

    const Item = {
      id: Date.now(),
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
            onChange={setDescription}
            onCreate={CreateItem}
          />
          <ToDoList
            todos={ToDoArray}
            onDelete={DeleteItem}
            onToggle={ToggleItem}
          />
      </div>
    </div>
  )
}