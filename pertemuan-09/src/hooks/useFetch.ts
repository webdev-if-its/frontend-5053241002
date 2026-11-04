// TODO(Level 4-6): custom hook generic useFetch<T>(url: string) yang
// mengembalikan object { data, loading, error }:
// - data: T | null (null sampai fetch selesai),
// - loading: boolean (true sejak awal, false setelah selesai — sukses
//   maupun gagal),
// - error: string | null (pesan error; null kalau tidak ada).
// Pakai useState + useEffect dengan [url] sebagai dependency: kalau url
// berubah, ambil ulang (state di-reset dulu). Kalau res.ok false, isi error
// dengan pesan yang memuat kata "gagal"; kalau fetch ditolak, isi error
// dengan err.message. Lihat SOAL.md untuk tanda tangan lengkapnya.
import { useState, useEffect } from 'react'

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let active = true

    setLoading(true)
    setData(null)
    setError(null)

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Gagal mengambil data dari server')
        }
        return res.json()
      })
      .then((json: T) => {
        if (active) {
          setData(json)
          setLoading(false)
        }
      })
      .catch((err: unknown) => {
        if (active) {
          setError(err instanceof Error ? err.message : String(err))
          setLoading(false)
        }
      })

    return () => {
      active = false
    }
  }, [url])

  return { data, loading, error }
}