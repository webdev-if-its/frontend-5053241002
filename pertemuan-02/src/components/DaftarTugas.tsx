// TODO(Level 9): beri tipe props yang benar — { tugas: string[] }. Kalau
// array kosong, render teks "Tidak ada tugas". Kalau tidak kosong, render
// <ul> berisi satu <li> per tugas — WAJIB beri `key` yang tepat di tiap
// <li> (React akan mencatat warning kalau key hilang/salah, dan itu
// dicek otomatis). Lihat SOAL.md untuk kontrak lengkap.
export function DaftarTugas({tugas}: { tugas: string[] }) {
  if (tugas.length === 0) {
    return <p>Tidak ada tugas</p>
  }

  return (
    <ul>
      {tugas.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
