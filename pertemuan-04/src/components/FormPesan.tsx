// TODO(Level 10): beri tipe props yang benar — { onKirim: (pesan: string) =>
// void }. Gabungkan semua konsep pertemuan ini: controlled input berlabel
// "Pesan" + tombol submit "Kirim" di dalam <form>. Tombol disabled kalau
// isi pesan (setelah trim) kosong. Saat submit: cegah reload, panggil
// onKirim(pesan yang sudah di-trim), lalu kosongkan input.
// Lihat SOAL.md untuk kontrak lengkap.
import React, { useState } from "react"
export function FormPesan({onKirim}: {onKirim: (pesan: string) => void}) {
  const [pesan, setPesan] = useState("")
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const trimmedPesan = pesan.trim()
    if (trimmedPesan !== '') {
      onKirim(trimmedPesan)
      setPesan("")
    }
  }
  const isKosong = pesan.trim() === ""
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pesan">Pesan</label>
      <input
        id="pesan"
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
      />
      <button type="submit" disabled={isKosong}>
        Kirim
      </button>
    </form>
  )
}
