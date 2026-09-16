// TODO(Level 8): beri tipe props yang benar — { tugas: Tugas[]; onHapus:
// (id: string) => void } (impor tipe Tugas dari '../types'). Gabungkan
// beberapa konsep pertemuan ini:
// - kalau tugas.length === 0, render teks yang memuat "Tidak ada tugas",
// - kalau tidak, render daftar tugas (boleh pakai <ul>/<li> atau <div>),
//   dan di tiap item sertakan sebuah <Button variant="danger"> berteks
//   "Hapus" yang saat diklik memanggil onHapus(id) dengan id tugas
//   tersebut — MANFAATKAN KEMBALI komponen Button dari Level 7, jangan
//   tulis <button> baru dari nol.
// Lihat SOAL.md untuk kontrak lengkap.
import type { Tugas } from "../types";
import { Button } from "./Button";

export function DaftarTugasLengkap(props: {tugas: Tugas[]; onHapus: (id: string) => void }) {
  if (props.tugas.length === 0) {
    return <p>Tidak ada tugas</p>
  }
  else {
    return (
    <ul>
      {props.tugas.map((item) => (
        <li key={item.id} className="flex items-center gap-2 mb-2">
          <span>{item.teks}</span>
          <Button variant="danger" onClick={() => props.onHapus(item.id)}>
            Hapus
          </Button>
        </li>
      ))}
    </ul>
    )
  }
}
