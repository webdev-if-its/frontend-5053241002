// TODO(Level 8-10): komponen TANPA props — aplikasi todo yang tersambung ke
// API lewat fungsi di '../api/todos' (JANGAN memanggil fetch() langsung di
// sini):
// - saat pertama tampil: ambil daftar (getTodos) dan tampilkan sebagai <li>,
//   tiap <li> berisi checkbox berlabel title + tombol "Hapus",
// - form dengan input berlabel "Todo baru" + tombol "Tambah": panggil
//   addTodo(title), lalu tambahkan todo HASIL RESPONS ke akhir daftar dan
//   kosongkan input,
// - klik checkbox: panggil updateTodo(id, !completed), lalu ganti todo itu di
//   state dengan HASIL RESPONS,
// - klik "Hapus": panggil hapusTodo(id), lalu buang todo itu dari state.
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState, type FormEvent } from "react"
import { getTodos, addTodo, updateTodo, hapusTodo } from "../api/todos"
import type { Todo } from "../types"

export function AplikasiTodoApi() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [baru, setBaru] = useState("")

  useEffect(() => {
    getTodos().then(setTodos).catch(console.error)
  }, [])

  async function handleTambah(e: FormEvent) {
    e.preventDefault()
    if (!baru.trim()) return

    try {
      const res = await addTodo(baru)
      setTodos((prev) => [...prev, res])
      setBaru("")
    } catch (err) {
      console.error(err)
    }
  }

  async function handleToggle(id: number, completed: boolean) {
    try {
      const res = await updateTodo(id, !completed)
      setTodos((prev) => prev.map((todo) => (todo.id === id ? res : todo)))
    } catch (err) {
      console.error(err)
    }
  }

  async function handleHapus(id: number) {
    try {
      await hapusTodo(id)
      setTodos((prev) => prev.filter((todo) => todo.id !== id))
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id, todo.completed)}
              />
              {todo.title}
            </label>
            <button type="button" onClick={() => handleHapus(todo.id)}>
              Hapus
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleTambah}>
        <label>
          Todo baru
          <input value={baru} onChange={(e) => setBaru(e.target.value)} />
        </label>
        <button type="submit">Tambah</button>
      </form>
    </div>
  )
}