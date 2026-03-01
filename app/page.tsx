'use client'

import { useState } from "react"

type ToDo = {
  id: number;
  description: string;  
  isCompleted: boolean;  
}

export default function ToDo(){
  const [ToDoList, setToDoList] = useState<ToDo[]>([])
  
  const [description, setDescription] = useState("")

  function CreateItem(){
    if(description.trim() === "") return

    const Item = {
      id: Date.now(),
      description: description,
      isCompleted: false
    }

    setToDoList([...ToDoList, Item])
    setDescription("")
  }

  function ToggleItem(id: number){
    setToDoList(ToDoList.map((index) =>
      index.id === id 
      ? { ...index, isCompleted: !index.isCompleted}
      : index
    ))
  }

  function DeleteItem(id: number){
    setToDoList(ToDoList.filter((index) => index.id !== id))
  }
  /*
  function AlterItem(id: number){

  }
  */
  return (
    <>
      {/* Campo para criar a tarefa */}
      <div>
        <input type="text"
        value={description}
        onChange={text => setDescription(text.target.value)}></input>

        <button onClick={CreateItem}>Criar tarefa</button>
      </div>

      {/* Leitura das tarefas já criadas */}
      <div>
        {ToDoList.length === 0 ? (
          <h3>Ainda não foi criada nenhuma tarefa, crie uma agora mesmo no campo acima!</h3>
        ) : (
          ToDoList.map((value, index) => (
            <div>
              <h4>{index+1} Tarefa</h4>
              <p>{value.description}</p>
              {value.isCompleted
              ? (<p>Concluido</p>)
              : (<p>Pendente</p>)}
              <button onClick={() => DeleteItem(value.id)}>Apagar Tarefa</button>
              <button onClick={() => ToggleItem(value.id)}>Alterar Status</button>
            </div>
          ))
        )}
      </div>
    </>
  )

}