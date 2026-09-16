// TODO(Level 9): beri tipe props yang benar — { tugas: Tugas[] } (impor
// tipe Tugas dari '../types'). Render:
// - SELALU teks yang memuat pola "<jumlah selesai> dari <total> selesai"
//   (mis. tugas 2 dari 5 selesai -> teks memuat "2" dan "5"),
// - Pakai LOGICAL OPERATOR (&&): TAMBAHAN teks yang memuat kata "Selesai"
//   (mis. "Semua tugas selesai!") HANYA kalau tugas.length lebih dari 0
//   DAN semuanya selesai. Hati-hati: array KOSONG bukan "semua selesai" —
//   jangan sampai pesan perayaan muncul saat tugas.length === 0 (jebakan
//   umum: Array.prototype.every() pada array kosong selalu true).
// Lihat SOAL.md untuk kontrak lengkap.
import type { Tugas } from "../types";
export function RingkasanTugas(props: { tugas:Tugas[] }) {
  return(<p>
    {props.tugas.filter((item) => item.selesai).length} dari {props.tugas.length} selesai
    {props.tugas.length > 0 && props.tugas.every((item) => item.selesai) && " — Semua tugas selesai!"}
  </p>)
}
