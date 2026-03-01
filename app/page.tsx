'use client'
import { useState } from "react"

type ToDo = {
  id: number;
  description: string;
  isCompleted: boolean;
}

export default function ToDo() {
  const [ToDoList, setToDoList] = useState<ToDo[]>([])
  const [description, setDescription] = useState("")

  function CreateItem() {
    if (description.trim() === "") return
    const Item = {
      id: Date.now(),
      description: description,
      isCompleted: false
    }
    setToDoList([...ToDoList, Item])
    setDescription("")
  }

  function ToggleItem(id: number) {
    setToDoList(ToDoList.map((index) =>
      index.id === id
        ? { ...index, isCompleted: !index.isCompleted }
        : index
    ))
  }

  function DeleteItem(id: number) {
    setToDoList(ToDoList.filter((index) => index.id !== id))
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Minhas Tarefas</h1>

      {/* Campo para criar a tarefa */}
      <div style={styles.inputRow}>
        <input
          type="text"
          value={description}
          onChange={text => setDescription(text.target.value)}
          onKeyDown={e => e.key === "Enter" && CreateItem()}
          placeholder="Nova tarefa..."
          style={styles.input}
        />
        <button onClick={CreateItem} style={styles.createBtn}>
          + Criar
        </button>
      </div>

      {/* Leitura das tarefas já criadas */}
      <div style={styles.list}>
        {ToDoList.length === 0 ? (
          <p style={styles.emptyMsg}>
            Nenhuma tarefa ainda. Crie uma acima!
          </p>
        ) : (
          ToDoList.map((value, index) => (
            <div
              key={value.id}
              style={{
                ...styles.card,
                opacity: value.isCompleted ? 0.6 : 1,
              }}
            >
              <div style={styles.cardLeft}>
                <span style={styles.cardIndex}>#{index + 1}</span>
                <p style={{
                  ...styles.cardDesc,
                  textDecoration: value.isCompleted ? "line-through" : "none",
                }}>
                  {value.description}
                </p>
              </div>

              <div style={styles.cardRight}>
                <span style={{
                  ...styles.badge,
                  backgroundColor: value.isCompleted ? "#d1fae5" : "#fef3c7",
                  color: value.isCompleted ? "#065f46" : "#92400e",
                }}>
                  {value.isCompleted ? "✓ Concluída" : "⏳ Pendente"}
                </span>
                <button
                  onClick={() => ToggleItem(value.id)}
                  style={styles.toggleBtn}
                  title="Alterar status"
                >
                  {value.isCompleted ? "↩ Reabrir" : "✓ Concluir"}
                </button>
                <button
                  onClick={() => DeleteItem(value.id)}
                  style={styles.deleteBtn}
                  title="Apagar tarefa"
                >
                  ✕
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {ToDoList.length > 0 && (
        <p style={styles.counter}>
          {ToDoList.filter(t => t.isCompleted).length} de {ToDoList.length} concluídas
        </p>
      )}
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "640px",
    margin: "48px auto",
    padding: "0 16px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  title: {
    fontSize: "28px",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#111827",
  },
  inputRow: {
    display: "flex",
    gap: "8px",
    marginBottom: "24px",
  },
  input: {
    flex: 1,
    padding: "10px 14px",
    fontSize: "15px",
    border: "1.5px solid #d1d5db",
    borderRadius: "8px",
    outline: "none",
    transition: "border-color 0.2s",
  },
  createBtn: {
    padding: "10px 18px",
    fontSize: "15px",
    fontWeight: 600,
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  emptyMsg: {
    textAlign: "center",
    color: "#9ca3af",
    fontSize: "15px",
    padding: "40px 0",
  },
  card: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "12px",
    padding: "14px 16px",
    border: "1.5px solid #e5e7eb",
    borderRadius: "10px",
    backgroundColor: "#fff",
    transition: "opacity 0.2s",
  },
  cardLeft: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    flex: 1,
    minWidth: 0,
  },
  cardIndex: {
    fontSize: "12px",
    color: "#9ca3af",
    fontWeight: 600,
    flexShrink: 0,
  },
  cardDesc: {
    fontSize: "15px",
    color: "#374151",
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  cardRight: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: 0,
  },
  badge: {
    fontSize: "12px",
    fontWeight: 600,
    padding: "3px 8px",
    borderRadius: "999px",
  },
  toggleBtn: {
    padding: "5px 10px",
    fontSize: "12px",
    fontWeight: 600,
    backgroundColor: "#f3f4f6",
    color: "#374151",
    border: "1px solid #d1d5db",
    borderRadius: "6px",
    cursor: "pointer",
  },
  deleteBtn: {
    padding: "5px 9px",
    fontSize: "13px",
    fontWeight: 700,
    backgroundColor: "#fee2e2",
    color: "#dc2626",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  counter: {
    textAlign: "right",
    fontSize: "13px",
    color: "#6b7280",
    marginTop: "16px",
  },
}