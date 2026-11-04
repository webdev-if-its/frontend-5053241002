// TODO(Level 10): komponen TANPA props yang menggabungkan custom hook dan
// Context. Ambil data pengguna dengan useFetch<User>(
// 'https://jsonplaceholder.typicode.com/users/1') dari '../hooks/useFetch'
// (JANGAN memanggil fetch() langsung) dan tema dengan useTema(). Elemen
// root-nya adalah <section> dengan className:
// - memuat "bg-white" saat tema 'terang',
// - memuat "bg-slate-900" saat tema 'gelap'.
// Isi: "Memuat..." selama loading; kalau error "Terjadi error: {pesan}"; kalau
// sukses tampilkan name dan email pengguna.
// Lihat SOAL.md untuk kontrak lengkap.
import { useTema } from '../context/TemaContext'
import { useFetch } from '../hooks/useFetch'
import type { User } from '../types'

export function ProfilPengguna() {
  const { tema } = useTema()
  const { data, loading, error } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/users/1'
  )

  const rootClass = tema === 'terang' ? 'bg-white' : 'bg-slate-900'

  if (loading) {
    return (
      <section className={rootClass}>
        <p>Memuat...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className={rootClass}>
        <p>Terjadi error: {error}</p>
      </section>
    )
  }

  return (
    <section className={rootClass}>
      <h2>{data?.name}</h2>
      <p>{data?.email}</p>
    </section>
  )
}