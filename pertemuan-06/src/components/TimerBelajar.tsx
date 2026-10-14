// TODO(Level 10): beri tipe props yang benar — { detikAwal: number }.
// Gabungkan semua materi pertemuan ini jadi timer belajar:
// - teks "Sisa: {n} detik" (mulai dari detikAwal), tombol "Mulai"/"Jeda"
//   (bergantian) dan tombol "Reset",
// - saat berjalan, sisa berkurang tiap detik; "Jeda" menghentikan timer
//   (tidak ada timer tersisa); "Reset" mengembalikan sisa ke detikAwal
//   dan berhenti,
// - saat sisa = 0: tampil teks "Selesai!", timer berhenti otomatis, dan
//   tombol "Mulai" dinonaktifkan (disabled),
// - judul tab (document.title) selalu "Sisa: {n} detik" selama komponen
//   terpasang, dan KEMBALI ke judul semula saat komponen dilepas
//   (cleanup).
// Lihat SOAL.md untuk kontrak lengkap.
import { useEffect, useState } from "react"
export function TimerBelajar({ detikAwal }: { detikAwal: number }) {
  const [sisa, setSisa] = useState(detikAwal)
  const [berjalan, setBerjalan] = useState(false)

  useEffect(() => {
    const judulAwal = document.title
    return () => {
      document.title = judulAwal
    }
  }, [])

  useEffect(() => {
    document.title = `Sisa: ${sisa} detik`
  }, [sisa])

  useEffect(() => {
    if (!berjalan || sisa <= 0) return
    const timer = setInterval(() => {
      setSisa((prev) => prev - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [berjalan, sisa])

  useEffect(() => {
    if (sisa === 0 && berjalan) {
      setBerjalan(false)
    }
  }, [sisa, berjalan])

  return (
    <div>
      <p>Sisa: {sisa} detik</p>
      {sisa === 0 && <p>Selesai!</p>}
      <button disabled={sisa === 0} onClick={() => setBerjalan((prev) => !prev)}>
        {berjalan ? "Jeda" : "Mulai"}
      </button>
      <button onClick={() => { setSisa(detikAwal); setBerjalan(false) }}>Reset</button>
    </div>
  )
}
